const HtmlWebpackPlugin = require('html-webpack-plugin')

const { config, loaders } = require('./webpack.config.base')

const devConfig = Object.assign({}, config, {
  devtool: '#eval-source-map',
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      loaders.cssLoader,
      loaders.sassLoader,
      loaders.assetLoader,
      loaders.imageLoader,
      loaders.handlebarsLoader,
      Object.assign({}, loaders.jsLoader, {
        loaders: ['react-hot', 'babel']
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.hbs'
    })
  ]
})

module.exports = devConfig