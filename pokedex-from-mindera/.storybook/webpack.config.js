const path = require('path');

module.exports = {
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, '../components'),
			'@icons': path.resolve(__dirname, '../icons'),
			'@styles': path.resolve(__dirname, '../styles')
		},
		extensions: ['.js']
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true
						}
					}
				]
			}
		]
	}
};
