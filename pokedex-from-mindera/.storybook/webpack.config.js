const path = require('path');

module.exports = {
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, '../pages/components'),
			'@services': path.resolve(__dirname, '../pages/services'),
			'@icons': path.resolve(__dirname, '../pages/icons'),
			'@styles': path.resolve(__dirname, '../pages/styles')
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
