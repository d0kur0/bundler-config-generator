const prompts = require('prompts');
const fs = require('fs');

module.exports = async () => {
	const currentDir = fs.readdirSync(process.cwd());

	if (!currentDir) {
		throw new Error(`Не удалось прочитать папку: ${currentDir}`);
	} else if (currentDir.length) {
		const response = await prompts([{
			type: "confirm",
			name: "isInstall",
			message: "Эта директория не пуста, некоторые файлы могут быть перезаписаны, продолжить?",
			initial: false
		}]);

		return response.isInstall;
	}

	return true;
};