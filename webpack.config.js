const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const webpackGeneralConfig = require('./webpack.general.config')
const webpackDevConfig = require('./webpack.dev.config')
const webpackProdConfig = require('./webpack.prod.config')

module.exports = (env) => {
  switch (env) {
    case 'development':
      return webpackMerge(webpackGeneralConfig, webpackDevConfig)
    case 'production':
      return webpackMerge(webpackGeneralConfig, webpackProdConfig)
    default:
      return webpackMerge(webpackGeneralConfig, webpackProdConfig)
  }
}
