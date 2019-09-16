module.exports = [
	{
		title: "[STYLES] Минификация и очистка",
		value: {
			for: "styles",
			packages: ["gulp-clean-css"],
			beforeCommands: [],
			pipeCommands: [`require('gulp-clean-css')({compatibility: 'ie9'})`]
		}
	},
	{
		title: "[STYLES] Конкатенация файлов в один файл",
		value: {
			for: "styles",
			packages: ["gulp-concat"],
			beforeCommands: [],
			pipeCommands: [`require('gulp-concat')('bundle.css')`]
		}
	},
];