const log = console.log;
const chalk = require('chalk');
const fs = require('fs');
const ora = require('ora');
const prettier = require("prettier");
const appendAfter = require('../helpers/appendStringBeforeSubstring');

module.exports = (response) => {
	let spinner = ora({
		text: chalk.blue('Генерация конфигурации'),
		spinner: require('../config/spinner')
	}).start();

	let gulpfile = fs.readFileSync(`${__dirname}/../config-templates/gulpfile.js`, 'utf8');

	/**
	 *
	 * @param _for
	 * @param _type pipe|before
	 * @returns {*[]}
	 */
	const getCommands = (_for, _type) => {
		const command = (_for in response && `${_type}Command` in response[_for])
				? response[_for][`${_type}Command`]
				: '';

		return [
			...[command],
			...response.plugins.filter(p => p.for === _for).map(p => p[`${_type}Command`])
		];
	};

	const appendTable = {
		'//{CSS_BEFORE_COMMAND}': getCommands('styles', 'before'),
		'//{CSS_PIPE_COMMAND}':   getCommands('styles', 'pipe'),

		'//{HTML_BEFORE_COMMAND}': getCommands('html', 'before'),
		'//{HTML_PIPE_COMMAND}':   getCommands('html', 'pipe'),

		'//{JS_BEFORE_COMMAND}': getCommands('js', 'before'),
		'//{JS_PIPE_COMMAND}':   getCommands('js', 'pipe')
	};

	for (let afterString in appendTable) {
		if (appendTable.hasOwnProperty(afterString)) {
			const commands = appendTable[afterString].join('\n');
			console.log(appendTable[afterString]);

			gulpfile = appendAfter(gulpfile, afterString, commands)
		}

		gulpfile = gulpfile.replace(new RegExp(afterString), '');
	}

	fs.writeFileSync(
			'build.tasks.js',
			prettier.format(gulpfile, { semi: false, parser: 'babel' })
	);

	fs.copyFileSync(`${__dirname}/../config-templates/webpack.config.js`, 'webpack.config.js');
	spinner.succeed();
};