/**
 * 扩展String
 */
export default class Str extends String{
  /* 首字母大写 */
  static titleCase(str){
    return str[0].toUpperCase() + str.slice(1)
  }

  /* 补0 */
  static zeroFill(number,length){
    number = number.toString();
    let nl = number.replace(/\,/g,'').length;
    if(nl > length-1){return number}
    return new Array(length-nl+1).join('0') + number;
  }

}
