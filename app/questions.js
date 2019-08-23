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
			{ title: "Vanilla CSS", value: { name: "css",     packages: [''] } },
			{ title: "SCSS (SASS)", value: { name: "scss",    packages: ['gulp-sass', ['node-sass']] } },
			{ title: "Less",        value: { name: "less",    packages: ['gulp-less'] } },
			{ title: "PostCSS",     value: { name: "postcss", packages: ['gulp-postcss'] } },
			{ title: "Stylus",      value: { name: "stylus",  packages: ['gulp-stylus'] } },
		]
	},
	{
		type: "select",
		name: "html",
		message: "Пре/Пост процессор для HTML",
		choices: [
			{ title: "Vanilla HTML", value: { name: "html", packages: [] } },
			{ title: "PUG",          value: { name: "pug",  packages: ['gulp-pug'] } }
		]
	},
	{
		type: "select",
		name: "transpilation",
		message: "Траспиляция или TypeScript?",
		choices: [
			{ title: "Babel",      value: { name: "babel",      packages: ['@babel/core', '@babel/preset-env', 'babel-loader'] } },
			{ title: "TypeScript", value: { name: "typescript", packages: ['typescript', 'ts-loader'] } }
		]
	},
	{
		type: "toggle",
		name: "linter",
		message: "Установить линтер для JavaScript кода?",
		initial: true,
		active: 'Да',
		inactive: 'Нет'
	},
	{
		type: "multiselect",
		name: "plugins",
		message: "Дополнительные плагины",
		choices: [
			{ title: "Минификация и очистка CSS", value: "gulp-clean-css" },
			{ title: "Конкатенация CSS файлов",   value: "gulp-concat" },
		]
	}
];