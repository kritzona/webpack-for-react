const webpack = require('webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackBar = require('webpackbar')

const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].bundle.css',
    }),
    new CleanWebpackPlugin(),
    new WebpackBar({
      name: 'Production-сборка',
      color: 'green',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerWebpackPlugin({
        exclude: /node_modules/i,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        include: /src/i,
        exclude: /node_modules/i,
      },
      {
        test: /\.(sass|scss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
        include: /src/i,
        exclude: /node_modules/i,
      },
    ],
  },
}
