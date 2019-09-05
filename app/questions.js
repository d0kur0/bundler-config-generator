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
					pipeCommand: `.pipe(sass())`
				}
			},
			{
				title: "Less",
				value: {
					name: "less",
					packages: ['gulp-less'],
					beforeCommand: '',
					pipeCommand: `.pipe(require('gulp-less')())`
				}
			},
			{
				title: "PostCSS",
				value: {
					name: "postcss",
					packages: ['gulp-postcss'],
					beforeCommand: '',
					pipeCommand: `.pipe(require('gulp-postcss')())`
				}
			},
			{
				title: "Stylus",
				value: {
					name: "stylus",
					packages: ['gulp-stylus'],
					beforeCommand: '',
					pipeCommand: `.pipe(require('gulp-stylus')())`
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
					pipeCommand: `.pipe(require('gulp-pug')())`
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
					packages: ["gulp-clean-css"],
					for: "styles",
					beforeCommand: "",
					pipeCommand: `.pipe(require('gulp-clean-css')({compatibility: 'ie9'}))`
				}
			},
			{
				title: "Конкатенация CSS файлов",
				value: {
					for: "styles",
					packages: ["gulp-concat"],
					beforeCommand: '',
					pipeCommand: `.pipe(require('gulp-concat')('bundle.css'))`
				}
			},
		]
	}
];