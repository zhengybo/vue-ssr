<template lang="html">
  <div class="">
    你什么东西都没有找到
  </div>
</template>

<script>
import { Cookie } from '@/js/public'
export default {
  mounted(){
    console.log('?????');
    console.log(Cookie.getCookie('abc'));
    Cookie.setCookie('abc','123')
  }
}
</script>

<style lang="css">
</style>
