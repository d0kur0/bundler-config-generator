const prompts = require('prompts');
const fs = require('fs');

module.exports = async () => {
	const currentDir = fs.readdirSync(process.cwd());

	if (!currentDir) {
		throw new Error("Failed to read current directory");
	} else if (currentDir.length) {
		const response = await prompts([{
			type: "confirm",
			name: "isInstall",
			message: "The directory is not empty, install in this directory?",
			initial: false
		}]);

		return response.isInstall;
	}

	return true;
};