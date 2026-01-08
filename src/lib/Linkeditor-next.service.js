import { viewMode, currentFile } from "./store.js";
import { FileServiceNext } from "./File-next.service";
import { Parser } from "./Parser";
import { Permission, registerFileAction, addNewFileMenuEntry, DefaultType } from "@nextcloud/files";

const supportedMimetype = "application/internet-shortcut";
const getSpanWithIconClass = () => '<span class="icon-link" style="display: block;"></span>';

// Mokey-patch OC.dialogs, since somebody misspelled Dialogs.OK_BUTTON/S/...
window.OC.dialogs.alert = function (title, message) {
	window.OC.dialogs.message(
		t("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."),
		t("files_linkeditor", "A slight problem"),
		"alert",
		71, // Dialogs.OK_BUTTONS
	);
};

export class LinkeditorServiceNext {
	/**
	 * Registers the file actions with files app
	 */
	static registerFileActions() {
		// Edit action on single file
		registerFileAction({
			id: "editLink",
			displayName: () => t("files_linkeditor", "Edit link"),
			iconSvgInline: getSpanWithIconClass,
			exec: async (file) => {
				await LinkeditorServiceNext.loadAndChangeViewMode({
					fileName: file.basename,
					dirName: file.dirname,
					nextViewMode: "edit",
					permissions: file.permissions,
				});
			},
			enabled: (files) =>
				window.OC.currentUser &&
				files.every((file) => file.permissions >= Permission.UPDATE && supportedMimetype.includes(file.mime)),
		});

		// View action on single file
		registerFileAction({
			id: "viewLink",
			displayName: () => t("files_linkeditor", "View link"),
			iconSvgInline: getSpanWithIconClass,
			exec: async (file) => {
				const docsHost = import.meta.env.VITE_DOCS_HOST;
				
				if (window.OC.currentUser) {
					// For La Suite docs, open window FIRST (synchronously) to avoid popup blocker
					// Then load the file and update the window location
					if (docsHost) {
						// Open window immediately with about:blank - this is synchronous and won't be blocked
						// Note: can't use noopener because we need to set location.href later
						const newWindow = window.open("about:blank", "_blank");
						
						// Now load the file asynchronously
						const loadedFile = await FileServiceNext.load({ 
							fileName: file.basename, 
							dir: file.dirname 
						});
						
						if (loadedFile) {
							const extension = Parser.getExtension(file.basename);
							const parsedFile = extension === "webloc" 
								? Parser.parseWeblocFile(loadedFile.filecontents)
								: Parser.parseURLFile(loadedFile.filecontents);
							
							// If it's a La Suite docs URL, navigate the already-opened window
							if (parsedFile.url && parsedFile.url.includes(docsHost)) {
								if (newWindow) {
									newWindow.location.href = parsedFile.url;
								}
								return;
							}
						}
						
						// Not a La Suite doc - close the blank window and show normal viewer
						if (newWindow) {
							newWindow.close();
						}
					}
					
					// Not a La Suite doc, use normal flow with viewer
					await LinkeditorServiceNext.loadAndChangeViewMode({
						fileName: file.basename,
						dirName: file.dirname,
						nextViewMode: "view",
						permissions: file.permissions,
					});
				} else {
					// Public share
					// From Nextcloud 31, the filename is in `displayname`
					// while `basename` is the share key
					await LinkeditorServiceNext.loadAndChangeViewMode({
						fileName: file.displayname ?? file.basename,
						dirName: file.dirname,
						nextViewMode: "view",
						// TODO:
						downloadUrl: file.source,
						publicUser: true,
						permissions: file.permissions,
					});
				}
			},
			enabled: (files) =>
				files.every((file) => file.permissions >= Permission.READ && supportedMimetype.includes(file.mime)),
			default: () => DefaultType.DEFAULT,
		});

		const menuEntryFactory = ({ id, displayName, templateName }) => {
			// Register the new menu entry
			addNewFileMenuEntry({
				id,
				displayName,
				enabled: (context) => context.permissions >= Permission.CREATE,
				iconClass: "icon-link",
				handler: (context, contents) => {
					const dir = context.path;
					// First name the file
					viewMode.update(() => "filename");
					currentFile.update(() =>
						FileServiceNext.getFileConfig({
							name: templateName,
							templateName,
							dir,
							isNew: true,
							existingContents: contents,
							onCreate: async (file) => {
								// Now edit and create the file
								viewMode.update(() => "edit");
								currentFile.update(() =>
									FileServiceNext.getFileConfig({
										name: file.name,
										dir: file.dir,
										isNew: true,
										onCreate: async (file) => {
											await LinkeditorServiceNext.saveAndChangeViewMode(file);
										},
									}),
								);
							},
						}),
					);
				},
			});
		};

		menuEntryFactory({
			id: "application-internet-shortcut",
			displayName: `${window.t("files_linkeditor", "New link")} (.URL)`,
			// TRANSLATORS default filename when creating a new link file from the files list, keep .URL at the end
			templateName: window.t("files_linkeditor", "Link.URL"),
		});
		menuEntryFactory({
			id: "application-internet-shortcut-webloc",
			displayName: `${window.t("files_linkeditor", "New link")} (.webloc)`,
			// TRANSLATORS default filename when creating a new link file from the files list, keep .webloc at the end
			templateName: window.t("files_linkeditor", "Link.webloc"),
		});

		// La Suite Docs integration - only show if DOCS_HOST was provided at build time
		const docsHost = import.meta.env.VITE_DOCS_HOST;
		if (docsHost) {
			const docsBaseUrl = `https://${docsHost}`;
			addNewFileMenuEntry({
				id: "lasuite-new-document",
				displayName: window.t("files_linkeditor", "New Document"),
				enabled: (context) => context.permissions >= Permission.CREATE,
				iconClass: "icon-file",
				handler: async (context, contents) => {
					const dir = context.path;
					
					try {
						// Create document via our PHP backend (avoids CSP issues)
						const response = await fetch(
							window.OC.generateUrl("/apps/files_linkeditor/api/create-document"),
							{
								method: "POST",
								headers: {
									"requesttoken": window.OC.requestToken,
									"Content-Type": "application/json",
								},
							}
						);
						
						if (!response.ok) {
							const error = await response.json();
							console.error("[LaSuite] Failed to create document:", error);
							window.OC.Notification.showTemporary(
								error.message || window.t("files_linkeditor", "Failed to create document.")
							);
							// Fallback: open docs homepage
							window.open(docsBaseUrl, "_blank", "noopener,noreferrer");
							return;
						}
						
						const { id, url: docUrl } = await response.json();
						
						// Generate unique filename with timestamp
						const timestamp = new Date().toISOString().slice(0, 16).replace(/[T:]/g, "-");
						const fileName = `Document-${timestamp}.url`;
						
						// Create the link file pointing to the new document
						// Set skipConfirmation=true so clicking the file opens it directly
						const fileContent = Parser.generateURLFileContent("", docUrl, false, true);
						FileServiceNext.save({ fileContent, name: fileName, dir, fileModifiedTime: 0 });
						
						// Use the app's viewer to navigate (with skipConfirmation + new window)
						viewMode.update(() => "view");
						setTimeout(() => {
							currentFile.update(() =>
								FileServiceNext.getFileConfig({
									name: fileName,
									url: docUrl,
									dir,
									isLoaded: true,
									sameWindow: false,
									skipConfirmation: true,
								}),
							);
						}, 50);
						
					} catch (error) {
						console.error("[LaSuite] Error creating document:", error);
						window.OC.Notification.showTemporary(
							window.t("files_linkeditor", "An error occurred while creating the document.")
						);
						// Fallback: open docs homepage
						window.open(docsBaseUrl, "_blank", "noopener,noreferrer");
					}
				},
			});
		}
	}

	static async loadAndChangeViewMode({ fileName, dirName, nextViewMode, publicUser, downloadUrl, permissions }) {
		// Get ready to show viewer
		viewMode.update(() => nextViewMode);
		// Preliminary file config update
		currentFile.update(() =>
			FileServiceNext.getFileConfig({
				name: fileName,
				dir: dirName ? dirName : "",
				permissions,
				isPublicLink: publicUser,
			}),
		);
		// Load file from backend
		let file = {};
		if (publicUser) {
			file = await FileServiceNext.loadPublic({ downloadUrl });
		} else {
			file = await FileServiceNext.load({ fileName, dir: dirName });
		}
		if (file) {
			// Read extension and run fitting parser.
			const extension = Parser.getExtension(fileName);
			// Parse the filecontent to get to the URL.
			let parsedFile = {};
			if (extension === "webloc") {
				parsedFile = Parser.parseWeblocFile(file.filecontents);
			} else {
				parsedFile = Parser.parseURLFile(file.filecontents);
			}
			
			// Auto-skip confirmation for La Suite docs URLs (open in new window)
			const docsHost = import.meta.env.VITE_DOCS_HOST;
			if (docsHost && parsedFile.url && parsedFile.url.includes(docsHost)) {
				parsedFile.skipConfirmation = true;
				parsedFile.sameWindow = false;
			}
			
			// Update file info in store
			currentFile.update((fileConfig) =>
				FileServiceNext.getFileConfig({
					...fileConfig,
					...parsedFile,
					fileModifiedTime: file.mtime,
					isLoaded: true,
				}),
			);
		} else {
			window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
		}
	}

	static async saveAndChangeViewMode({ name, dir, url, fileModifiedTime, sameWindow, skipConfirmation }) {
		// Read extension and run fitting parser.
		const extension = Parser.getExtension(name);
		// Parse the filecontent to get to the URL.
		let fileContent = "";
		if (extension === "webloc") {
			fileContent = Parser.generateWeblocFileContent("", url, sameWindow, skipConfirmation);
		} else {
			fileContent = Parser.generateURLFileContent("", url, sameWindow, skipConfirmation);
		}
		// Save file
		await FileServiceNext.save({ fileContent, name, dir, fileModifiedTime });
		// Hide editor
		viewMode.update(() => "none");
	}
}
