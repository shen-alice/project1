/*
 * @Author: Alice
 * @Date: 2021-12-10 16:10:49
 * @LastEditors: Alice
 * @LastEditTime: 2021-12-13 09:18:56
 * @Description:
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('../config/path');

module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.(ts|jsx)$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React + ts project',
            template: path.appHtml,
            inject: false
        })
    ]
};
