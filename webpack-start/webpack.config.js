const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: './src/index.js', //入口文件，src下的index.js
    output: {
        path: path.join(__dirname, 'dist'), // 出口目录，dist文件
        filename: '[name].[hash].js' //这里name就是打包出来的文件名，因为是单入口，就是main，多入口下回分解
    },
    module: {},
    plugin: {},
    devServer: {}
}
