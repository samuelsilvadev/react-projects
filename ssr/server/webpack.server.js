const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common');

const config = {
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
};

module.exports = merge(common, config);