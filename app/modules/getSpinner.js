const ora = require('ora');
const chalk = require('chalk');

class SpinnerWrapper {
	constructor () {
		this.spinnerInstance = ora({
			text: chalk.blue('Генерация конфигурации'),
			spinner: require('../config/spinner')
		});
	}

	start () {
		this.spinnerInstance.start();
	}

	stop () {
		this.spinnerInstance.succeed();
	}
}

module.exports = new SpinnerWrapper();