<template lang="html">
  <div class="">
    {{userinfo.name}}
    <router-view></router-view>
    <router-link :to="{ name : 'consultation' }">聊天131</router-link>
    <router-link :to="{ name : 'consultation' }">产品</router-link>
  </div>
</template>

<script>
import apis from '@/api'
export default {
  asyncData({store,route}){
    return store.dispatch('getUserInfo')
  },
  data(){
    return {
      name : '123dasd231213'
    }
  },
  computed : {
    userinfo(){
      return this.$store.state.user.userinfo;
    }
  },
  mounted(){
    this.$http(apis.user.getUserInfo).then(data => {
      console.log(data);
    })
  }
}
</script>

<style lang="scss">

</style>
