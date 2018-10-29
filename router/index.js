import chalk from 'chalk'
import config from './../config'
const router  = require('koa-router')();
const isProd = process.env.NODE_ENV === 'production'
export default (app) => {
  /* 处理公用错误 */
  app.handlerError = (ctx, err) => {
    console.log(err);
    if(typeof err == 'object'){ // 人为返回错误
      if(err.errno){
        console.log(
          chalk.red.bold(err.toString()),
          chalk.cyan.bold('  \nat the request '),
          chalk.blue.bold(`'${err.config.url}'`)
        );
      }
      if(err.toString() == '[object Object]'){
        ctx.redirect('/404')
      }
      if(!isProd){
        ctx.body = config.html(`<span style="color:red">${err.toString()}</span>`);
      }
      return;
    }
    ctx.throw(500);
  }

  router.get(/dist\/*/, async (ctx, next) => {
    if(!ctx.fresh){
      ctx.set({'Cache-Control' : `max-age=${config.resOpts.maxage / 1000}`});
    }
    await next();
  })

  router.get(/^(?!\/(api|dist|public|404))\/*/, async (ctx) => {
    if(ctx.url === '/'){
      ctx.redirect('/home')
      return;
    }
    await ctx.render(ctx);
  })

  router.get('/api/getUserInfo', async (ctx) => {
    ctx.body = {
      code : 0,
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
