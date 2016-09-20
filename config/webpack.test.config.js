'use strict';
let path = require('path');
let webpack = require('webpack');
let config = require('./webpack.config.js');

config.entry = {};
config.output = {};
config.module.preLoaders.push({
    test: /\.js$/,
    loader: 'isparta-loader',
    include: path.join(__dirname, '../src'),
    exclude: [/\.spec\.js$/, /\.e2e\.js$/]
});
config.plugins = [];

module.exports = config;