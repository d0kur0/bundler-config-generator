const fs = require('fs');

const sourcePath = `${__dirname}/../config-templates/webpack.config.js`;
const destinationPath = `./webpack.config.js`;

exports.copyTempalate = () => {
	fs.copyFileSync(sourcePath, destinationPath);
};