const prompts = require('prompts');
const path    = require('path');
const fs      = require('fs');
const log     = console.log;
const chalk   = require('chalk');

(async () => {
	const response = await prompts(require('./questions'));

	const currentDir = path.parse(__dirname).dir;
	fs.readdir(currentDir, (err, files) => {
		if (err) {
			log(chalk.red('❌ Не удалось прочитать текущую директорию'));
			process.exit();
		}

		if (files.length) {
			log(chalk.red('❌ Текущая директория не пуста'));
			process.exit();
		}
	});

	const packageJSON = {
		name: response.name,
		version: "1.0.0",
		description: "",
		main: "index.js"
	};
})();