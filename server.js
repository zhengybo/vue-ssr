import koa from 'koa'
import path from 'path'
import mount  from 'koa-mount'
import server  from 'koa-static'
import router from './router'
import config from './config'
let app = new koa();
app.config = config;

const { staticRes, staticDir, port } = config;
const _staticDir = server(path.join(__dirname, staticRes));

require('./lib')(app)
router(app)
.use(mount(staticDir, _staticDir))
.on('error',(err, ctx) => {
  // 在ie9 redirect('/404')时会抛出这个错误(忽略它)
  if (err.code !== 'ECONNRESET') {
    console.log(error)
  }
})
.listen(7777, () => {
  console.log(`server started at localhost:${7777}`)
})

export default app;
