<?php

namespace OCA\Files_Linkeditor\AppInfo;

use OCA\Files\Event\LoadAdditionalScriptsEvent;
use OCA\Files_Sharing\Event\BeforeTemplateRenderedEvent;
use OCP\AppFramework\App;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\AppFramework\Services\IInitialState;
use OCP\IConfig;
use OCP\Util;

class Application extends App implements IBootstrap {
	public const APP_ID = 'files_linkeditor';

	public function __construct(array $urlParams = []) {
		parent::__construct(self::APP_ID, $urlParams);
	}

	public function register(IRegistrationContext $context): void {
		$context->registerEventListener(LoadAdditionalScriptsEvent::class, LoadAdditionalScriptsListener::class);
		$context->registerEventListener(BeforeTemplateRenderedEvent::class, BeforeTemplateRenderedListener::class);
	}

	public function boot(IBootContext $context): void {
	}
}

class BeforeTemplateRenderedListener implements IEventListener {
	public function handle(Event $event): void {
		$container = \OC::$server;
		$config = $container->get(IConfig::class);
		$initialState = $container->get(IInitialState::class);
		
		// Get La Suite Docs URL from app config (set via occ config:app:set)
		$docsUrl = $config->getAppValue(Application::APP_ID, 'docs_url', '');
		$initialState->provideInitialState('docs_url', $docsUrl);
		
		Util::addStyle("files_linkeditor", "linkeditor");
		Util::addScript("files_linkeditor", "bundle");
	}
}

class LoadAdditionalScriptsListener implements IEventListener {
	public function handle(Event $event): void {
		$container = \OC::$server;
		$config = $container->get(IConfig::class);
		$initialState = $container->get(IInitialState::class);
		
		// Get La Suite Docs URL from app config (set via occ config:app:set)
		$docsUrl = $config->getAppValue(Application::APP_ID, 'docs_url', '');
		$initialState->provideInitialState('docs_url', $docsUrl);
		
		Util::addStyle("files_linkeditor", "linkeditor");
		Util::addScript("files_linkeditor", "bundle");
	}
}
