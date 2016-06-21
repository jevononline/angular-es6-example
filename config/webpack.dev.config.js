'use strict';
let webpack = require('webpack');
let config = require('./webpack.config.js');

config.devtool = 'inline-source-map';




config.plugins.push(new webpack.DefinePlugin({
    ENV: '"dev"'
}));
module.exports = config;  
    
