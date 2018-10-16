
const router  = require('koa-router')();

export default (app) => {

  router.get(/^(?!\/api)\/*/, async (ctx) => {
    await ctx.render();
  })

  return app.use(router.routes(),router.allowedMethods());
}
