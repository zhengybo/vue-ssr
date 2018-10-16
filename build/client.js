const path = require('path')
const base = require('./base')
const merge = require('webpack-merge')
const webpack = require('webpack')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
function resolve (dir) {
  return path.resolve(__dirname, '..', dir)
}
module.exports = merge(base, {
  entry: {
    // app: resolve('./src/entry-client.js')
    app: resolve('./lib/entry/entry-client.js')
  },
  resolve: {

  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    new FriendlyErrorsPlugin(),
    new VueSSRClientPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true
  },
  devServer: {
    hot: true,
    compress: true,
    port: 4444
  }
})
