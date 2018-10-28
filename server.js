import koa from 'koa'
import path from 'path'
import chalk from 'chalk'
import etag from 'koa-etag'
import mount from 'koa-mount'
import server from 'koa-static'
import conditional from 'koa-conditional-get'
import router from './router'
import config from './config'

const app = new koa();
const resource = ( dir, res, opts ) => mount(dir, server(path.join(__dirname, res), opts))

console.log(chalk.yellow.bold('  waiting for server start...\n'))
app.config = config;
require('./lib')(app);
router(app)
.use(conditional())
.use(etag())
.use(resource(config.distDir, config.distRes, config.resOpts))
.use(resource(config.publicDir, config.publicRes, config.resOpts))
.on('error',(err, ctx) => {
  // 在ie9 redirect('/404')时会抛出这个错误(忽略它)
  if (err.code !== 'ECONNRESET') {
    console.log(err);
  }
})
.listen(config.port || 9000, () => {
  console.log(
    chalk.green.bold(`  server started at`),
    chalk.blue.bold(`localhost:${config.port || 9000}\n`)
  );
  if(process.env.NODE_ENV !== 'production'){
    console.log(chalk.magenta.bold('  waiting compiled build...'));
  }

})

export default app;
