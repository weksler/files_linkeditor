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
 *
 */

namespace OCA\Files_Linkeditor\Controller;

use OCA\Files_Linkeditor\BackgroundJob\DocxConversionJob;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\JSONResponse;
use OCP\BackgroundJob\IJobList;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\Files\IRootFolder;
use OCP\Http\Client\IClientService;
use OCP\IConfig;
use OCP\IRequest;
use OCP\IUserSession;
use Psr\Log\LoggerInterface;

class TokenController extends Controller {

	/** @var IEventDispatcher */
	private $eventDispatcher;

	/** @var LoggerInterface */
	private $logger;

	/** @var IClientService */
	private $httpClientService;

	/** @var IConfig */
	private $config;

	/** @var IRootFolder */
	private $rootFolder;

	/** @var IUserSession */
	private $userSession;

	/** @var IJobList */
	private $jobList;

	/**
	 * @param string $AppName
	 * @param IRequest $request
	 * @param IEventDispatcher $eventDispatcher
	 * @param LoggerInterface $logger
	 * @param IClientService $httpClientService
	 * @param IConfig $config
	 * @param IRootFolder $rootFolder
	 * @param IUserSession $userSession
	 * @param IJobList $jobList
	 */
	public function __construct(
		$AppName,
		IRequest $request,
		IEventDispatcher $eventDispatcher,
		LoggerInterface $logger,
		IClientService $httpClientService,
		IConfig $config,
		IRootFolder $rootFolder,
		IUserSession $userSession,
		IJobList $jobList
	) {
		parent::__construct($AppName, $request);
		$this->eventDispatcher = $eventDispatcher;
		$this->logger = $logger;
		$this->httpClientService = $httpClientService;
		$this->config = $config;
		$this->rootFolder = $rootFolder;
		$this->userSession = $userSession;
		$this->jobList = $jobList;
	}

	/**
	 * Create a new document in La Suite Docs using the user's OIDC token.
	 * This endpoint makes the API call server-side to avoid CSP issues.
	 *
	 * @NoAdminRequired
	 *
	 * @return JSONResponse
	 */
	public function createDocument(): JSONResponse {
		// Get the docs URL from app config
		$docsUrl = $this->config->getAppValue('files_linkeditor', 'docs_url', '');
		if (empty($docsUrl)) {
			$this->logger->error('docs_url not configured for files_linkeditor');
			return new JSONResponse(
				['error' => 'not_configured', 'message' => 'La Suite Docs URL not configured'],
				Http::STATUS_SERVICE_UNAVAILABLE
			);
		}

		// Check if user_oidc app is available
		if (!class_exists(\OCA\UserOIDC\Event\ExternalTokenRequestedEvent::class)) {
			$this->logger->warning('user_oidc app is not installed or available');
			return new JSONResponse(
				['error' => 'oidc_not_available', 'message' => 'The user_oidc app is not installed'],
				Http::STATUS_SERVICE_UNAVAILABLE
			);
		}

		try {
			// Step 1: Get OIDC token
			$event = new \OCA\UserOIDC\Event\ExternalTokenRequestedEvent();
			$this->eventDispatcher->dispatchTyped($event);
			$token = $event->getToken();

			if ($token === null) {
				$this->logger->debug('No OIDC token found in session');
				return new JSONResponse(
					['error' => 'no_token', 'message' => 'No OIDC token found. Please log in again.'],
					Http::STATUS_UNAUTHORIZED
				);
			}

			$accessToken = $token->getAccessToken();
			$this->logger->debug('Got OIDC token, creating document in La Suite Docs');

			// Step 2: Create document in La Suite Docs
			$client = $this->httpClientService->newClient();
			$apiUrl = rtrim($docsUrl, '/') . '/api/v1.0/documents/';
			
			$response = $client->post($apiUrl, [
				'headers' => [
					'Authorization' => 'Bearer ' . $accessToken,
					'Content-Type' => 'application/json',
				],
				'body' => json_encode(['title' => null]),
				'timeout' => 30,
			]);

			$statusCode = $response->getStatusCode();
			if ($statusCode !== 201 && $statusCode !== 200) {
				$this->logger->error('La Suite Docs API returned status ' . $statusCode);
				return new JSONResponse(
					['error' => 'api_error', 'message' => 'Failed to create document (status ' . $statusCode . ')'],
					Http::STATUS_BAD_GATEWAY
				);
			}

			$docData = json_decode($response->getBody(), true);
			if (!isset($docData['id'])) {
				$this->logger->error('La Suite Docs API response missing document ID');
				return new JSONResponse(
					['error' => 'invalid_response', 'message' => 'Invalid response from La Suite Docs'],
					Http::STATUS_BAD_GATEWAY
				);
			}

			$documentUrl = rtrim($docsUrl, '/') . '/docs/' . $docData['id'] . '/';
			$this->logger->info('Created new document: ' . $documentUrl);

			return new JSONResponse([
				'id' => $docData['id'],
				'url' => $documentUrl,
			], Http::STATUS_CREATED);

		} catch (\OCA\UserOIDC\Exception\GetExternalTokenFailedException $e) {
			$this->logger->error('Failed to get external token: ' . $e->getMessage());
			return new JSONResponse([
				'error' => 'token_error',
				'message' => $e->getErrorDescription() ?? $e->getMessage(),
			], Http::STATUS_INTERNAL_SERVER_ERROR);

		} catch (\Exception $e) {
			$this->logger->error('Error creating document: ' . $e->getMessage());
			return new JSONResponse(
				['error' => 'internal_error', 'message' => 'An unexpected error occurred: ' . $e->getMessage()],
				Http::STATUS_INTERNAL_SERVER_ERROR
			);
		}
	}

	/**
	 * Fetch document titles from La Suite Docs for a batch of document IDs.
	 * Used by the frontend to sync filenames with document titles.
	 *
	 * @NoAdminRequired
	 *
	 * @param array $documents Array of {id, filePath} objects
	 * @return JSONResponse
	 */
	public function getDocumentTitles(array $documents): JSONResponse {
		$docsUrl = $this->config->getAppValue('files_linkeditor', 'docs_url', '');
		if (empty($docsUrl)) {
			return new JSONResponse(
				['error' => 'not_configured'],
				Http::STATUS_SERVICE_UNAVAILABLE
			);
		}

		if (!class_exists(\OCA\UserOIDC\Event\ExternalTokenRequestedEvent::class)) {
			return new JSONResponse(
				['error' => 'oidc_not_available'],
				Http::STATUS_SERVICE_UNAVAILABLE
			);
		}

		try {
			// Get OIDC token
			$event = new \OCA\UserOIDC\Event\ExternalTokenRequestedEvent();
			$this->eventDispatcher->dispatchTyped($event);
			$token = $event->getToken();

			if ($token === null) {
				return new JSONResponse(
					['error' => 'no_token'],
					Http::STATUS_UNAUTHORIZED
				);
			}

			$accessToken = $token->getAccessToken();
			$client = $this->httpClientService->newClient();
			$results = [];

			foreach ($documents as $doc) {
				if (!isset($doc['id'])) {
					continue;
				}

				$docId = $doc['id'];
				try {
					$apiUrl = rtrim($docsUrl, '/') . '/api/v1.0/documents/' . $docId . '/';
					$response = $client->get($apiUrl, [
						'headers' => [
							'Authorization' => 'Bearer ' . $accessToken,
						],
						'timeout' => 10,
					]);

					$docData = json_decode($response->getBody(), true);
					$results[] = [
						'id' => $docId,
						'title' => $docData['title'] ?? null,
						'filePath' => $doc['filePath'] ?? null,
					];
				} catch (\Exception $e) {
					$this->logger->debug('Failed to fetch document ' . $docId . ': ' . $e->getMessage());
					// Document may have been deleted - include it with null title
					$results[] = [
						'id' => $docId,
						'title' => null,
						'error' => 'fetch_failed',
						'filePath' => $doc['filePath'] ?? null,
					];
				}
			}

			return new JSONResponse(['documents' => $results], Http::STATUS_OK);

		} catch (\Exception $e) {
			$this->logger->error('Error fetching document titles: ' . $e->getMessage());
			return new JSONResponse(
				['error' => 'internal_error'],
				Http::STATUS_INTERNAL_SERVER_ERROR
			);
		}
	}

	/**
	 * Rename a file in the user's folder.
	 *
	 * @NoAdminRequired
	 *
	 * @param string $filePath Current file path (relative to user root)
	 * @param string $newName New filename (just the name, not full path)
	 * @return JSONResponse
	 */
	public function renameFile(string $filePath, string $newName): JSONResponse {
		try {
			$user = $this->userSession->getUser();
			if ($user === null) {
				return new JSONResponse(
					['error' => 'not_authenticated'],
					Http::STATUS_UNAUTHORIZED
				);
			}

			$userFolder = $this->rootFolder->getUserFolder($user->getUID());
			
			// Get the file
			$file = $userFolder->get($filePath);
			
			// Get parent folder path
			$parentPath = dirname($filePath);
			if ($parentPath === '.') {
				$parentPath = '';
			}
			
			// Build new path
			$newPath = $parentPath ? $parentPath . '/' . $newName : $newName;
			
			// Rename (move) the file
			$file->move($userFolder->getPath() . '/' . $newPath);
			
			$this->logger->info('Renamed file from ' . $filePath . ' to ' . $newPath);

			return new JSONResponse([
				'success' => true,
				'oldPath' => $filePath,
				'newPath' => $newPath,
			], Http::STATUS_OK);

		} catch (\OCP\Files\NotFoundException $e) {
			return new JSONResponse(
				['error' => 'file_not_found', 'message' => 'File not found'],
				Http::STATUS_NOT_FOUND
			);
		} catch (\Exception $e) {
			$this->logger->error('Error renaming file: ' . $e->getMessage());
			return new JSONResponse(
				['error' => 'internal_error', 'message' => $e->getMessage()],
				Http::STATUS_INTERNAL_SERVER_ERROR
			);
		}
	}

	/**
	 * Queue a DOCX file for conversion to La Suite Docs (MTD) format.
	 *
	 * This endpoint queues a background job to:
	 * 1. Convert DOCX to markdown using Pandoc
	 * 2. Extract and upload images to Nextcloud
	 * 3. Create a document in La Suite Docs
	 * 4. Create an .mtd file pointing to the document
	 *
	 * @NoAdminRequired
	 *
	 * @param string $filePath Path to the DOCX file (relative to user root)
	 * @return JSONResponse
	 */
	public function convertDocx(string $filePath): JSONResponse {
		try {
			$user = $this->userSession->getUser();
			if ($user === null) {
				return new JSONResponse(
					['error' => 'not_authenticated', 'message' => 'User not authenticated'],
					Http::STATUS_UNAUTHORIZED
				);
			}

			// Validate that La Suite Docs is configured
			$docsUrl = $this->config->getAppValue('files_linkeditor', 'docs_url', '');
			if (empty($docsUrl)) {
				return new JSONResponse(
					['error' => 'not_configured', 'message' => 'La Suite Docs URL not configured'],
					Http::STATUS_SERVICE_UNAVAILABLE
				);
			}

			// Validate file exists and is a DOCX
			$userId = $user->getUID();
			$userFolder = $this->rootFolder->getUserFolder($userId);
			
			try {
				$file = $userFolder->get($filePath);
			} catch (\OCP\Files\NotFoundException $e) {
				return new JSONResponse(
					['error' => 'file_not_found', 'message' => 'File not found: ' . $filePath],
					Http::STATUS_NOT_FOUND
				);
			}

			$mimeType = $file->getMimeType();
			$expectedMime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
			if ($mimeType !== $expectedMime) {
				return new JSONResponse(
					['error' => 'invalid_file_type', 'message' => "File is not a DOCX document (got {$mimeType})"],
					Http::STATUS_BAD_REQUEST
				);
			}

			// Queue the conversion job
			$this->jobList->add(DocxConversionJob::class, [
				'filePath' => $filePath,
				'userId' => $userId,
			]);

			$this->logger->info("Queued DOCX conversion for {$filePath} (user: {$userId})");

			return new JSONResponse([
				'status' => 'queued',
				'message' => 'Conversion has been queued. You will be notified when complete.',
				'filePath' => $filePath,
			], Http::STATUS_ACCEPTED);

		} catch (\Exception $e) {
			$this->logger->error('Error queuing DOCX conversion: ' . $e->getMessage());
			return new JSONResponse(
				['error' => 'internal_error', 'message' => $e->getMessage()],
				Http::STATUS_INTERNAL_SERVER_ERROR
			);
		}
	}
}
