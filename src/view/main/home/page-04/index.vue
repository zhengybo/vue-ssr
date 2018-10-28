<template lang="html">
  <div class="h--100">
    <list
    v-for="(item, i) in lists"
    :key="i"
    :datas="item"
    :right="(i % 2 == 0)"></list>
  </div>
</template>

<script>
import list from './../page-03/list'
export default {
  data(){
    return {
      lists : [
        {
          icon : require('img/GPS.png'),
          title : '原有GPS利用',
          list : [
            '1、对接车辆已有的GPS硬件，不需新增/改装GPS',
            '2、快速对接已有的GPS，避免管车平台切换成本增加',
            '3、全国40+GPS厂家鼎力合作'
          ],
          callback(){}
        },
        {
          icon : require('img/ios.png'),
          title : '多终端展示',
          list : [
            '1、安卓手机',
            '2、IOS手机',
            '3、Web网页'
          ],
          callback(){}
        }
      ]
    }
  },
  components : {
    list
  }
}
</script>

<style lang="css">

</style>
