const path = require('path');

module.exports = () => {
	return process.cwd().split(path.sep).pop() || "";
}