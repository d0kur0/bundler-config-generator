const log = console.log;
const chalk = require('chalk');
const fs = require('fs');
const ora = require('ora');
const prettier = require("prettier");
const appendAfter = require('../helpers/appendStringBeforeSubstring');

module.exports = (response) => {
    let spinner = ora({
        text: chalk.green('Генерация конфигурации'),
        spinner: require('../config/spinner')
    }).start();

    let gulpfile = fs.readFileSync(`${__dirname}/../config-templates/gulpfile.js`, 'utf8');

    const appendTable = {
        '//{CSS_BEFORE_COMMAND}': [
            ...response.styles.beforeCommand,
            ...response.plugins.filter(p => p.for === 'styles').map(p => p.beforeCommand)
        ],
        '//{CSS_PIPE_COMMAND}': [
            ...response.styles.pipeCommand,
            ...response.plugins.filter(p => p.for === 'styles').map(p => p.pipeCommand)
        ],

    };

    const CSS_BEFORE_COMMANDS = [
        ...response.styles.beforeCommand,
        ...response.plugins.filter(p => p.for === 'styles').map(p => p.beforeCommand)
    ];

    const CSS_PIPE_COMMANDS = [
        ...response.styles.pipeCommand,
        ...response.plugins.filter(p => p.for === 'styles').map(p => p.pipeCommand)
    ];

    const HTML_BEFORE_COMMANDS = [
        ...response.html.beforeCommand,
        ...response.plugins.filter(p => p.for === 'html').map(p => p.beforeCommand)
    ];

    const HTML_PIPE_COMMANDS = [
        ...response.html.pipeCommand,
        ...response.plugins.filter(p => p.for === 'html').map(p => p.pipeCommand)
    ];



    fs.writeFileSync(
        'build.tasks.js',
        prettier.format(gulpfile, { semi: false, parser: 'babel' })
    );

    fs.copyFileSync(`${__dirname}/../config-templates/webpack.config.js`, 'webpack.config.js');
    spinner.succeed();
};