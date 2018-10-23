const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const vendors = [
  'vue',
  'vuex',
  'vue-router',
  'axios'
];
const resolve =  dir => path.resolve(__dirname, '..', dir);

module.exports = {
    mode : 'production',
　　entry: {
　　　　vendor: vendors
　　},
    module : {
      rules : [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ],
    },
　　output: {
      path: resolve('./dist/dll'),
      filename: "dll_[chunkhash].js",
      library: "dll_[chunkhash]"
　　},
　　plugins: [
      new HtmlWebpackPlugin({
        filename: resolve('./dist/index.html'),
        template: resolve('./lib/index.html'),
        inject: false, // ssr 不需要输出css script 插入
        dll : `/dist/dll/${require(resolve('manifest.json')).name}.js`,
        minify: {
          removeComments: false, // vue 插槽不能被去除
          collapseWhitespace: true,
          removeAttributeQuotes: true
        }
      }),
      new webpack.DllPlugin({
        path: resolve('manifest.json'),
        name: "dll_[chunkhash]",
        context: resolve('./')
      }),
      new ProgressBarPlugin({ summary : false })
　　]
};
