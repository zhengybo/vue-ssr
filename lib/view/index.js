/**
 * 视图
 */
const { minify } = require('html-minifier')

class view {
  constructor(app){
    this.app = app;
    app.view = this;
  }

  render(ctx, options){
    return new Promise((resolve, reject) => {
       this.renderToString(ctx, options).then(html => resolve(ctx.body = html)).catch(reject);
    }).catch(e => {
      let handlerError = this.app.handlerError || function(){};
      handlerError.call(ctx, ctx, e)
    })
  }

  renderToString(ctx, options){
    let { url, request : { header : { cookie } } } = ctx,
        opt = Object.assign({ url, cookie }, options);
    return new Promise((resolve, reject) => {
      this.app.engine.renderer.renderToString(opt, (err, html) => {
        err ? reject(err) : resolve(minify(html, {
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeAttributeQuotes : true
        }))
      });
    })
  }

  renderClient(){

  }
}

module.exports = app => new view(app)
