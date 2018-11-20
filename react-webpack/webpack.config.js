'use strict';

const path = require('path');
const webpack = require('webpack');

const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'source-map',

	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		path.join(__dirname, 'src', 'index'),
	],

	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name]-[hash].js',
		publicPath: '',
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('[name]-[hash].css'),
		new HtmlPlugin({
			template: path.join(__dirname, '', 'index.html'),
		}),
	],

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: /src/,
				loader: 'babel-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader',
				}),
			},
		],
	},
};
