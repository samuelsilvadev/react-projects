import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';

import paths from './paths';
import rules from './rules';

module.exports = {
	entry: paths.entryPath,
	module: {
		rules
	},
	resolve: {
		modules: ['src', 'node_modules'],
		extensions: ['*', '.js', '.scss', '.css'],
		alias: {
			'@components': paths.components,
			'@shared': paths.shared,
		},
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: paths.templatePath,
			minify: {
				collapseInlineTagWhitespace: true,
				collapseWhitespace: true,
				preserveLineBreaks: true,
				minifyURLs: true,
				removeComments: true,
				removeAttributeQuotes: true
			}
		}),
		new Dotenv(),
	]
};
