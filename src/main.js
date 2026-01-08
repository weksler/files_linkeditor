import "vite/modulepreload-polyfill";
import App from "./views/App.svelte";
import { LinkeditorServiceNext } from "./lib/Linkeditor-next.service";
import { LinkeditorService } from "./lib/Linkeditor.service";
import { startSync } from "./lib/LaSuiteSync.service";

const components = [];

components.push(
	new App({
		target: document.body,
		props: {},
	}),
);

LinkeditorService.registerFileActions();
LinkeditorServiceNext.registerFileActions();

// Start La Suite document title sync (only if DOCS_HOST is configured)
startSync();
