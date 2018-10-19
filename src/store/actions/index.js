import { http } from '@/js/http'
export default {
  fetch(store, data){
    return http(store)(data);
  }
}
