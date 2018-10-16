/**
 * 配置构建
 */
import fs from 'fs'
import MFS from 'memory-fs'
import path from 'path'
import merge from 'webpack-merge'
import webpack from 'webpack'
import devMiddlewarer from 'koa-webpack-dev-middleware'
import hotMiddlewarer from 'koa-webpack-hot-middleware'
import config from './config'

const clientConfig = require('./../../build/client-dev')
const serverConfig = require('./../../build/server-dev')

const resolve = (pre, pathname) => path.resolve(pre, pathname)
const templatePath = resolve(__dirname, './../index.html')

const isProd = process.env.NODE_ENV === 'production'

class Setup {
  constructor(app, options = {}){
    this.app = app;
    this.engine = app.engine;
    this.webpack = webpack;
    this.clientConfig = options.clientConfig;
    this.serverConfig = options.serverConfig;
    this.devMiddlewarer = devMiddlewarer;
    this.hotMiddlewarer = hotMiddlewarer;
    this.config = Object.assign(config, (app.config || {}).setup);
    this.FS = fs;
    this.MFS = new MFS();
    this.init();
  }

  init(){
    this.template();
    isProd ? this.prod() : this.dev();
  }

  dev(){
    this.server();
    this.client();
  }

  prod(){
    let dist = this.app.config.dirs.dist;
    Object.assign(this.engine, {
      bundle : require(resolve(dist, 'vue-ssr-server-bundle')),
      manifest : require(resolve(dist, 'vue-ssr-client-manifest'))
    })
    this.engine.update();
  }

  template(){
    this.engine.template = fs.readFileSync(templatePath, 'utf-8');
  }

  server(){
    const serverCompiler = this.webpack(this.serverConfig);
    serverCompiler.outputFileSystem = this.MFS;
    serverCompiler.watch({}, (err, stats) => {
      if (err) throw err;
      stats = stats.toJson()
      if (stats.errors.length) {
        console.log(stats.errors,'....');
        return
      }
      this.engine.bundle = JSON.parse(this.mfs(
        this.clientConfig.output.path,
        'vue-ssr-server-bundle.json'
      ));
      this.engine.update();
    })
  }

  client(){
    const clientCompiler = this.webpack(this.clientConfig)
    const devMiddleware = this.devMiddlewarer(clientCompiler, {
      publicPath: this.clientConfig.output.publicPath,
      noInfo: true
    })
    clientCompiler.plugin('done', stats => {
      stats = stats.toJson()
      stats.errors.forEach(err => console.error(err))
      stats.warnings.forEach(err => console.warn(err))
      if (stats.errors.length) return
      this.engine.manifest = JSON.parse(this._fs(
        devMiddleware.fileSystem,
        this.clientConfig.output.path,
        'vue-ssr-client-manifest.json'
      ))
      this.engine.update();
    })
    this.app.use(devMiddleware);
    this.app.use(this.hotMiddlewarer(clientCompiler, {
      heartbeat: 5000
    }))
  }

  _fs(fs, pathname, file){
    try {
      return fs.readFileSync(path.join(pathname, file), 'utf-8');
    } catch (e) { console.log(e); }
  }

  mfs(path, file){
    return this._fs(this.MFS, path, file);
  }

  fs(path, file){
    return this._fs(this.FS, path, file);
  }

}

module.exports = app => new Setup(app,{
  clientConfig,
  serverConfig
})
