
const router  = require('koa-router')();

export default (app) => {

  router.get(/^(?!\/(api|dist))\/*/, async (ctx) => {
    await ctx.render();
  })

  router.get('/api/getUserInfo', async (ctx) => {
    ctx.body = {
      code : 0,

      data : {
        name : '我叫mv',
        age : 10
      }
    }
  })

  return app.use(router.routes(),router.allowedMethods());
}
