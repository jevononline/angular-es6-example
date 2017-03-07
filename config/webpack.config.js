'use strict';
let path = require('path');
let webpack = require('webpack');


let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');


let config = {
    entry: {
        app: path.resolve(__dirname, '../src/bootstrap.js')
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    module: {
        preLoaders: [
            { test: /\.js$/, loader: 'eslint-loader', include: path.resolve(__dirname, './src') }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'ng-annotate-loader!babel-loader',
                // include: path.resolve(__dirname, './src')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            { test: /\.woff2$/, loader: 'file-loader?name=[name].[ext]' },
            { test: /\.woff$/, loader: 'file-loader?name=[name].[ext]' },
            { test: /\.ttf$/, loader: 'file-loader?name=[name].[ext]' },
            { test: /\.eot$/, loader: 'file-loader?name=[name].[ext]' },
            { test: /\.svg$/, loader: 'file-loader?name=[name].[ext]' },
            { test: /\.gif$/, loader: 'file-loader?name=[name].[ext]' },
            {
                test: /\.html$/,
                loader: 'html-loader?interpolate'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html')
        }),
        //new webpack.optimize.CommonsChunkPlugin(...),
        new ExtractTextPlugin('[name].css')
    ],
    resolve: {
        root: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../node_modules')],
        extensions: ['', '.js']
    },
    eslint:{
        configFile: path.resolve(__dirname, '../.eslintrc.json')
    }
};


module.exports = config;