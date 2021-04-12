const path = require('path')
const webpack = require('webpack')
const { paths } = require('../main/config')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(paths.sourceDirPath, './main.ts'),
  output: {
    path: paths.distDirPath,
    filename: '[name].[contenthash].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack-конфигурация для React-приложений',
      template: path.resolve(paths.publicDirPath, './index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
  ],
  module: {
    rules: [],
  },
}
