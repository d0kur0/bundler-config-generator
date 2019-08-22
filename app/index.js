#!/usr/bin/env node

const prompts = require('prompts');
const path    = require('path');
const fs      = require('fs');
const log     = console.log;
const chalk   = require('chalk');

(async () => {
	const response = await prompts(require('./questions'));

	fs.readdir(process.cwd(), (err, files) => {
		if (err) {
			log(chalk.red('❌ Не удалось прочитать текущую директорию'));
			process.exit();
		}

		if (files.length) {
			log(chalk.red('❌ Текущая директория не пуста'), files.length);
			process.exit();
		}
	});


})();