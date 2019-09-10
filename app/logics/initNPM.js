const chalk = require('chalk');
const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const ora = require('ora');

module.exports = async (projectName) => {
    let isAllowedDir = fs.readdirSync(process.cwd());

    if (!isAllowedDir) {
        throw new Error("Не удалось прочитать текущую директорию");
    } else if (isAllowedDir.length) {
        throw new Error("Текущая директория не пуста");
    }

    const spinner = ora({
        text: chalk.blue('Инициализация NPM'),
        spinner: require('../config/spinner')
    }).start();

    if (!await exec('npm init --yes')) {
        throw new Error("Не удалось инициализировать NPM");
    }

    spinner.succeed();

    const json = JSON.parse(fs.readFileSync('package.json'));
    json.name = projectName;
    json.author = require("os").userInfo().username;
    json.scripts = require('../package.json/scripts');
    fs.writeFileSync('package.json', JSON.stringify(json));
};