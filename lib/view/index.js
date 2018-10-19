/**
 * 渲染模板
 */
class view {
  constructor(context){
    this.context = context;
    context.render = this.render.bind(this);
    context.renderClient = this.renderClient.bind(this);
  }

  render(){
    return new Promise((resolve, reject) => {
       this.renderToString().then(html => resolve(this.context.body = html));
    })
  }

  renderToString(options){
    let { app, url, request : { header : { cookie } } } = this.context,
        opt = Object.assign({ url, cookie }, options);
    return new Promise((resolve, reject) => {
       app.engine.renderer.renderToString(opt, (err, html) => {
         err ? reject(err) : resolve(html);
       });
    }).catch(e => console.log(e))
  }

  renderClient(){

  }
}

module.exports = async (context, next) => {
  new view(context);
  await next();
}
