const path = require('path')
const { paths } = require('../main/config')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(paths.sourceDirPath, './main.ts'),
  output: {
    path: paths.distDirPath,
    filename: '[name].[contenthash].bundle.js',
  },
}
