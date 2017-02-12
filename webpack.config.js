/**
 * Created by associate on 2/8/17.
 */
var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname+"/app");
var BUILD_DIR = path.resolve(__dirname+"/build/");

module.exports = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: BUILD_DIR,
        port: 3333
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: APP_DIR,
            loader: 'babel-loader',
            query: {
                presets: ['react']
            }
        }]
    },
    resolve: {
        modules: [path.resolve(__dirname, "app"),"node_modules"]
    }
}
