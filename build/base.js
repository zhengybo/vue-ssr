const path = require('path')
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')

function resolve (dir) {
  return path.resolve(__dirname, '..', dir)
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: 'production',
  output: {
    path: resolve('./dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('./src'),
    }
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
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]

  },
  plugins : [
    new VueLoaderPlugin(),
    ...(isProd ? [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.HashedModuleIdsPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].[chunkhash].css"
      }),
      new OptimizeCSSAssetsPlugin({}),
      // new HtmlWebpackPlugin({
      //   filename: resolve('./dist/index.html'),
      //   template: resolve('./lib/index.html'),
      //   inject: true,
      //   minify: {
      //     removeComments: false, // vue 插槽不能被去除
      //     collapseWhitespace: true,
      //     removeAttributeQuotes: true
      //   }
      // })
    ] : [
      new FriendlyErrorsPlugin()
    ])
  ]
}
