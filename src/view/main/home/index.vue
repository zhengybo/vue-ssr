<template lang="html">
  <div class="">
    <router-view></router-view>
    <router-link :to="{ name : 'consultation' }">聊天131</router-link>
    <router-link :to="{ name : 'consultation' }">产品</router-link>
  </div>
</template>

<script>
export default {
  // asyncData({store,route}){
  //
  // },
  data(){
    return {
      name : '123dasd231213'
    }
  }
}
</script>

<style lang="scss">

</style>
