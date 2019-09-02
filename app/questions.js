const path = require("path");

module.exports = [
	{
		type: "text",
		initial: process.cwd().split(path.sep).pop() || "",
		name: "name",
		message: "Название проекта",
		validate: value => /^[A-zА-яЁё0-9+_-]{1,36}$/.test(value) ? true : `От 1, до 36 символов, A-zА-я0-9 -_+`,
	},
	{
		type: "select",
		name: "styles",
		message: "Пре/Пост процессор для CSS",
		choices: [
			{
				title: "Vanilla CSS",
				value: {
					name: "css",
					packages: [''],
					beforeCommand: '',
					pipeCommand: ''
				}
			},
			{
				title: "SCSS (SASS)",
				value: {
					name: "scss",
					packages: ['gulp-sass', 'node-sass'],
					beforeCommand: `const sass = require("gulp-sass"); sass.compiler = require('node-sass');`,
					pipeCommand: 'sass()'
				}
			},
			{
				title: "Less",
				value: {
					name: "less",
					packages: ['gulp-less'],
					beforeCommand: '',
					pipeCommand: `require('gulp-less')()`
				}
			},
			{
				title: "PostCSS",
				value: {
					name: "postcss",
					packages: ['gulp-postcss'],
					beforeCommand: '',
					pipeCommand: `require('gulp-postcss')()`
				}
			},
			{
				title: "Stylus",
				value: {
					name: "stylus",
					packages: ['gulp-stylus'],
					beforeCommand: '',
					pipeCommand: `require('gulp-stylus')()`
				}
			},
		]
	},
	{
		type: "select",
		name: "html",
		message: "Пре/Пост процессор для HTML",
		choices: [
			{
				title: "Vanilla HTML",
				value: {
					name: "html",
					packages: [],
					beforeCommand: '',
					pipeCommand: ''
				}
			},
			{
				title: "PUG",
				value: {
					name: "pug",
					packages: ['gulp-pug'],
					beforeCommand: '',
					pipeCommand: `require('gulp-pug')()`
				}
			}
		]
	},
	{
		type: "multiselect",
		name: "plugins",
		message: "Дополнительные плагины",
		choices: [
			{
				title: "Минификация и очистка CSS",
				value: {
					package: "gulp-clean-css",
					beforeCommand: "",
					pipeCommand: `require('gulp-clean-css')({compatibility: 'ie9'})`
				}
			},
			{
				title: "Конкатенация CSS файлов",
				value: {
					package: "gulp-concat",
					beforeCommand: '',
					pipeCommand: `require('gulp-concat')('bundle.css')`
				}
			},
		]
	}
];