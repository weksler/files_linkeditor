<?php

/**
 * @copyright Copyright (c) 2024
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

namespace OCA\Files_Linkeditor\Service;

use OCP\EventDispatcher\IEventDispatcher;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\Files\NotFoundException;
use OCP\Http\Client\IClientService;
use OCP\IConfig;
use OCP\ITempManager;
use Psr\Log\LoggerInterface;

/**
 * Service to convert DOCX files to La Suite Docs (MTD) format.
 * 
 * Conversion process:
 * 1. Extract DOCX file to temp directory
 * 2. Run Pandoc to convert to markdown (with media extraction)
 * 3. Extract track changes and append as revision history
 * 4. Upload extracted images to Nextcloud
 * 5. Rewrite image URLs in markdown
 * 6. Create document in La Suite Docs via API
 * 7. Create .mtd file pointing to the new document
 */
class DocxConversionService {

	private const PANDOC_PATH = '/usr/local/bin/pandoc';
	private const SUPPORTED_MIME_TYPE = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

	public function __construct(
		private IRootFolder $rootFolder,
		private IEventDispatcher $eventDispatcher,
		private IClientService $httpClientService,
		private IConfig $config,
		private ITempManager $tempManager,
		private LoggerInterface $logger
	) {
	}

	/**
	 * Convert a DOCX file to La Suite Docs format.
	 *
	 * @param string $filePath Path to the DOCX file relative to user's root
	 * @param string $userId User ID
	 * @param string|null $accessToken Pre-fetched OIDC access token (optional, will be fetched if not provided)
	 * @return array Result with 'success', 'mtdPath', 'documentUrl', 'error' keys
	 */
	public function convertDocxToMtd(string $filePath, string $userId, ?string $accessToken = null): array {
		$this->logger->info("Starting DOCX conversion for user {$userId}: {$filePath}");

		try {
			// Validate pandoc is available
			if (!$this->isPandocAvailable()) {
				throw new \RuntimeException('Pandoc binary not found at ' . self::PANDOC_PATH . '. Conversion cannot proceed.');
			}

			// Get user folder and file
			$userFolder = $this->rootFolder->getUserFolder($userId);
			$file = $userFolder->get($filePath);

			if (!($file instanceof File)) {
				throw new \InvalidArgumentException("Path does not point to a file: {$filePath}");
			}

			// Validate MIME type
			if ($file->getMimeType() !== self::SUPPORTED_MIME_TYPE) {
				throw new \InvalidArgumentException("File is not a DOCX document: {$file->getMimeType()}");
			}

			// Create temp directory for conversion
			$tempDir = $this->tempManager->getTemporaryFolder('docx_conversion_');
			$docxPath = $tempDir . 'input.docx';
			$markdownPath = $tempDir . 'output.md';
			$trackChangesPath = $tempDir . 'track_changes.html';
			$mediaDir = $tempDir . 'media';

			// Write DOCX to temp file
			file_put_contents($docxPath, $file->getContent());

			// Extract track changes first (for revision history)
			$trackChanges = $this->extractTrackChanges($docxPath, $trackChangesPath);

			// Convert DOCX to markdown
			$this->runPandocConversion($docxPath, $markdownPath, $mediaDir);

			// Read converted markdown
			if (!file_exists($markdownPath)) {
				throw new \RuntimeException('Pandoc conversion failed: output file not created');
			}
			$markdown = file_get_contents($markdownPath);

			// Log the raw markdown for debugging
			$this->logger->warning("DOCX conversion: Pandoc output", [
				'markdownLength' => strlen($markdown),
				'markdownPreview' => substr($markdown, 0, 500),
				'markdownEnd' => substr($markdown, -500),
			]);

			// Handle images - upload to Nextcloud and rewrite URLs
			$parentFolder = $file->getParent();
			$baseName = pathinfo($file->getName(), PATHINFO_FILENAME);
			$markdown = $this->processImages($markdown, $mediaDir, $parentFolder, $baseName);

			// Append track changes as revision history
			if (!empty($trackChanges)) {
				$markdown .= $this->formatRevisionHistory($trackChanges);
			}

			// Create document in La Suite Docs
			// Use provided token or fetch from session
			$token = $accessToken ?? $this->getOidcToken();
			$documentData = $this->createDocsDocument($baseName, $markdown, $token);

			// Create .mtd file
			$mtdFileName = $baseName . '.mtd';
			$mtdContent = $this->generateMtdContent($documentData['url']);
			$mtdFile = $parentFolder->newFile($mtdFileName, $mtdContent);

			$this->logger->info("DOCX conversion completed: {$filePath} -> {$mtdFileName}");

			return [
				'success' => true,
				'mtdPath' => $mtdFile->getPath(),
				'documentUrl' => $documentData['url'],
				'documentId' => $documentData['id'],
			];

		} catch (\Exception $e) {
			$this->logger->error("DOCX conversion failed for {$filePath}: " . $e->getMessage(), [
				'exception' => $e,
				'userId' => $userId,
			]);

			return [
				'success' => false,
				'error' => $e->getMessage(),
			];
		}
	}

	/**
	 * Check if pandoc binary is available.
	 */
	private function isPandocAvailable(): bool {
		return file_exists(self::PANDOC_PATH) && is_executable(self::PANDOC_PATH);
	}

	/**
	 * Run Pandoc to convert DOCX to markdown with media extraction.
	 */
	private function runPandocConversion(string $inputPath, string $outputPath, string $mediaDir): void {
		mkdir($mediaDir, 0755, true);

		$command = sprintf(
			'%s --from=docx --to=gfm --extract-media=%s --wrap=none --track-changes=accept %s -o %s 2>&1',
			escapeshellarg(self::PANDOC_PATH),
			escapeshellarg($mediaDir),
			escapeshellarg($inputPath),
			escapeshellarg($outputPath)
		);

		$output = [];
		$returnCode = 0;
		exec($command, $output, $returnCode);

		if ($returnCode !== 0) {
			$errorOutput = implode("\n", $output);
			throw new \RuntimeException("Pandoc conversion failed (exit code {$returnCode}): {$errorOutput}");
		}
	}

	/**
	 * Extract track changes from DOCX for revision history.
	 * 
	 * @return array Array of ['type' => 'insert'|'delete', 'text' => string, 'author' => string, 'date' => string]
	 */
	private function extractTrackChanges(string $inputPath, string $outputPath): array {
		$command = sprintf(
			'%s --from=docx --to=html --track-changes=all %s -o %s 2>&1',
			escapeshellarg(self::PANDOC_PATH),
			escapeshellarg($inputPath),
			escapeshellarg($outputPath)
		);

		$output = [];
		$returnCode = 0;
		exec($command, $output, $returnCode);

		if ($returnCode !== 0 || !file_exists($outputPath)) {
			$this->logger->warning('Failed to extract track changes, continuing without revision history');
			return [];
		}

		$html = file_get_contents($outputPath);
		return $this->parseTrackChangesHtml($html);
	}

	/**
	 * Parse track changes from Pandoc's HTML output.
	 */
	private function parseTrackChangesHtml(string $html): array {
		$changes = [];

		// Parse insertions: <ins>text</ins>
		if (preg_match_all('/<ins[^>]*>([^<]+)<\/ins>/i', $html, $matches)) {
			foreach ($matches[1] as $text) {
				$text = trim(strip_tags($text));
				if (!empty($text)) {
					$changes[] = ['type' => 'insert', 'text' => $text];
				}
			}
		}

		// Parse deletions: <del>text</del>
		if (preg_match_all('/<del[^>]*>([^<]+)<\/del>/i', $html, $matches)) {
			foreach ($matches[1] as $text) {
				$text = trim(strip_tags($text));
				if (!empty($text)) {
					$changes[] = ['type' => 'delete', 'text' => $text];
				}
			}
		}

		return $changes;
	}

	/**
	 * Format track changes as markdown revision history section.
	 */
	private function formatRevisionHistory(array $changes): string {
		if (empty($changes)) {
			return '';
		}

		$output = "\n\n---\n\n## Revision History\n\n";
		$output .= "*The following changes were accepted during conversion:*\n\n";

		foreach ($changes as $change) {
			$typeLabel = $change['type'] === 'insert' ? '**Added:**' : '**Removed:**';
			// Truncate long text
			$text = $change['text'];
			if (strlen($text) > 100) {
				$text = substr($text, 0, 100) . '...';
			}
			$output .= "- {$typeLabel} {$text}\n";
		}

		return $output;
	}

	/**
	 * Process extracted images - upload to Nextcloud and rewrite URLs.
	 */
	private function processImages(string $markdown, string $mediaDir, Folder $parentFolder, string $baseName): string {
		// Check if media directory has any files
		$mediaPath = $mediaDir . '/media';
		if (!is_dir($mediaPath)) {
			return $markdown;
		}

		$imageFiles = glob($mediaPath . '/*');
		if (empty($imageFiles)) {
			return $markdown;
		}

		// Create folder for images in Nextcloud
		$imageFolderName = $baseName . '_media';
		try {
			$imageFolder = $parentFolder->get($imageFolderName);
		} catch (NotFoundException $e) {
			$imageFolder = $parentFolder->newFolder($imageFolderName);
		}

		// Upload each image and build URL mapping
		$urlMapping = [];
		foreach ($imageFiles as $imagePath) {
			$imageName = basename($imagePath);
			$imageContent = file_get_contents($imagePath);

			try {
				// Create or overwrite image file
				try {
					$existingFile = $imageFolder->get($imageName);
					$existingFile->putContent($imageContent);
					$uploadedFile = $existingFile;
				} catch (NotFoundException $e) {
					$uploadedFile = $imageFolder->newFile($imageName, $imageContent);
				}

				// Map the pandoc-generated path to the Nextcloud path
				// Pandoc generates paths like: media/image1.png
				$pandocPath = 'media/media/' . $imageName;
				$altPandocPath = 'media/' . $imageName;
				
				// For La Suite Docs, we'll use a relative reference that works within the document
				// Note: This may need adjustment based on how Docs handles images
				$ncPath = $imageFolderName . '/' . $imageName;
				
				$urlMapping[$pandocPath] = $ncPath;
				$urlMapping[$altPandocPath] = $ncPath;

				$this->logger->debug("Uploaded image: {$imageName} to {$ncPath}");
			} catch (\Exception $e) {
				$this->logger->warning("Failed to upload image {$imageName}: " . $e->getMessage());
			}
		}

		// Rewrite image URLs in markdown
		foreach ($urlMapping as $oldPath => $newPath) {
			$markdown = str_replace($oldPath, $newPath, $markdown);
		}

		return $markdown;
	}

	/**
	 * Get OIDC access token for API calls.
	 */
	private function getOidcToken(): string {
		if (!class_exists(\OCA\UserOIDC\Event\ExternalTokenRequestedEvent::class)) {
			throw new \RuntimeException('user_oidc app is not installed');
		}

		$event = new \OCA\UserOIDC\Event\ExternalTokenRequestedEvent();
		$this->eventDispatcher->dispatchTyped($event);
		$token = $event->getToken();

		if ($token === null) {
			throw new \RuntimeException('No OIDC token available. User may need to log in again.');
		}

		return $token->getAccessToken();
	}

	/**
	 * Create a document in La Suite Docs via API.
	 *
	 * Converts markdown to Y.js format using the Y-Provider service,
	 * then creates the document with the converted content.
	 */
	private function createDocsDocument(string $title, string $content, string $accessToken): array {
		$docsUrl = $this->config->getAppValue('files_linkeditor', 'docs_url', '');
		if (empty($docsUrl)) {
			throw new \RuntimeException('La Suite Docs URL not configured');
		}

		// Get Y-Provider configuration
		$yProviderUrl = $this->config->getAppValue('files_linkeditor', 'yprovider_url', '');
		$yProviderKey = $this->config->getAppValue('files_linkeditor', 'yprovider_api_key', '');
		
		if (empty($yProviderUrl) || empty($yProviderKey)) {
			throw new \RuntimeException('Y-Provider URL or API key not configured');
		}

		$this->logger->warning("DOCX conversion: Converting markdown to Y.js", [
			'title' => $title,
			'contentLength' => strlen($content),
		]);

		// Step 1: Convert markdown to Y.js using Y-Provider
		$convertUrl = rtrim($yProviderUrl, '/') . '/convert/';
		
		$ch = curl_init();
		curl_setopt_array($ch, [
			CURLOPT_URL => $convertUrl,
			CURLOPT_POST => true,
			CURLOPT_POSTFIELDS => $content,
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_HTTPHEADER => [
				'Authorization: Bearer ' . $yProviderKey,
				'Content-Type: text/markdown',
				'Accept: application/vnd.yjs.doc',
			],
			CURLOPT_TIMEOUT => 60,
		]);
		
		$yjsContent = curl_exec($ch);
		$convertStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);
		$convertError = curl_error($ch);
		curl_close($ch);
		
		if ($convertError) {
			throw new \RuntimeException("Y-Provider conversion error: {$convertError}");
		}
		
		if ($convertStatus !== 200) {
			throw new \RuntimeException("Y-Provider conversion failed (status {$convertStatus}): " . substr($yjsContent, 0, 200));
		}

		// Base64-encode the Y.js binary content
		$base64Content = base64_encode($yjsContent);

		$this->logger->warning("DOCX conversion: Creating document in La Suite Docs", [
			'title' => $title,
			'yjsContentLength' => strlen($yjsContent),
			'base64Length' => strlen($base64Content),
		]);

		// Step 2: Create document with Y.js content
		$apiUrl = rtrim($docsUrl, '/') . '/api/v1.0/documents/';
		
		$ch = curl_init();
		curl_setopt_array($ch, [
			CURLOPT_URL => $apiUrl,
			CURLOPT_POST => true,
			CURLOPT_POSTFIELDS => json_encode([
				'title' => $title,
				'content' => $base64Content,
			]),
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_HTTPHEADER => [
				'Authorization: Bearer ' . $accessToken,
				'Content-Type: application/json',
			],
			CURLOPT_TIMEOUT => 60,
		]);
		
		$responseBody = curl_exec($ch);
		$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
		$curlError = curl_error($ch);
		curl_close($ch);
		
		if ($curlError) {
			throw new \RuntimeException("Curl error: {$curlError}");
		}

		$this->logger->warning("DOCX conversion: La Suite Docs response", [
			'statusCode' => $statusCode,
			'responseBody' => substr($responseBody, 0, 500),
		]);

		if ($statusCode !== 201 && $statusCode !== 200) {
			throw new \RuntimeException("Failed to create document in La Suite Docs (status {$statusCode}): {$responseBody}");
		}

		$data = json_decode($responseBody, true);
		if (!isset($data['id'])) {
			throw new \RuntimeException('Invalid response from La Suite Docs API: missing document ID. Response: ' . substr($responseBody, 0, 200));
		}

		return [
			'id' => $data['id'],
			'url' => rtrim($docsUrl, '/') . '/docs/' . $data['id'] . '/',
		];
	}

	/**
	 * Generate .mtd file content.
	 */
	private function generateMtdContent(string $documentUrl): string {
		return "[MotherTree]\n" .
			"URL={$documentUrl}\n" .
			"X-Skip-Confirm-Navigation=1\n";
	}

	/**
	 * Check if a file is a DOCX document.
	 */
	public static function isDocxFile(File $file): bool {
		return $file->getMimeType() === self::SUPPORTED_MIME_TYPE;
	}
}
