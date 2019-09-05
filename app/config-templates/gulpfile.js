const { watch, src, dest, task, series, parallel } = require('gulp');
const plumber = require('gulp-plumber');

task('clear', async () => await require('del')('./dist'));

task('build:CSS', () => {
	//{CSS_BEFORE_COMMAND}
	const sourcemaps = require('gulp-sourcemaps');

	return src('./src/styles/index.css')
		.pipe(plumber())
		.pipe(require('gulp-if')(process.env.DEBUG, sourcemaps.init()))
		//{CSS_PIPE_COMMAND}
		.pipe(require('gulp-if')(process.env.DEBUG, sourcemaps.write()))
		.pipe(dest('./dist'));
});

task('build:JS', () => {
	return src('./src/js/index.js')
		.pipe(plumber())
		.pipe(require('webpack-stream')(require('./babel.js.js')))
		.pipe(dest('./dist'));
});

task('build:HTML', () => {
	//{HTML_BEFORE_COMMAND}
	return src('./src/templates/pages/**')
		.pipe(plumber())
		//{HTML_PIPE_COMMAND}
		.pipe(dest('./dist'));
});

task('watch', () => {
	const bSync = require('browser-sync').init({server: './dist'});

	watch('./src/styles/**',    series('build:CSS'));
	watch('./src/js/**',        series('build:JS'));
	watch('./src/templates/**', series('build:HTML'));

	watch('./dist/**').on('change', bSync.reload);
});

task('build', series('clear', parallel('build:CSS', 'build:JS', 'build:HTML')));
task('default', series('build'));
task('serve', series('build', 'watch'));