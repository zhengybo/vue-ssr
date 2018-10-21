
/**
 * token检查中间件
 */
async function checkToken(ctx, next){
  if(!ctx.header.puid){
    ctx.body = {
      code : 0
    }
  }else {
    await next();
  }
}



export { checkToken }
