/**
 * 扩展bom
 */
export default class Browser {

  static getStyle(elem , attr, value){
    let res = getComputedStyle ? getComputedStyle(elem)[attr] :elem.currentStyle[attr];
    return value === true ? parseInt(res) : res;
  }

  static setStyle(elem , obj = {}){
    let css = Object.keys(obj).map(attr => {
      elem.style[attr] = obj[attr]
    });
  }

  static $(name,more){
    if(!name.indexOf('#')){
      return [...document.querySelector(name)];
    }
    return more ? [...document.querySelectorAll(name)] : [...document.querySelector(name)]
  }

  static getPosition(e) {
    let x = 0, y = 0;
    while (e != null) {
        x += e.offsetLeft;
        y += e.offsetTop;
        e = e.offsetParent;
    }
    return { x: x, y: y };
  }

  static whichTransitionEvent(){
    let t,el = document.createElement('fakeelement');
    let transitions = {
      transition:'transitionend',
      OTransition:'oTransitionEnd',
      MozTransition:'transitionend',
      WebkitTransition:'webkitTransitionEnd'
    }
    for(t in transitions){
      if( el.style[t] !== undefined ){
        return transitions[t];
      }
    }
  }
}
