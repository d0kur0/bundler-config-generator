module.exports = [
	{
		title: "Оптимизация изображений (PNG, JPEG, GIF, SVG)",
		value: {
			packages: ['gulp-images'],
			task: {
				name: "build:Images",
				sourcePath: "./src/images/**",
				destinationPath: "./dist/images/",
				systemDependencies: ['libjpeg', 'libpng'],
				beforeCommands: [''],
				pipeCommands: ['']
			}
		}
	}
];