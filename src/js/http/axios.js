import axios from 'axios'
import config from 'root/config/common'
import Cookie from './../public/cookie'

const isBodyRequest = method => !!~config.requestBody.indexOf(method);
const isServer =  process.env.VUE_ENV === 'server';
const http = store => options => {
  let { url = '', domain, method = 'GET', data = {}, params = {} } = options;

  let token = store.state.user.token,
      headers = token ? { token } : {},
      isBody = isBodyRequest(method);

  url = (domain || config.domain.default) + url;

  isBody && Object.assign(headers, {'Content-Type' : 'application/json' });

  const fetch =  new Promise((resolve, reject) => {
    axios({ url, method, data, params, headers })
    .then(res => res.data)
    .then(data => {
      if(data.code == 0){
        resolve(data)
      }
      reject({})
    })
    .catch(reject)
  })
  if(isServer){ // 服务端拉取数据超时 通过handlerError 处理redirect 404
    return fetch;
  }else {
    return fetch.catch((err => { // 客户端拉取数据监测异常 浏览器跳转 404
      if(err.errno){
        console.error(err.toString());
        return;
      }
      location.href = '/404';
    }))
  }

}
export { http }
