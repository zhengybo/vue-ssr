import koa from 'koa'
import path from 'path'
import chalk from 'chalk'
import mount  from 'koa-mount'
import server  from 'koa-static'

import router from './router'
import config from './config'

const app = new koa();
app.config = config;

const { staticRes, staticDir, port } = config;
const _staticDir = server(path.join(__dirname, staticRes));

require('./lib')(app);
router(app)
.use(mount(staticDir, _staticDir))
.use(mount('/public', server(path.join(__dirname, '/public'))))
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
