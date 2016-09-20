'use strict';

let config = require('./webpack.config.js');
let port = 8080;

config.devtool = 'inline-source-map';
config.devServer = {
    historyApiFallback: true,
    contentBase: '/src',
    port: port,
    inline: true,
    // proxy: {
    //     '/api/**': {
    //         target: 'http://192.168.10.100/'
    //     }
    // }
};


module.exports = config;