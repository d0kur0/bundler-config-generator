#!/usr/bin/env node

const prompts = require('prompts');
const log = console.log;
const chalk = require('chalk');

(async () => {
	const response = await prompts(require('./questions'));

	try {
		await require('./init-npm')(response.name);
		await require('./installer')(response);

		log(chalk.magenta('\r\n Установка завершена'));
	} catch (e) {
		log(chalk.red(` - ${e.message} \r\n Stack: \r\n ${e.stack}`));
	}
})();