'use strict';
let webpack = require('webpack');
let config = require('./webpack.config.js');

config.devtool = 'source-map';
//config.plugins.push(new webpack.optimize.DedupePlugin());
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
}));
config.plugins.push(new webpack.DefinePlugin({
    ENV: '"production"'
}));
module.exports = config;  
    
