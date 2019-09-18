module.exports = {
	name: "Build:JS",
	srcPattern: "{sourcePath}/js/index.js",
	destinationPath: "{destinationPath}/bundle.js",
	beforeCommands: [
		`const webpack = require('webpack-stream');`
	],
	pipeCommands: [
		`webpack(require('./webpack.config.js'))`
	],
};