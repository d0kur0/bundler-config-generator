const fs = require('fs');

module.exports = () => {
	const folder = fs.readdirSync(process.cwd());

	return !folder || folder.length;
};