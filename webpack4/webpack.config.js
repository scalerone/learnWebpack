// webpack.config.js

const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'babel-loader',
            //     options: {
            //         presets: ['env']
            //     }
            // },
            // {
            //     test: /\.css$/,
            //     use: [
            //         { loader: 'style-loader', options: { sourceMap: true } },
            //         { loader: 'css-loader' }
            //     ]
            // }
        ]
    },

   plugins: [
       new UglifyJSPlugin(),
       new HtmlWebpackPlugin({
           title: 'webpack-cli-test'
       })
   ]
    // 这款插件用于压缩 JS 代码，减少资源体积大小
};
