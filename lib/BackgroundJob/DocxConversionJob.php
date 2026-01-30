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

namespace OCA\Files_Linkeditor\BackgroundJob;

use OCA\Files_Linkeditor\Service\DocxConversionService;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\QueuedJob;
use OCP\Notification\IManager as NotificationManager;
use Psr\Log\LoggerInterface;

/**
 * Background job to convert DOCX files to La Suite Docs format.
 * 
 * This job is queued when:
 * - A DOCX file is uploaded (via NodeCreatedEvent listener)
 * - User manually requests conversion via file action
 */
class DocxConversionJob extends QueuedJob {

	public function __construct(
		ITimeFactory $time,
		private DocxConversionService $conversionService,
		private NotificationManager $notificationManager,
		private LoggerInterface $logger
	) {
		parent::__construct($time);
	}

	/**
	 * Run the DOCX conversion job.
	 *
	 * @param array $argument Job arguments containing:
	 *   - filePath: string - Path to the DOCX file relative to user's root
	 *   - userId: string - User ID who owns the file
	 */
	protected function run($argument): void {
		if (!isset($argument['filePath']) || !isset($argument['userId'])) {
			$this->logger->error('DocxConversionJob: Missing required arguments (filePath, userId)');
			return;
		}

		$filePath = $argument['filePath'];
		$userId = $argument['userId'];

		$this->logger->info("DocxConversionJob: Starting conversion for {$filePath} (user: {$userId})");

		$result = $this->conversionService->convertDocxToMtd($filePath, $userId);

		if ($result['success']) {
			$this->logger->info("DocxConversionJob: Successfully converted {$filePath} to {$result['mtdPath']}");
			$this->sendSuccessNotification($userId, $filePath, $result['mtdPath']);
		} else {
			$this->logger->error("DocxConversionJob: Failed to convert {$filePath}: {$result['error']}");
			$this->sendFailureNotification($userId, $filePath, $result['error']);
		}
	}

	/**
	 * Send notification on successful conversion.
	 */
	private function sendSuccessNotification(string $userId, string $docxPath, string $mtdPath): void {
		try {
			$notification = $this->notificationManager->createNotification();
			$notification
				->setApp('files_linkeditor')
				->setUser($userId)
				->setDateTime(new \DateTime())
				->setObject('docx_conversion', md5($docxPath))
				->setSubject('docx_conversion_success', [
					'docxFile' => basename($docxPath),
					'mtdFile' => basename($mtdPath),
				]);
			$this->notificationManager->notify($notification);
		} catch (\Exception $e) {
			// Notification failure shouldn't fail the job
			$this->logger->warning('Failed to send conversion success notification: ' . $e->getMessage());
		}
	}

	/**
	 * Send notification on failed conversion.
	 */
	private function sendFailureNotification(string $userId, string $docxPath, string $error): void {
		try {
			$notification = $this->notificationManager->createNotification();
			$notification
				->setApp('files_linkeditor')
				->setUser($userId)
				->setDateTime(new \DateTime())
				->setObject('docx_conversion', md5($docxPath))
				->setSubject('docx_conversion_failed', [
					'docxFile' => basename($docxPath),
					'error' => $error,
				]);
			$this->notificationManager->notify($notification);
		} catch (\Exception $e) {
			// Notification failure shouldn't fail the job
			$this->logger->warning('Failed to send conversion failure notification: ' . $e->getMessage());
		}
	}
}
