import axios from 'axios'
import config from 'root/config/common'
import Cookie from './../public/cookie'

let isBodyRequest = method => !!~config.requestBody.indexOf(method);

const http = store => options => {
  let { url = '', method = 'GET', data = {}, params = {} } = options;

  let token = store.state.token,
      headers = token ? { token } : {},
      isBody = isBodyRequest(method);

  isBody && Object.assign(headers, {'Content-Type' : 'application/json' });

  return axios({ url, method, data, params, headers })
        .then(res => res.data).catch(err => console.log(err));
}
export { http }
