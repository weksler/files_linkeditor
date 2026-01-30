import { viewMode, currentFile } from "./store.js";
import { FileServiceNext } from "./File-next.service";
import { Parser } from "./Parser";
import { Permission, registerFileAction, addNewFileMenuEntry, DefaultType } from "@nextcloud/files";

// Supported MIME types - includes both legacy .url/.webloc and new .mtd format
const supportedMimetypes = ["application/internet-shortcut", "application/x-mothertree-document"];
const getSpanWithIconClass = () => '<span class="icon-link" style="display: block;"></span>';

// Helper to check if a file has a supported mimetype
const isSupportedMimetype = (mime) => supportedMimetypes.some(m => mime === m || mime?.includes(m));

/**
 * Detect the docs host dynamically based on the current hostname.
 * files.dev.mother-tree.org -> docs.dev.mother-tree.org
 * files.prod.mother-tree.org -> docs.prod.mother-tree.org
 */
function getDocsHost() {
	const hostname = window.location.hostname;
	if (hostname.startsWith('files.')) {
		return hostname.replace(/^files\./, 'docs.');
	}
	// Fallback to build-time value if hostname doesn't match expected pattern
	return getDocsHost() || null;
}

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
			files.every((file) => file.permissions >= Permission.UPDATE && isSupportedMimetype(file.mime)),
	});

		// View action on single file
		registerFileAction({
			id: "viewLink",
			displayName: () => t("files_linkeditor", "View link"),
			iconSvgInline: getSpanWithIconClass,
			exec: async (file) => {
				const docsHost = getDocsHost();
				
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
						let parsedFile;
						if (extension === "webloc") {
							parsedFile = Parser.parseWeblocFile(loadedFile.filecontents);
						} else if (extension === "mtd") {
							parsedFile = Parser.parseMTDFile(loadedFile.filecontents);
						} else {
							parsedFile = Parser.parseURLFile(loadedFile.filecontents);
						}
						
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
			files.every((file) => file.permissions >= Permission.READ && isSupportedMimetype(file.mime)),
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
		const docsHost = getDocsHost();
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
					
					// Generate unique filename with timestamp - use .mtd extension for MotherTree Documents
					const timestamp = new Date().toISOString().slice(0, 16).replace(/[T:]/g, "-");
					const fileName = `Document-${timestamp}.mtd`;
					
					// Create the link file pointing to the new document
					// Set skipConfirmation=true so clicking the file opens it directly
					const fileContent = Parser.generateMTDFileContent("", docUrl, false, true);
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

			// File action to convert DOCX files to La Suite Docs (MTD) format
			const docxMimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
			registerFileAction({
				id: "convertDocxToMtd",
				displayName: () => window.t("files_linkeditor", "Convert to MotherTree Docs"),
				iconSvgInline: () => '<span class="icon-file" style="display: block;"></span>',
				exec: async (file) => {
					// Build the file path relative to user root
					const filePath = file.dirname ? `${file.dirname}/${file.basename}` : file.basename;
					
					try {
						window.OC.Notification.showTemporary(
							window.t("files_linkeditor", "Converting document..."),
							{ timeout: 3 }
						);
						
						const response = await fetch(
							window.OC.generateUrl("/apps/files_linkeditor/api/convert-docx"),
							{
								method: "POST",
								headers: {
									"requesttoken": window.OC.requestToken,
									"Content-Type": "application/json",
								},
								body: JSON.stringify({ filePath }),
							}
						);
						
						if (!response.ok) {
							const error = await response.json();
							console.error("[LaSuite] Failed to queue DOCX conversion:", error);
							window.OC.Notification.showTemporary(
								error.message || window.t("files_linkeditor", "Failed to convert document."),
								{ type: "error" }
							);
							return;
						}
						
						const result = await response.json();
						console.log("[LaSuite] DOCX conversion queued:", result);
						window.OC.Notification.showTemporary(
							window.t("files_linkeditor", "Document conversion queued. You will be notified when complete."),
							{ timeout: 5 }
						);
						
					} catch (error) {
						console.error("[LaSuite] Error converting document:", error);
						window.OC.Notification.showTemporary(
							window.t("files_linkeditor", "An error occurred while converting the document."),
							{ type: "error" }
						);
					}
				},
				enabled: (files) =>
					window.OC.currentUser &&
					files.length === 1 &&
					files.every((file) => file.mime === docxMimeType),
				order: 100, // Show after other actions
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
		} else if (extension === "mtd") {
			parsedFile = Parser.parseMTDFile(file.filecontents);
		} else {
			parsedFile = Parser.parseURLFile(file.filecontents);
		}
		
		// Auto-skip confirmation for La Suite docs URLs (open in new window)
		const docsHost = getDocsHost();
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
		// Read extension and run fitting generator.
		const extension = Parser.getExtension(name);
		// Generate the file content based on extension.
		let fileContent = "";
		if (extension === "webloc") {
			fileContent = Parser.generateWeblocFileContent("", url, sameWindow, skipConfirmation);
		} else if (extension === "mtd") {
			fileContent = Parser.generateMTDFileContent("", url, sameWindow, skipConfirmation);
		} else {
			fileContent = Parser.generateURLFileContent("", url, sameWindow, skipConfirmation);
		}
		// Save file
		await FileServiceNext.save({ fileContent, name, dir, fileModifiedTime });
		// Hide editor
		viewMode.update(() => "none");
	}
}
