/**
 * 引擎
 */
import fs from 'fs'
import Vue from 'vue'
import LRU from 'lru-cache'

const { createBundleRenderer } = require('vue-server-renderer')

import config from './config'

class Engine {
  constructor(app){
    this.app = app;
    this.createBundleRenderer = createBundleRenderer;
    this.config = Object.assign(config, (app.config || {}).ssr);
    this.templateCache = [];
    this.bundle = null;
    this.template = null;
    this.renderer = null;
    this.manifest = null;
    app.engine = this;
  }

  getTemplate(){

  }

  createBundle(options = {}){
    let opt = Object.assign({
      cache: LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15
      }),
      runInNewContext : false,
      template : this.template,
      clientManifest : this.manifest
    }, options);
    if(this.bundle && this.manifest){
      this.renderer = createBundleRenderer(this.bundle, opt)
    }
    return this.renderer;
  }

  update(){
    this.createBundle();
  }

}

module.exports = app => new Engine(app)
