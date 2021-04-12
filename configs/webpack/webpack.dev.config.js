const webpack = require('webpack')

const WebpackBar = require('webpackbar')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    hot: true,
  },
  plugins: [
    new WebpackBar({
      name: 'Development-сборка',
      color: 'blue',
    }),
  ],
}
