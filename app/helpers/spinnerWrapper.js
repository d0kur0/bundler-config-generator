const ora = require('ora');
const chalk = require('chalk');

class SpinnerWrapper {
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

module.exports = new SpinnerWrapper();