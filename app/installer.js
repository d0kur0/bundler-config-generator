const log = console.log;
const chalk = require('chalk');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const ora = require('ora');

module.exports = async (response) => {
    const requiredPackages = require('./package.json/dependencies');
    const globalPackages = requiredPackages.filter(p => p.isGlobal).map(p => p.name);
    const localPackages = requiredPackages.filter(p => !p.isGlobal).map(p => p.name);

    let spinner = ora({
        text: chalk.green('Установка глобальных пакетов'),
        spinner: require('./spinner')
    }).start();

    if (!await exec(`npm i -D -g ${globalPackages.join(' ')}`)) {
        throw new Error("Произошла ошибка при установке пакетов");
    }

    spinner.succeed();

    const linterPackages = response.linter
        ? response.transpilation.name === 'babel'
            ? ['eslint-loader', 'babel-eslint']
            : ['tslint', 'tslint-loader']
        : [];

    const packagesList = [
        ...localPackages,
        ...response.plugins.map(p => p.package),
        ...response.transpilation.packages,
        ...response.styles.packages,
        ...response.html.packages,
        ...linterPackages
    ];

    spinner = ora({
        text: chalk.green('Установка локальных пакетов'),
        spinner: require('./spinner')
    }).start();

    if (!await exec(`npm i -D ${packagesList.join(' ')}`)) {
        throw new Error("Произошла ошибка при установке пакетов");
    }

    spinner.succeed();
};