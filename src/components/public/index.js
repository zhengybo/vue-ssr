/**
 * 公用组件
 */
import { Str } from '@/js/public'

export default vue => {
  const compoents = (r => r.keys().map(key => ({
    key : Str.titleCase(key.split('/')[1]),
    value : r(key).default
  })))(require.context('./', true, /^\.\/((?!\/)[\s\S])+\/index\.vue$/))
  compoents.forEach(item => vue.component(item.key,item.value))
};
