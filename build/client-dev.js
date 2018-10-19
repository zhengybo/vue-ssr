const path = require('path')
const merge = require('webpack-merge')
const client = require('./client')
const webpack = require('webpack')
module.exports = merge(client,{
  mode: 'development',
  entry : [
    'webpack-hot-middleware/client',
    client.entry.app
  ],
  output : {
    filename : '[name].js'
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})
