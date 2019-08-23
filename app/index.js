#!/usr/bin/env node

const prompts = require('prompts');
const path = require('path');
const fs = require('fs');
const log = console.log;
const chalk = require('chalk');
const exec = require("child_process").execSync;

(async () => {
	const response = await prompts(require('./questions'));

	let isAllowedDir = fs.readdirSync(process.cwd());

	if (!isAllowedDir) {
		return log(chalk.red('❌ Не удалось прочитать текущую директорию'));
	} else if (isAllowedDir.length) {
		return log(chalk.red('❌ Текущая директория не пуста'));
	}

	log(chalk.blue('➡️ Инициализация NPM'));
	const initResult = exec('npm init --yes');

	const json = JSON.parse(fs.readFileSync('package.json'));
	json.name = response.name;
	json.author = require("os").userInfo().username;
	json.scripts = require('./package.json/scripts');
	fs.writeFileSync('package.json', JSON.stringify(json));

	log(chalk.blue('➡️ Установка пакетов'));
	const requiredPackages = require('./package.json/dependencies');
	requiredPackages.forEach(package => {
		exec(`npm install ${package.name} -D ${package.isGlobal ? '-g' : ''}`);
		log(chalk.green(`... ${package.name} установлен`));
	});

	const linterPackages = response.linter
			? response.transpilation.name === 'babel'
					? ['eslint-loader', 'babel-eslint']
					: ['tslint', 'tslint-loader']
			: [];

	const packagesList = [
			...response.plugins,
			...response.transpilation.packages,
			...response.styles.packages,
			...response.html.packages,
			...linterPackages
	];
})();