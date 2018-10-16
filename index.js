require("babel-register")({
  presets: ['es2015', 'stage-0'],
  plugins: ['add-module-exports','transform-runtime']
})
require('babel-polyfill')
require('./server.js')
