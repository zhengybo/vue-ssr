import path from 'path'
const resolve =  (pathname) => path.resolve(__dirname, '..' , pathname);
export default {
  lib : resolve('./lib'),
  src : resolve('./src'),
  dist : resolve('./dist'),
  config : resolve('./config'),
}
