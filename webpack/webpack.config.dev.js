/*
 * @Author: Alice
 * @Date: 2021-12-10 16:10:49
 * @LastEditors: Alice
 * @LastEditTime: 2021-12-13 09:28:36
 * @Description:
 */
const webpack = require('webpack');
const merge = require('webpack-merge');

const paths = require('../config/path');
const commonConfig = require('./webpack.config.common');

module.exports = merge.smart(commonConfig, {
    mode: 'development',
    entry: paths.appIndex,
    output: {
        filename: 'static/js/[name]-bundle-[hash:8].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NormalModuleReplacementPlugin()
    ]
});
