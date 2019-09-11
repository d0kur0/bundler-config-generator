const fs = require('fs');
const spinner = require('../modules/getSpinner');

module.exports = (response) => {
    spinner.start("Создание структуры файлов и папок");

    // Dirs
    [
        'src',
        'src/styles',
        'src/js',
    ].forEach(d => fs.mkdirSync(d));

    // Files
    [
        'src/js/index.js'
    ].forEach(f => fs.writeFileSync(f, ''));

    spinner.stop();
};