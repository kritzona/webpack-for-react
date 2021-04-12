const webpack = require('webpack')
const { merge } = require('webpack-merge')

const webpackGeneralConfig = require('./configs/webpack/webpack.general.config')
const webpackDevConfig = require('./configs/webpack/webpack.dev.config')
const webpackProdConfig = require('./configs/webpack/webpack.prod.config')

module.exports = (env) => {
  const isWebpackBuild = !!env.WEBPACK_BUILD

  return merge(
    webpackGeneralConfig,
    isWebpackBuild ? webpackProdConfig : webpackDevConfig,
  )
}
