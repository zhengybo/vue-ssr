const isClient = process.env.VUE_ENV === 'client'
export default class Cookie {
  static getCookie(name){
    if(!isClient) return;
    let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    return (arr=document.cookie.match(reg)) ? unescape(arr[2]) : null
  }

  static getCookies(cookies){
    let t,r = {};
    cookies.split('; ').forEach(item => {
      t = item.split('=')
      r[t[0]]=t[1]
    })
    return r;
  }

  static setCookie(name , value , days){
    if(!isClient) return;
    let exp = new Date();
    exp.setTime(exp.getTime() + days*24*60*60*1000);
    document.cookie = `${name}=${escape (value)};${days ? (";expires="+ exp.toGMTString()) : ''};`;
  }

  static deleteCookie(name){
    if(!isClient) return;
    document.cookie = `${name}='';expires=${new Date().toGMTString()}`;
  }
}
