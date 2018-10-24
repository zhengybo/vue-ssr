<template lang="html">
  <full-page>
    <div :style="{backgroundColor : '#11192e'}" class="full-swaper-item">
      <img class="bg-tcb" :src="'./public/bg-1.jpg'" alt="">
    </div>
    <div :style="{backgroundColor : 'blue'}" class="full-swaper-item">
      456
    </div>
    <div :style="{backgroundColor : 'green'}" class="full-swaper-item">
      456
    </div>
    <div :style="{backgroundColor : 'gray'}" class="full-swaper-item">
      456
    </div>
    <div :style="{backgroundColor : 'yellow'}" class="full-swaper-item">
      456
    </div>
    <div :style="{backgroundColor : 'cyan'}" class="full-swaper-item">
      <layout-footer></layout-footer>
    </div>
  </full-page>
</template>

<script>
import apis from '@/api'
import layoutFooter from './../../layout/footer'
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
    // this.$http(apis.user.getUserInfo).then(data => {
    //   console.log(data);
    // })
  },
  components : {
    layoutFooter
  }
}
</script>

<style lang="scss">
  .bg-tcb{
    height: 100%;
  }
</style>
