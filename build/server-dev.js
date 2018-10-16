const merge = require('webpack-merge')
const client = require('./server')
// const webpack = require('webpack')
module.exports = merge(client,{
  mode: 'development'
})
