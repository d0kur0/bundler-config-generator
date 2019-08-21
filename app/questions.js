const path = require("path");

module.exports = [
	{
		type: "text",
		initial: path.parse(__dirname).dir.split(path.sep).pop() || "",
		name: "name",
		message: "Название проекта",
		validate: value => /^[A-zА-яЁё0-9+_-]{1,36}$/.test(value) ? true : `От 1, до 36 символов, A-zА-я0-9 -_+`,
	},
	{
		type: "select",
		name: "styles",
		message: "Пре/Пост процессор для CSS",
		choices: [
			{ title: "Vanilla CSS", value: "css" },
			{ title: "SCSS (SASS)", value: "scss" },
			{ title: "Less",        value: "less" },
			{ title: "PostCSS",     value: "postcss" },
			{ title: "Stylus",      value: "stylus" },
		]
	},
	{
		type: "select",
		name: "html",
		message: "Пре/Пост процессор для HTML",
		choices: [
			{ title: "Vanilla HTML", value: "html" },
			{ title: "PUG",          value: "pug" }
		]
	},
	{
		type: "select",
		name: "transpilation",
		message: "Траспиляция или TypeScript?",
		choices: [
			{ title: "Babel",      value: "babel" },
			{ title: "TypeScript", value: "typescript" }
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