const webpack = require('webpack')
const { merge } = require('webpack-merge')

const webpackGeneralConfig = require('./webpack.general.config')
const webpackDevConfig = require('./webpack.dev.config')
const webpackProdConfig = require('./webpack.prod.config')

module.exports = (env) => {
  const isWebpackBuild = !!env.WEBPACK_BUILD

  merge(
    webpackGeneralConfig,
    isWebpackBuild ? webpackProdConfig : webpackDevConfig,
  )
}
