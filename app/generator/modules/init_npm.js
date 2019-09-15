const fs = require('fs');
const util = require('util');
const exec =  util.promisify(require('child_process').exec);
const spinner = require('../helpers/spinner');
const packageJsonPath = './package.json';

module.exports = async (projectName) => {
    spinner.start("Initializing NPM");

    if (!await exec('npm init --yes')) {
        throw new Error("Failed to initialize NPM");
    }

    const packageJson = JSON.parse(fs.readFileSync(
        packageJsonPath,
        'utf-8'
    ));

    packageJson.name = projectName;
    packageJson.author = require("os").userInfo().username;
    packageJson.scripts = require('../package.json_config/scripts');

    fs.writeFileSync(
        packageJsonPath,
        JSON.stringify(packageJson)
    );

    spinner.stop();
};