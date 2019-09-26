const getCWDname = require('../functions/getCWDname');
const validateProjectName = require('../functions/validateProjectName');

module.exports = [
	{
		type: "text",
		initial: getCWDname(),
		name: "name",
		message: "Название проекта",
		validate: value => validateProjectName(value),
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