import path from 'path'
const resolve =  (pathname) => path.resolve(__dirname, '..' , pathname);

export default {
  distDir : '/dist',   // 网络静态资源地址(打包)
  distRes : '/dist', // 静态资源相对地址(打包)
  publicDir : '/public', // 静态公用资源(第三方单独)
  publicRes : '/public', // 静态公用资源相对地址(第三方单独)
  resOpts : {
    maxage : 60 * 60 * 24 * 30 // 暂定一个月
  },
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
