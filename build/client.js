const fs = require('fs')
const base = require('./base')
const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const resolve =  dir => path.resolve(__dirname, '..', dir);
const isProd = process.env.NODE_ENV === 'production'

let entry = { app: resolve('./lib/entry/entry-client.js') }

module.exports = merge(base, {
  entry,
  resolve: {

  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    new webpack.DllReferencePlugin({
        manifest : require(resolve('manifest.json'))
    }),
    new VueSSRClientPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true
  }
})
