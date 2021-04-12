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
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        use: 'babel-loader',
        include: /src/i,
        exclude: /node_modules/i,
      },
      {
        test: /\.(ts|tsx)$/i,
        use: 'ts-loader',
        include: /src/i,
        exclude: /node_modules/i,
      },

      {
        test: /\.(css)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        include: /src/i,
        exclude: /node_modules/i,
      },
      {
        test: /\.(sass|scss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        include: /src/i,
        exclude: /node_modules/i,
      },

      {
        test: /\.(jpe?g|png|gif)$/i,
        use: ['file-loader'],
        include: /src/i,
        exclude: /node_modules/i,
      },
      {
        test: /\.(svg)$/i,
        use: ['svg-inline-loader'],
        include: /src/i,
        exclude: /node_modules/i,
      },
    ],
  },
}
