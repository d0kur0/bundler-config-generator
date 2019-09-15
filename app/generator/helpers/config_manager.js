const fs = require('fs');
const prettifyCode = require('./prettify_code');

exports = function read (filePath) {
	const data = fs.readFileSync(filePath, 'utf8');

	if (!data) {
		throw new Error(`Error read: ${filePath}`);
	}

	return data;
};

exports = function write (filePath, fileData, isPrettify = false) {
	if (isPrettify) fileData = prettifyCode(fileData);

	if (!fs.writeFileSync(filePath, fileData)) {
		throw new Error(`Error write to file ${filePath}`);
	}
};

exports = function copy (sourcePath, destinationPath) {
	fs.copyFileSync(sourcePath, destinationPath);
};