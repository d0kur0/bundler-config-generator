const ora = require('ora');
const chalk = require('chalk');

class Spinner {
	start (message) {
		this.spinnerInstance = this.spinnerInstance = ora({
			text: chalk.blue(message),
			spinner: {
				"interval": 80,
				"frames": [
					"⠁",
					"⠉",
					"⠙",
					"⠚",
					"⠒",
					"⠂",
					"⠂",
					"⠒",
					"⠲",
					"⠴",
					"⠤",
					"⠄",
					"⠄",
					"⠤",
					"⠴",
					"⠲",
					"⠒",
					"⠂",
					"⠂",
					"⠒",
					"⠚",
					"⠙",
					"⠉",
					"⠁"
				]
			}
		});

		this.spinnerInstance.start();
	}

	stop () {
		this.spinnerInstance.succeed();
	}
}

module.exports = new Spinner();