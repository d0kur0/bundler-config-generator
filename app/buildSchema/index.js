module.exports = {
	sourcePath: './src/',
	destinationPath: './dist/',

	scripts: {
		build: 'cross-env NODE_ENV=production gulp build',
		serve: 'cross-env NODE_ENV=development gulp server'
	}
};