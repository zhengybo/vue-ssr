module.exports =  (app) => {
  require('./engine')(app);
  require('./setup')(app);
  require('./view')(app);
  app.use(require('./render'));
}
