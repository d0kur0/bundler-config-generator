#!/usr/bin/env node

const prompts = require('prompts');
const log = console.log;
const chalk = require('chalk');

(async () => {
	const response = await prompts(require('./questions'));

	try {
		await require('./modules/initNPM')(response.name);
		//await require('./modules/installPackages')(response);
		require('./modules/makeStruct')();
		require('./modules/generateConfig')(response);

		log(chalk.magenta('\nУстановка завершена'));
		log(chalk.cyanBright(' npm run build - сборка бандла'));
		log(chalk.cyanBright(' npm run serve - запуск dev-сервера и автосборки файлов по изменению'));
	} catch (e) {
		log(chalk.red(` - ${e.message} \r\n Stack: \r\n ${e.stack}`));
		process.exit(1);
	}
})();