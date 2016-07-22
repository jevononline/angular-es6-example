'use strict';
let webpack = require('webpack');
let config = require('./webpack.config.js');

config.devtool = 'inline-source-map';
// config.devServer = {
//     historyApiFallback:{
//         index: '/'
//     },
//     proxy: {
//         '/api/*': {
//             target: 'http://192.168.10.100/'
//         }
//     }
// };


module.exports = config;