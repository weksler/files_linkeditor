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

namespace OCA\Files_Linkeditor\Listener;

use OCA\Files_Linkeditor\BackgroundJob\DocxConversionJob;
use OCA\Files_Linkeditor\Service\DocxConversionService;
use OCP\BackgroundJob\IJobList;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Files\Events\Node\NodeCreatedEvent;
use OCP\Files\File;
use OCP\IConfig;
use OCP\IUserSession;
use Psr\Log\LoggerInterface;

/**
 * Listener for file upload events to automatically convert DOCX files.
 * 
 * When a DOCX file is uploaded, this listener queues a background job
 * to convert it to La Suite Docs (MTD) format.
 */
class DocxUploadListener implements IEventListener {

	private const DOCX_MIME_TYPE = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

	public function __construct(
		private IJobList $jobList,
		private IUserSession $userSession,
		private IConfig $config,
		private LoggerInterface $logger
	) {
	}

	public function handle(Event $event): void {
		if (!($event instanceof NodeCreatedEvent)) {
			return;
		}

		$node = $event->getNode();

		// Only process files, not folders
		if (!($node instanceof File)) {
			return;
		}

		// Check if it's a DOCX file
		if ($node->getMimeType() !== self::DOCX_MIME_TYPE) {
			return;
		}

		// Check if auto-conversion is enabled (can be disabled per-app config)
		$autoConvertEnabled = $this->config->getAppValue('files_linkeditor', 'docx_auto_convert', 'true');
		if ($autoConvertEnabled !== 'true') {
			return;
		}

		// Check if La Suite Docs URL is configured
		$docsUrl = $this->config->getAppValue('files_linkeditor', 'docs_url', '');
		if (empty($docsUrl)) {
			$this->logger->debug('DocxUploadListener: Skipping conversion - docs_url not configured');
			return;
		}

		// Get the current user
		$user = $this->userSession->getUser();
		if ($user === null) {
			$this->logger->warning('DocxUploadListener: No user session available, skipping auto-conversion');
			return;
		}

		$userId = $user->getUID();
		$filePath = $this->getRelativePath($node->getPath(), $userId);

		$this->logger->info("DocxUploadListener: Queuing conversion for DOCX upload: {$filePath}");

		// Queue the background job
		$this->jobList->add(DocxConversionJob::class, [
			'filePath' => $filePath,
			'userId' => $userId,
		]);
	}

	/**
	 * Get the file path relative to the user's root folder.
	 */
	private function getRelativePath(string $absolutePath, string $userId): string {
		// Path format is typically: /userId/files/path/to/file.docx
		$prefix = '/' . $userId . '/files/';
		if (str_starts_with($absolutePath, $prefix)) {
			return substr($absolutePath, strlen($prefix));
		}

		// Fallback - try to extract after /files/
		if (preg_match('#/files/(.+)$#', $absolutePath, $matches)) {
			return $matches[1];
		}

		return $absolutePath;
	}
}
