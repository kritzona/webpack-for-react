const webpack = require('webpack')
const { merge } = require('webpack-merge')

const webpackGeneralConfig = require('./webpack.general.config')
const webpackDevConfig = require('./webpack.dev.config')
const webpackProdConfig = require('./webpack.prod.config')

module.exports = (env) => {
  switch (env) {
    case 'development':
      console.log(env)
      return merge(webpackGeneralConfig, webpackDevConfig)
    case 'production':
      console.log(env)
      return merge(webpackGeneralConfig, webpackProdConfig)
    default:
      console.log(env)
      return merge(webpackGeneralConfig, webpackProdConfig)
  }
}
