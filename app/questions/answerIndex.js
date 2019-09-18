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
		message: "Обработка стилей",
		choices: require('./styles')
	},
	{
		type: "select",
		name: "layout",
		message: "Вёрстка",
		choices: require('./layout')
	},
	{
		type: "multiselect",
		name: "others",
		message: "Дополнительные задачи",
		choices: require('./additionalTasks')
	}
];