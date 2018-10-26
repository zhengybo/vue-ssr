<template lang="html">
  <full-page :defaultIndex="defaultIndex" ref="fullPage">
    <page01 class="full-swaper-item"></page01>
    <page02 class="full-swaper-item"></page02>
    <page03 class="full-swaper-item"></page03>
    <page04 class="full-swaper-item"></page04>
    <page05 class="full-swaper-item"></page05>
    <page06 class="full-swaper-item"></page06>
  </full-page>
</template>

<script>
import apis from '@/api'
import page01 from './page-01'
import page02 from './page-02'
import page03 from './page-03'
import page04 from './page-04'
import page05 from './page-05'
import page06 from './page-06'
export default {
  asyncData({store,route}){
    return store.dispatch('getUserInfo')
  },
  data(){
    return {
      defaultIndex : 0
    }
  },
  watch : {
    index(v){
      this.setIndex(v.v);
    }
  },
  computed : {
    userinfo(){
      return this.$store.state.user.userinfo;
    },
    index(){
      return this.$store.state.home.index;
    }
  },
  created(){
    this.defaultIndex = this.index.v;
  },
  methods : {
    setIndex(v){
      return this.$refs.fullPage.setIndex(v);
    }
  },
  components : {
    page01,
    page02,
    page03,
    page04,
    page05,
    page06
  },
  destroyed(){
    if(!window.history.replaceState){
      Cookie.deleteCookie('home-index');
    }
  }
}
</script>

<style lang="scss">
  .home-title{
    font-size: 30px;
    color: #37568f;
    text-align: center;
    font-weight: bold;
  }

</style>
