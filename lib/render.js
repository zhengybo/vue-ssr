/**
 * 渲染模板
 */
class Render {

  constructor(context){
    this.context = context;
    context.render = this.render.bind(this);
    context.renderClient = this.renderClient.bind(this);
  }

  render(options){
    return this.context.app.view.render(this.context, options);
  }

  renderClient(){

  }

}


module.exports = async (context, next) => {
  new Render(context);
  await next();
}
