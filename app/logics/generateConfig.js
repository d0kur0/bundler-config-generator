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
		const command = response.hasOwnProperty(_for) && response[_for].hasOwnProperty(_type)
				? response[_for][_type]
				: '';

		return [
			...[command],
			...response.plugins.filter(p => p.for === _for).map(p => p[`${_type}Command`])
		];
	};

	const appendTable = {
		'//{CSS_BEFORE_COMMAND}': getCommands('styles', 'beforeCommand'),
		'//{CSS_PIPE_COMMAND}':   getCommands('styles', 'pipeCommand'),

		'//{HTML_BEFORE_COMMAND}': getCommands('html', 'beforeCommand'),
		'//{HTML_PIPE_COMMAND}':   getCommands('html', 'pipeCommand'),

		'//{JS_BEFORE_COMMAND}': getCommands('js', 'beforeCommand'),
		'//{JS_PIPE_COMMAND}':   getCommands('js', 'pipeCommand')
	};

	const groups = Object.keys(appendTable).join('|').replace(/\/\//gm, `\\/\\/`);
	const pattern = `(\\r\\n|\\n|\\r)(.*)(${groups})`;
	gulpfile = gulpfile.replace(new RegExp(pattern, 'gm'), '');

	fs.writeFileSync(
			'build.tasks.js',
			prettier.format(gulpfile, { semi: false, parser: 'babel' })
	);

	fs.copyFileSync(
			`${__dirname}/../config-templates/webpack.config.js`,
			'webpack.config.js'
	);

	spinner.succeed();
};