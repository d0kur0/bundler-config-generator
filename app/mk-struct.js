const chalk = require('chalk');
const fs = require('fs');
const ora = require('ora');

module.exports = () => {
    const dirs = [
        'src', 'src/styles', 'src/js', 'src/templates'
    ];

    const spinner = ora({
        text: chalk.green('Создание структуры файлов и папок'),
        spinner: require('./spinner')
    }).start();

    dirs.forEach(d => fs.mkdirSync(d));
    fs.writeFileSync('src/js/index.js', '');

    spinner.succeed();
};