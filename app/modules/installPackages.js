const util = require('util');
const exec = util.promisify(require('child_process').exec);
const spinner = require('../modules/getSpinner');

module.exports = async (response) => {
    spinner.start("Установка глобальных пакетов");

    const requiredPackages = require('../package.json/dependencies');
    const globalPackages = requiredPackages.filter(p => p.isGlobal).map(p => p.name);
    const localPackages = requiredPackages.filter(p => !p.isGlobal).map(p => p.name);

    const packagesList = [
        ...[].concat(...response.plugins.map(n => n.packages)),
        ...localPackages,
        ...response.styles.packages,
        ...response.html.packages
    ];

    if (!await exec(`npm i -D -g ${globalPackages.join(' ')}`)) {
        throw new Error("Произошла ошибка при установке пакетов");
    }

    spinner.stop();
    spinner.start("Установка локальных пакетов");

    if (!await exec(`npm i -D ${packagesList.join(' ')}`)) {
        throw new Error("Произошла ошибка при установке пакетов");
    }

    spinner.stop();
};