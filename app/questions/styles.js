module.exports = [
	{
		title: "Vanilla CSS",
		value: {
			name: "css",
			packages: [''],
			fileExtension: 'css',
			beforeCommand: '',
			pipeCommand: ''
		}
	},
	{
		title: "SCSS (SASS)",
		value: {
			name: "scss",
			packages: ['gulp-sass', 'node-sass'],
			fileExtension: 'scss',
			beforeCommand: `const sass = require("gulp-sass"); sass.compiler = require('node-sass');`,
			pipeCommand: `sass()`
		}
	},
	{
		title: "Less",
		value: {
			name: "less",
			packages: ['gulp-less'],
			fileExtension: 'less',
			beforeCommand: '',
			pipeCommand: `require('gulp-less')()`
		}
	},
	{
		title: "PostCSS",
		value: {
			name: "postcss",
			packages: ['gulp-postcss'],
			fileExtension: 'css',
			beforeCommand: '',
			pipeCommand: `require('gulp-postcss')()`
		}
	},
	{
		title: "Stylus",
		value: {
			name: "stylus",
			packages: ['gulp-stylus'],
			fileExtension: 'stylus',
			beforeCommand: '',
			pipeCommand: `require('gulp-stylus')()`
		}
	},
];