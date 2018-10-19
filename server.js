import koa from 'koa'
import path from 'path'
import server  from 'koa-static'
import mount  from 'koa-mount'
import router from './router'
import config from './config'
let app = new koa();
app.config = config;

const { staticRes, staticDir, port } = config;
const _staticDir = server(path.join(__dirname, staticRes));

require('./lib')(app)
router(app)
// app
.use(mount(staticDir, _staticDir))
.listen(7777, () => {
  console.log(`server started at localhost:${7777}`)
})

export default app;
