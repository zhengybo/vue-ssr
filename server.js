import koa from 'koa'
import router from './router'
let app = new koa();
require('./config')(app)
require('./lib')(app)
router(app)
.listen(7777, () => {
  console.log(`server started at localhost:${7777}`)
})

export default app;
