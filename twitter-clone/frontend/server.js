'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const PORT = 3000;

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	stats: { colors: true },
	disableHostCheck: true,
}).listen(PORT, (err) => {
	if (err) {
		return console.log(err);
	}
	return console.log(`Listening on http://localhost:${PORT}`);
});
