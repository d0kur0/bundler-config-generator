const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const spinner = require('../modules/getSpinner');

module.exports = async (projectName) => {
    spinner.start("Инициализация NPM");

    let isAllowedDir = fs.readdirSync(process.cwd());

    if (!isAllowedDir) {
        throw new Error("Не удалось прочитать текущую директорию");
    } else if (isAllowedDir.length) {
        throw new Error("Текущая директория не пуста");
    }

    if (!await exec('npm init --yes')) {
        throw new Error("Не удалось инициализировать NPM");
    }

    const packageJson = JSON.parse(fs.readFileSync('package.json'));

    packageJson.name = projectName;
    packageJson.author = require("os").userInfo().username;
    packageJson.scripts = require('../package.json/scripts');

    fs.writeFileSync('package.json', JSON.stringify(packageJson));

    spinner.stop();
};