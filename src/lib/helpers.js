/**
 * Check and fix file extension based on the template name.
 * Supports .url, .webloc, and .mtd (MotherTree Document) extensions.
 * @param {Object} file - File object with name and templateName properties
 * @returns {Object} File object with corrected extension if needed
 */
export const checkAndFixExtension = (file) => {
	if (!file?.name || !file?.templateName) {
		return file;
	}

	const [, extension] = file.templateName.split(".") ?? [];
	const lowerCaseFileName = file.name.toLocaleLowerCase();
	if (extension && !lowerCaseFileName.endsWith(extension.toLocaleLowerCase())) {
		file.name += `.${extension}`;
	}

	return file;
};
