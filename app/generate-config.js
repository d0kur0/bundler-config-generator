const log = console.log;
const chalk = require('chalk');
const fs = require('fs');
const ora = require('ora');
const beautify = require('js-beautify').js;


module.exports = (response) => {
    let gulpfile = fs.readFileSync(`${__dirname}/config-template.js/gulpfile`);

    let buildCSS;
    let importsCSS;

    switch (response.styles) {
        case 'scss':
            buildCSS = `.pipe(sass())`;
            importsCSS += `const sass = require("gulp-sass");
            sass.compiler = require('node-sass');`;
            break;
        case 'less':
            buildCSS = `.pipe(require('gulp-less')())`;
            break;
        case 'postcss':
            buildCSS = `.pipe(require('gulp-postcss)())`;
            break;
        case 'stylus':
            buildCSS = `.pipe(require('gulp-stylus'))`;
            break;
    }

    let buildHTML;
    let importsHTML;
    switch (response.html) {
        case 'pug':
            buildHTML = `.pipe(require('gulp-pug')())`;
            break;
    }

    buildCSS += response.plugins.forEach(p => buildCSS += `.pipe(${p.use})`);
    gulpfile = gulpfile
        .replace(/\{IMPORTS_CSS\}/g, importsCSS)
        .replace(/\{IMPORTS_HTML\}/g, importsHTML)
        .replace(/\{BUILD_CSS\}/g, buildCSS)
        .replace(/\{BUILD_HTML\}/g, buildHTML);

    fs.writeFileSync('build.tasks.js', beautify(gulpfile, { indent_size: 2, space_in_empty_paren: true }));
};