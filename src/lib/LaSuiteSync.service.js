/**
 * La Suite Docs Title Sync Service
 * 
 * Periodically syncs La Suite document titles with Nextcloud filenames.
 * - New files (< 10 minutes old): sync every 10 seconds
 * - Older files: sync every 60 seconds
 */

const DOCS_HOST = import.meta.env.VITE_DOCS_HOST;
const DOCS_URL_PATTERN = DOCS_HOST ? new RegExp(`https://${DOCS_HOST.replace(/\./g, '\\.')}/docs/([a-f0-9-]+)/?`, 'i') : null;

/**
 * Refresh the Nextcloud file list after renaming files
 * Uses breadcrumb click which triggers Vue data refresh without page reload
 */
function refreshFileList() {
	console.log('[LaSuiteSync] Refreshing file list...');
	
	// Method 1: Click the current folder in breadcrumb (triggers Vue data refresh)
	// The current folder is always the LAST breadcrumb item
	const breadcrumbSelectors = [
		// NC 28+ Vue-based file list
		'.files-list__header-breadcrumbs .vue-crumb:last-of-type a',
		'.breadcrumb__crumbs .vue-crumb:last-of-type a', 
		// Alternative selectors
		'[data-cy-files-content-breadcrumbs] a:last-of-type',
		'.breadcrumb .crumb:last-of-type a',
	];
	
	for (const selector of breadcrumbSelectors) {
		const crumb = document.querySelector(selector);
		if (crumb) {
			console.log('[LaSuiteSync] Clicking breadcrumb:', selector);
			crumb.click();
			return;
		}
	}
	
	// Method 2: Try OCA.Files.App.fileList.reload() (older Nextcloud)
	if (window.OCA?.Files?.App?.fileList?.reload) {
		console.log('[LaSuiteSync] Using fileList.reload()');
		window.OCA.Files.App.fileList.reload();
		return;
	}
	
	// Method 3: Trigger a soft refresh by re-navigating to current URL
	// This uses Vue Router's popstate handling
	console.log('[LaSuiteSync] Dispatching popstate');
	window.dispatchEvent(new PopStateEvent('popstate', { state: window.history.state }));
}

// Track file creation times for smart polling
const fileCreationTimes = new Map();

// Track last sync time per document to implement different intervals
const lastSyncTime = new Map();

// Sync intervals
const NEW_FILE_INTERVAL = 10 * 1000; // 10 seconds for files < 10 minutes old
const OLD_FILE_INTERVAL = 60 * 1000; // 60 seconds for older files
const NEW_FILE_THRESHOLD = 10 * 60 * 1000; // 10 minutes

let syncTimerId = null;

/**
 * Extract La Suite document ID from a URL
 */
function extractDocId(url) {
	if (!DOCS_URL_PATTERN) return null;
	const match = url.match(DOCS_URL_PATTERN);
	return match ? match[1] : null;
}

/**
 * Parse a .URL file content to extract the URL
 */
function parseUrlFileContent(content) {
	const match = content.match(/URL=(.+)/i);
	return match ? match[1].trim() : null;
}

/**
 * Sanitize a title for use as a filename
 */
function sanitizeFilename(title) {
	// Remove or replace invalid filename characters
	return title
		.replace(/[<>:"/\\|?*]/g, '-')
		.replace(/\s+/g, ' ')
		.trim()
		.substring(0, 200); // Limit length
}

/**
 * Get the current directory from URL
 */
function getCurrentDirectory() {
	// Try query parameter first (newer Nextcloud: ?dir=/path)
	const urlParams = new URLSearchParams(window.location.search);
	const dirParam = urlParams.get('dir');
	if (dirParam) {
		return dirParam.startsWith('/') ? dirParam : '/' + dirParam;
	}
	
	// Try URL hash (older Nextcloud: #/path/to/folder)
	const hash = window.location.hash;
	if (hash && hash.startsWith('#')) {
		const path = hash.substring(1).split('?')[0];
		const decoded = decodeURIComponent(path);
		return decoded.startsWith('/') ? decoded : '/' + decoded;
	}
	
	// Fallback to root
	return '/';
}

/**
 * Get the current user ID
 */
function getCurrentUserId() {
	// Try various ways Nextcloud exposes the user ID
	return window.OC?.currentUser?.uid 
		|| window.OC?.currentUser 
		|| window._oc_current_user
		|| document.head.querySelector('[data-user]')?.dataset?.user
		|| null;
}

/**
 * Get the current folder's files via WebDAV
 */
async function getCurrentFolderFiles() {
	const currentDir = getCurrentDirectory();
	const userId = getCurrentUserId();
	
	if (!userId) {
		console.debug('[LaSuiteSync] User not available, trying alternatives...');
		// Try to extract from page
		const userEl = document.getElementById('user');
		if (userEl) {
			console.debug('[LaSuiteSync] Found user element:', userEl);
		}
		return [];
	}
	
	console.debug(`[LaSuiteSync] User ID: ${userId}, Dir: ${currentDir}`);

	try {
		// Use WebDAV PROPFIND to list files
		const webdavUrl = window.OC.generateUrl(`/remote.php/dav/files/${userId}${currentDir}`);
		
		const response = await fetch(webdavUrl, {
			method: 'PROPFIND',
			headers: {
				'Depth': '1',
				'Content-Type': 'application/xml',
				'requesttoken': window.OC.requestToken,
			},
			body: `<?xml version="1.0" encoding="UTF-8"?>
				<d:propfind xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">
					<d:prop>
						<d:displayname/>
						<d:getlastmodified/>
						<d:getcontenttype/>
					</d:prop>
				</d:propfind>`,
		});

		if (!response.ok) {
			console.debug('[LaSuiteSync] WebDAV request failed:', response.status);
			return [];
		}

		const text = await response.text();
		const parser = new DOMParser();
		const xml = parser.parseFromString(text, 'application/xml');
		
		const responses = xml.querySelectorAll('response');
		const files = [];
		
		responses.forEach((resp, index) => {
			// Skip the first response (it's the folder itself)
			if (index === 0) return;
			
			const href = resp.querySelector('href')?.textContent || '';
			const displayname = resp.querySelector('displayname')?.textContent || '';
			const lastmodified = resp.querySelector('getlastmodified')?.textContent || '';
			
			// Check if it's a .URL or .webloc file
			const name = displayname || decodeURIComponent(href.split('/').pop());
			if (name.toLowerCase().endsWith('.url') || name.toLowerCase().endsWith('.webloc')) {
				files.push({
					name: name,
					path: currentDir === '/' ? `/${name}` : `${currentDir}/${name}`,
					mtime: lastmodified ? new Date(lastmodified).getTime() : Date.now(),
				});
			}
		});
		
		console.debug(`[LaSuiteSync] Found ${files.length} link files in ${currentDir}`);
		return files;
		
	} catch (e) {
		console.debug('[LaSuiteSync] Error listing files:', e);
		return [];
	}
}

/**
 * Fetch file content via Nextcloud API
 */
async function fetchFileContent(filePath) {
	try {
		const response = await fetch(
			window.OC.generateUrl('/apps/files_linkeditor/ajax/loadfile') + 
			`?dir=${encodeURIComponent(filePath.substring(0, filePath.lastIndexOf('/')) || '/')}&filename=${encodeURIComponent(filePath.substring(filePath.lastIndexOf('/') + 1))}`,
			{
				headers: {
					'requesttoken': window.OC.requestToken,
				},
			}
		);
		
		if (!response.ok) return null;
		
		const data = await response.json();
		return data.filecontents;
	} catch (e) {
		console.debug('[LaSuiteSync] Failed to fetch file content:', e);
		return null;
	}
}

/**
 * Sync document titles with filenames
 */
async function syncDocumentTitles() {
	if (!DOCS_HOST || !window.OC?.currentUser) {
		return;
	}

	try {
		const files = await getCurrentFolderFiles();
		if (files.length === 0) return;

		const now = Date.now();
		const documentsToSync = [];

		// Process each file
		for (const file of files) {
			const content = await fetchFileContent(file.path);
			if (!content) continue;

			const url = parseUrlFileContent(content);
			if (!url) continue;

			const docId = extractDocId(url);
			if (!docId) continue;

			// Track creation time
			if (!fileCreationTimes.has(file.path)) {
				fileCreationTimes.set(file.path, file.mtime || now);
			}

			const creationTime = fileCreationTimes.get(file.path);
			const fileAge = now - creationTime;
			const lastSync = lastSyncTime.get(docId) || 0;
			const timeSinceLastSync = now - lastSync;

			// Determine if we should sync this file based on its age
			const interval = fileAge < NEW_FILE_THRESHOLD ? NEW_FILE_INTERVAL : OLD_FILE_INTERVAL;
			
			if (timeSinceLastSync >= interval) {
				documentsToSync.push({
					id: docId,
					filePath: file.path,
					fileName: file.name,
				});
				lastSyncTime.set(docId, now);
			}
		}

		if (documentsToSync.length === 0) return;

		// Fetch titles from backend
		const response = await fetch(
			window.OC.generateUrl('/apps/files_linkeditor/api/document-titles'),
			{
				method: 'POST',
				headers: {
					'requesttoken': window.OC.requestToken,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ documents: documentsToSync }),
			}
		);

		if (!response.ok) {
			console.debug('[LaSuiteSync] Failed to fetch document titles');
			return;
		}

		const { documents } = await response.json();

		// Process title updates
		const renamedFiles = [];
		for (const doc of documents) {
			if (!doc.title || doc.error) continue;

			const originalFile = documentsToSync.find(d => d.id === doc.id);
			if (!originalFile) continue;

			// Build expected filename from title
			const extension = originalFile.fileName.substring(originalFile.fileName.lastIndexOf('.'));
			const expectedName = sanitizeFilename(doc.title) + extension;
			const dir = originalFile.filePath.substring(0, originalFile.filePath.lastIndexOf('/')) || '/';
			const newPath = dir === '/' ? `/${expectedName}` : `${dir}/${expectedName}`;

			// Check if rename is needed
			if (originalFile.fileName !== expectedName) {
				console.log(`[LaSuiteSync] Renaming: ${originalFile.fileName} -> ${expectedName}`);
				
				try {
					const renameResponse = await fetch(
						window.OC.generateUrl('/apps/files_linkeditor/api/rename-file'),
						{
							method: 'POST',
							headers: {
								'requesttoken': window.OC.requestToken,
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								filePath: originalFile.filePath,
								newName: expectedName,
							}),
						}
					);

					if (renameResponse.ok) {
						// Update our tracking
						fileCreationTimes.delete(originalFile.filePath);
						renamedFiles.push({
							oldPath: originalFile.filePath,
							newPath: newPath,
							newName: expectedName,
						});
					}
				} catch (e) {
					console.debug('[LaSuiteSync] Failed to rename file:', e);
				}
			}
		}

		// Refresh the file list if any files were renamed
		if (renamedFiles.length > 0) {
			refreshFileList();
		}
	} catch (e) {
		console.debug('[LaSuiteSync] Sync error:', e);
	}
}

/**
 * Force an immediate sync of all files in current folder (ignoring intervals)
 */
async function syncAllImmediately() {
	if (!DOCS_HOST || !window.OC?.currentUser) {
		return;
	}

	try {
		const files = await getCurrentFolderFiles();
		if (files.length === 0) return;

		const documentsToSync = [];

		// Process each file without checking intervals
		for (const file of files) {
			const content = await fetchFileContent(file.path);
			if (!content) continue;

			const url = parseUrlFileContent(content);
			if (!url) continue;

			const docId = extractDocId(url);
			if (!docId) continue;

			documentsToSync.push({
				id: docId,
				filePath: file.path,
				fileName: file.name,
			});
			
			// Update last sync time
			lastSyncTime.set(docId, Date.now());
			
			// Track creation time if not already tracked
			if (!fileCreationTimes.has(file.path)) {
				fileCreationTimes.set(file.path, file.mtime || Date.now());
			}
		}

		if (documentsToSync.length === 0) return;

		console.log(`[LaSuiteSync] Immediate sync of ${documentsToSync.length} documents`);

		// Fetch titles from backend
		const response = await fetch(
			window.OC.generateUrl('/apps/files_linkeditor/api/document-titles'),
			{
				method: 'POST',
				headers: {
					'requesttoken': window.OC.requestToken,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ documents: documentsToSync }),
			}
		);

		if (!response.ok) {
			console.debug('[LaSuiteSync] Failed to fetch document titles');
			return;
		}

		const { documents } = await response.json();

		// Process title updates
		const renamedFiles = [];
		for (const doc of documents) {
			if (!doc.title || doc.error) continue;

			const originalFile = documentsToSync.find(d => d.id === doc.id);
			if (!originalFile) continue;

			// Build expected filename from title
			const extension = originalFile.fileName.substring(originalFile.fileName.lastIndexOf('.'));
			const expectedName = sanitizeFilename(doc.title) + extension;
			const dir = originalFile.filePath.substring(0, originalFile.filePath.lastIndexOf('/')) || '/';
			const newPath = dir === '/' ? `/${expectedName}` : `${dir}/${expectedName}`;

			// Check if rename is needed
			if (originalFile.fileName !== expectedName) {
				console.log(`[LaSuiteSync] Renaming: ${originalFile.fileName} -> ${expectedName}`);
				
				try {
					const renameResponse = await fetch(
						window.OC.generateUrl('/apps/files_linkeditor/api/rename-file'),
						{
							method: 'POST',
							headers: {
								'requesttoken': window.OC.requestToken,
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								filePath: originalFile.filePath,
								newName: expectedName,
							}),
						}
					);

					if (renameResponse.ok) {
						fileCreationTimes.delete(originalFile.filePath);
						renamedFiles.push({
							oldPath: originalFile.filePath,
							newPath: newPath,
							newName: expectedName,
						});
					}
				} catch (e) {
					console.debug('[LaSuiteSync] Failed to rename file:', e);
				}
			}
		}

		// Refresh the file list if any files were renamed
		if (renamedFiles.length > 0) {
			refreshFileList();
		}
	} catch (e) {
		console.debug('[LaSuiteSync] Immediate sync error:', e);
	}
}

/**
 * Start the sync timer
 */
export function startSync() {
	if (!DOCS_HOST) {
		console.debug('[LaSuiteSync] DOCS_HOST not configured, sync disabled');
		return;
	}

	if (syncTimerId) {
		return; // Already running
	}

	// Debug: log available user info
	console.log('[LaSuiteSync] Starting document title sync');
	console.log('[LaSuiteSync] OC.currentUser:', window.OC?.currentUser);
	console.log('[LaSuiteSync] _oc_current_user:', window._oc_current_user);
	console.log('[LaSuiteSync] data-user:', document.head.querySelector('[data-user]')?.dataset?.user);
	
	// Run sync every 5 seconds (the actual per-file intervals are managed internally)
	syncTimerId = setInterval(syncDocumentTitles, 5000);
	
	// Also run immediately
	syncDocumentTitles();
	
	// Listen for folder changes to trigger immediate sync
	let lastDir = null;
	let lastUrl = window.location.href;
	
	const checkFolderChange = () => {
		const currentDir = getCurrentDirectory();
		const currentUrl = window.location.href;
		
		// Check if URL or directory changed
		if (currentDir !== lastDir || currentUrl !== lastUrl) {
			lastDir = currentDir;
			lastUrl = currentUrl;
			console.log(`[LaSuiteSync] Folder changed to: ${currentDir}`);
			// Small delay to let the file list populate
			setTimeout(syncAllImmediately, 500);
		}
	};
	
	// Check for folder changes every second (watches URL)
	setInterval(checkFolderChange, 1000);
	
	// Also listen for popstate (back/forward navigation)
	window.addEventListener('popstate', () => {
		console.log('[LaSuiteSync] Navigation detected');
		setTimeout(syncAllImmediately, 500);
	});
}

/**
 * Stop the sync timer
 */
export function stopSync() {
	if (syncTimerId) {
		clearInterval(syncTimerId);
		syncTimerId = null;
		console.log('[LaSuiteSync] Stopped document title sync');
	}
}

/**
 * Mark a newly created file for immediate sync
 */
export function trackNewFile(filePath) {
	fileCreationTimes.set(filePath, Date.now());
}
