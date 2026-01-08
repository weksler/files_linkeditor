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

use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\JSONResponse;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\Http\Client\IClientService;
use OCP\IConfig;
use OCP\IRequest;
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

	/**
	 * @param string $AppName
	 * @param IRequest $request
	 * @param IEventDispatcher $eventDispatcher
	 * @param LoggerInterface $logger
	 * @param IClientService $httpClientService
	 * @param IConfig $config
	 */
	public function __construct(
		$AppName,
		IRequest $request,
		IEventDispatcher $eventDispatcher,
		LoggerInterface $logger,
		IClientService $httpClientService,
		IConfig $config
	) {
		parent::__construct($AppName, $request);
		$this->eventDispatcher = $eventDispatcher;
		$this->logger = $logger;
		$this->httpClientService = $httpClientService;
		$this->config = $config;
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
}
