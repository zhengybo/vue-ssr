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
import list from './list'
export default {
  data(){
    return {
      lists : [
        {
          icon : '/public/baobiao.png',
          title : '定制报表',
          list : [
            '1、已提供40+不同类型的报表',
            '2、满足客户实际使用场景的多维度定制报表',
            '3、基于多类型数据融合、大数据分析'
          ],
          callback(){}
        },
        {
          icon : '/public/yingjian.png',
          title : '多类型硬件接入',
          list : [
            '1、已支持50+种类型数据、200+硬件厂家合作',
            '2、支持视频监控、GPS、OBD、TBOX、载重传感、车厢温度、打卡器等',
            '3、20+TSP平台接入'
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
