module.exports = {
	name: "Build:Styles",
	srcPattern: "{sourcePath}/styles/**.css",
	destinationPath: "{destinationPath}/styles/",
	beforeCommands: [],
	pipeCommands:  [
		`require('gulp-clean-css')()`,
		`require('gulp-concat)('bundle.js)`
	],
};