const log = console.log;
const chalk = require('chalk');
const fs = require('fs');
const ora = require('ora');
const prettier = require("prettier");

module.exports = (response) => {
    let spinner = ora({
        text: chalk.green('Генерация конфигурации'),
        spinner: require('../config/spinner')
    }).start();

    let gulpfile = fs.readFileSync(`${__dirname}/../config-templates/gulpfile.js`, 'utf8');



    fs.writeFileSync(
        'build.tasks.js',
        prettier.format(gulpfile, { semi: false, parser: 'babel' })
    );

    fs.copyFileSync(`${__dirname}/../config-templates/webpack.config.js`, 'webpack.config.js');
    spinner.succeed();
};