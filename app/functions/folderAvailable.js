const fs = require('fs');

module.exports = (folderPath) => {
	const folder = fs.readdirSync(folderPath);

	return !folder || folder.length;
};