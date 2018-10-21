
const router  = require('koa-router')();

export default (app) => {
  /* 处理公用错误 */
  app.handlerError = (ctx, e) => {
    if(typeof e == 'object'){ // 人为返回错误
      ctx.redirect('/404')
      return;
    }
    ctx.throw(500);
  }

  router.get(/^(?!\/(api|dist|404))\/*/, async (ctx) => {
    await ctx.render(ctx);
  })

  router.get('/api/getUserInfo', async (ctx) => {
    ctx.body = {
      code : 1,
      data : {
        name : '我叫mmv'
      }
    }
  })

  router.get('/404', async (ctx) => {
    await ctx.render();
  })


  return app.use(router.routes(),router.allowedMethods());
}
