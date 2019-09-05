#!/usr/bin/env node

const prompts = require('prompts');
const log = console.log;
const chalk = require('chalk');

(async () => {
	const response = await prompts(require('./questions'));

	try {
		await require('./modules/initNPM')(response.name);
		await require('./modules/installPackages')(response);
		require('./modules/makeStruct')();
		require('./modules/generateConfig')(response);

		log(chalk.magenta('Установка завершена'));
	} catch (e) {
		log(chalk.red(` - ${e.message} \r\n Stack: \r\n ${e.stack}`));
	}
})();