const log = console.log;
const chalk = require('chalk');
const fs = require('fs');
const ora = require('ora');
const beautify = require('js-beautify').js;


module.exports = (response) => {
    let gulpfile = fs.readFileSync(`${__dirname}/config-template.js/gulpfile`);

    

    fs.writeFileSync('build.tasks.js', beautify(gulpfile, { indent_size: 2, space_in_empty_paren: true }));
};