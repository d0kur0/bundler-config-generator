const chalk = require('chalk');

class Notifications {
	_print (message) {
		console.log(message);
	}

	error (message) {
		this._print(chalk.red(message));
	}

	success (message) {
		this._print(chalk.hex('#2ecc71')(message));
	}

	warning (message) {
		this._print(chalk.hex('#ff6000')('\n' + message));
	}
}

module.exports = new Notifications();