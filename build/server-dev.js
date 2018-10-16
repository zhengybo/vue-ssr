const merge = require('webpack-merge')
const client = require('./server')

module.exports = merge(client,{
  mode: 'development'
})
