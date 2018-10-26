<template lang="html">
  <div :style="{ color }" class="header">
    <link-to class="header-logo-link" to="/home">
      <div class="logo-circle">TCB</div>
    </link-to>
    <ul class="header-items mg-l-30">
      <li @click="click(item.index)" v-for="item in links" class="header-item">
        <link-to
        :beforeLink="beforeLink.bind(this, item.index)"
        :froceRouterLink="froceRouterLink"
        class="header-item-link"
        :to="item.url">{{item.name}}</link-to>
      </li>
    </ul>
  </div>
</template>

<script>
import { Cookie } from '@/js/public'
export default {
  props : {
    color : {
      type : String,
      default : '#fff'
    },
    froceRouterLink : false
  },
  data(){
    return {
      links : [
        { name : '产品介绍', url : '/home', index : 0 },
        { name : '使用场景', url : '/home', index : 1 },
        { name : '产生特性', url : '/home', index : 1 },
        { name : '联系我们', url : '/home', index : 5 }
      ]
    }
  },
  methods : {
    click(index){
      this.$store.dispatch('setIndex', index);
    },
    beforeLink(index){
      // 兼容不支持history浏览器
      if(!window.history.replaceState && this.$route.name != 'home'){
        Cookie.setCookie('home-index', index);
      }
    }
  }
}
</script>

<style lang="scss">
.header{
  position: relative;
  left: 50px;
  top: 20px;
  .logo-circle{
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-width: 3px;
    border-radius: 50%;
    text-align: center;
    font-weight: bold;
    border-style: solid;
  }

  .header-items{
    float: left;
    margin-top: 18px;
    line-height: 20px;
  }

  .header-item{
    float: left;
    width: 120px;
  }

  .header-item-link{
    width: 100%;
    height: 100%;
    font-size: 18px;
    text-align: center;
    display: block;
    color: inherit;
  }

  .header-logo-link{
    float: left;
    color: inherit;
  }
}

</style>
