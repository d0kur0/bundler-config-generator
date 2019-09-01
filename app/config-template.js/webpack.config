module.exports = {
	output: {
		filename: 'index.js'
	},
	module: {
		rules: [
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