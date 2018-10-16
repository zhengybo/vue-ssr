module.exports =  (app) => {
  require('./engine')(app);
  require('./setup')(app);
  app.use(require('./view'));
}
