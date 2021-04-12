const path = require('path')

const paths = {
  sourceDirPath: path.resolve(__dirname, '../../src/'),
  publicDirPath: path.resolve(__dirname, '../../public/'),
  distDirPath: path.resolve(__dirname, '../../dist/'),
}

module.exports = {
  paths,
}
