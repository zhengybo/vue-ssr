/**
 * 构建任务执行
 */

const fs = require('fs')
const rimraf = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')

const dllConfig = require('./dll')
const clientConfig = require('./client')
const serverConfig = require('./server')

const isProd = process.env.NODE_ENV === 'production'
const resolve = dir => path.resolve(__dirname, '..', dir);

const runWebpack =  (config) => {
  return new Promise((resolve, reject) => {
    webpack(config).run((err, stats) => {
      if (err) reject(err);
      if (stats.hasErrors()) {
        stats = stats.toJson()
        console.log(chalk.red.bold('Build failed with errors.\n'));
        process.exit(1);
      }
      resolve(stats);
    })
  });
}

if(isProd){
  rimraf(clientConfig.output.path, err => {
    if(err) throw err;
    new Promise((resolve, reject) => {
      webpack(dllConfig, () => {
        console.log(chalk.cyan.bold('  NTOE: dll has been build!'))
        Promise.all([ runWebpack(clientConfig), runWebpack(serverConfig) ])
        .then(() => {
          console.log(chalk.cyan.bold('  NTOE: client and server has been build!\n'));
          resolve();
        }).catch(reject);
      })
    }).then(() => {
      console.log(chalk.green.bold('  build has been completed!\n'));
      console.log(chalk.yellow('  you can execute'), chalk.blue('npm start'));
    }).catch(e => {
      console.error(e);
    })
  })
}else {
  rimraf(path.resolve(clientConfig.output.path, './dll'), err => {
    if(err) throw err;
    webpack(dllConfig, () => {
      console.log(chalk.cyan.bold('  dll has been build!\n'))
      require('./../index');
    })
  })
}
