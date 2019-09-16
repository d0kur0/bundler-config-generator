module.exports = [
	{
		title: "HTML",
		value: {
			name: "html",
			packages: [],
			fileExtension: 'html',
			beforeCommands: [],
			pipeCommands: []
		}
	},
	{
		title: "PUG",
		value: {
			name: "pug",
			packages: ['gulp-pug'],
			fileExtension: 'pug',
			beforeCommands: [],
			pipeCommands: [`require('gulp-pug')()`]
		}
	}
];