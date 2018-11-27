'use strict';

const path = require('path');
const webpack = require('webpack');

const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

	entry: path.join(__dirname, 'src', 'index'),

	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name]-[hash].js',
	},

	plugins: [
		new ExtractTextPlugin('[name]-[hash].css'),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"',
			},
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false },
		}),
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
