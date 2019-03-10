require('@babel/register');

const webpackMerge = require('webpack-merge');

const common = require('./config/webpack/webpack.common');

const envs = {
	development: 'dev',
	production: 'prod'
};

const env = envs[process.env.NODE_ENV || 'development'];
const envConfig = require(`./config/webpack/webpack.${env}`);

module.exports = webpackMerge(common, envConfig);
