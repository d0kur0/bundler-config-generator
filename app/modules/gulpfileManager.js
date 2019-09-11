const fs = require('fs');

const sourcePath = `${__dirname}/../config-templates/gulpfile.js`;
const destinationPath = `./build.tasks.js`;

exports.readFile = () => {
	const data = fs.readFileSync(sourcePath, 'utf8');

	if (!data) {
		throw new Error(`Not permitted path: ${sourcePath}`);
	}

	return data;
};

exports.writeFile = (gulpfileData) => {
	const prettier = require("prettier");

	fs.writeFileSync(
			destinationPath,
			prettier.format(gulpfileData, { semi: false, parser: "babel" })
	);
};

exports.clearServiceComments = (gulpfileData, commentsList) => {
	const groups = commentsList.join('|').replace(/\/\//gm, `\\/\\/`);
	const pattern = `(\\r\\n|\\n|\\r)(.*)(${groups})`;

	return gulpfileData.replace(new RegExp(pattern, 'gm'), '');
};