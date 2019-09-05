const log = console.log;
const chalk = require('chalk');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const ora = require('ora');

module.exports = async (response) => {
    const requiredPackages = require('../package.json/dependencies');
    const globalPackages = requiredPackages.filter(p => p.isGlobal).map(p => p.name);
    const localPackages = requiredPackages.filter(p => !p.isGlobal).map(p => p.name);

    const packagesList = [
        ...[].concat(...response.plugins.map(n => n.packages)),
        ...localPackages,
        ...response.styles.packages,
        ...response.html.packages
    ];

    let spinner = ora({
        text: chalk.green('Установка глобальных пакетов'),
        spinner: require('../config/spinner')
    }).start();

    if (!await exec(`npm i -D -g ${globalPackages.join(' ')}`)) {
        throw new Error("Произошла ошибка при установке пакетов");
    }

    spinner.succeed();

    spinner = ora({
        text: chalk.green('Установка локальных пакетов'),
        spinner: require('../config/spinner')
    }).start();

    if (!await exec(`npm i -D ${packagesList.join(' ')}`)) {
        throw new Error("Произошла ошибка при установке пакетов");
    }

    spinner.succeed();
};