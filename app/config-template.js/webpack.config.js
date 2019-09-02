module.exports = {
	output: {
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	devtool: process.env.DEBUG ? 'eval-source-map' : 'none',
	mode: process.env.DEBUG ? 'development' : 'production'
};