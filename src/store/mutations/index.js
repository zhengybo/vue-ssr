import Cookie from '@/js/public/cookie'

export default {
  SET_COOKIE: (state, cookie) => {
    let cookies = Cookie.getCookies(cookie);
    state.cookie = cookies;
    state.token = cookies.token;
  }
}
