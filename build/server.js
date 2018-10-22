const path = require('path')
const base = require('./base')
const merge = require('webpack-merge')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const isProd = process.env.NODE_ENV === 'production'
let entry = { app: path.resolve(__dirname, '../lib/entry/entry-server.js') }
if(isProd){
  entry.app = [  entry.app ];
}
module.exports = merge(base, {
  target: 'node',
  devtool: '#source-map',
  entry: entry,
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {

  },
  optimization: {
    splitChunks: false
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueSSRServerPlugin()
  ]
})
