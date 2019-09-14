const spinner = require('../modules/getSpinner');
const gulpfileManager = require('../modules/gulpfileManager');
const webpackConfigManager = require('../modules/webpackConfigManager');

const getCommandsObject = require('../helpers/getCommandsObject');
const interpolateCommands = require('../helpers/interpolateCommands');

module.exports = (response) => {
	spinner.start("Генерация файлов конфигурации");

	// Build gulpfile
	{
		let gulpfile = gulpfileManager.readFile();
		let commandsObject = getCommandsObject(response);

		gulpfile = interpolateCommands(gulpfile, commandsObject);
		gulpfile = gulpfileManager.clearServiceComments(gulpfile, Object.keys(commandsObject));
		gulpfileManager.writeFile(gulpfile);
	}

	// Build webpack config
	{
		webpackConfigManager.copyTempalate();
	}

	spinner.stop();
};