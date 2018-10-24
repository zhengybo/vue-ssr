import path from 'path'
const resolve =  (pathname) => path.resolve(__dirname, '..' , pathname);

export default {
  staticDir : '/dist',   // 网络静态资源地址
  staticRes : '/dist', // 静态资源相对地址
  port : 7778,
  ssr : {

  },
  setup : {

  },
  dirs : {
    lib : resolve('./lib'),
    src : resolve('./src'),
    dist : resolve('./dist'),
    config : resolve('./config'),
  },
  html : (text) => {
    return `<!DOCTYPE html><html lang=en><head><meta charset=utf-8></head><body>${text}</body></html>`
  }
}
