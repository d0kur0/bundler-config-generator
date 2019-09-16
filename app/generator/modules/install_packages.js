const util = require('util');
const exec = util.promisify(require('child_process').exec);
const spinner = require('../helpers/spinner');

module.exports = async (response) => {
    spinner.start("Установка глобальных пакетов");

    const requiredPackages = require('../package.json_config/dependencies');
    const globalPackages = requiredPackages.filter(p => p.isGlobal).map(p => p.name);
    const localPackages = requiredPackages.filter(p => !p.isGlobal).map(p => p.name);

    const packagesList = [
        ...[].concat(...response.plugins.map(n => n.packages)),
        ...[].concat(...response.others.map(n => n.packages)),
        ...response.styles.packages,
        ...response.layout.packages,
        ...localPackages
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