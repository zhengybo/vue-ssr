/* 一个 warning ->  tapable.plugin is deprecated  忽略它 */
process.noDeprecation = true;
const path = require('path')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')

const resolve =  dir => path.resolve(__dirname, '..', dir);

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: 'production',
  devtool: isProd ? false : '#cheap-module-source-map',
  output: {
    path: resolve('./dist'),
    publicPath: '/dist/',
    filename: 'js/[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('./src'),
      'root': resolve('./')
    },
    modules : ['node_modules', resolve('./src/scss')]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          ...(isProd ? [{ loader: MiniCssExtractPlugin.loader }] : []),
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'vue-style-loader' },
          ...(isProd ? [{ loader: MiniCssExtractPlugin.loader }] : []),
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
          { loader: 'sass-resources-loader',
            options: {
              sourceMap: true,
              resources: [
                resolve('src/scss/public/lib.scss'),
                resolve('src/scss/public/mixin.scss')
              ]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[hash:7].[ext]'
            }
          }
        ]
      }
    ]

  },
  plugins : [
    new VueLoaderPlugin(),
    ...(isProd ? [
      new ProgressBarPlugin({ summary : false }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.HashedModuleIdsPlugin(),
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
        chunkFilename: "css/[id].[chunkhash].css"
      }),
      new OptimizeCSSAssetsPlugin({})

    ] : [
      new FriendlyErrorsPlugin()
    ])
  ]
}
