const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    postcssPresetEnv({
      browsers: ['> 1%', 'IE >= 11', 'last 2 versions'],
    }),
  ],
}
