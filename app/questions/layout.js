module.exports = [
	{
		title: "HTML",
		value: {
			name: "html",
			packages: [],
			fileExtension: 'html',
			beforeCommand: '',
			pipeCommand: ''
		}
	},
	{
		title: "PUG",
		value: {
			name: "pug",
			packages: ['gulp-pug'],
			fileExtension: 'pug',
			beforeCommand: '',
			pipeCommand: `require('gulp-pug')()`
		}
	}
];