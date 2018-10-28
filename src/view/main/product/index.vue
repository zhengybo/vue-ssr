<template lang="html">
  <layout class="product">
    <div class="pd-t-60 banner"></div>
    <list
    v-for="(item, i) in lists"
    class="mg-t-40"
    :key="i"
    :datas="item"
    :right="(i % 2 == 0)"></list>
  </layout>
</template>

<script>
import list from './list'
export default {
  data(){
    return {
      lists : [
        {
          icon : require('img/baobiao.png'),
          title : '车队车辆资源管理'
        },
        {
          icon : require('img/yingjian.png'),
          title : '车辆租债管理'
        },
        {
          icon : require('img/yingjian.png'),
          title : '物流车平台管理'
        }
      ]
    }
  },
  methods : {
  },
  components : {
    list
  }
}
</script>

<style lang="scss">
  .product{
    height: 100%;
    color: white;
    text-align: center;
  }
  .banner{
    height: 500px;
    background-color: #0c1229;
  }
</style>
