module.exports = [
	{
		title: "Минификация и очистка CSS",
		value: {
			packages: ["gulp-clean-css"],
			for: "styles",
			beforeCommand: "",
			pipeCommand: `require('gulp-clean-css')({compatibility: 'ie9'})`
		}
	},
	{
		title: "Конкатенация CSS файлов в один файл",
		value: {
			for: "styles",
			packages: ["gulp-concat"],
			beforeCommand: '',
			pipeCommand: `require('gulp-concat')('bundle.css')`
		}
	},
];