import koa from 'koa'
import router from './router'
import config from './config'
let app = new koa();
app.config = config;
require('./lib')(app)
router(app)
.listen(7777, () => {
  console.log(`server started at localhost:${7777}`)
})

export default app;
