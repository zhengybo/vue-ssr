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
          icon : require('img/￥.png'),
          title : '金融服务整合',
          list : [
            '1、为你提供购车贷款、车辆抵押、车辆租赁服务',
            '2、车辆残值处理、二手车收购',
            '3、超低价格的金融方案、保险服务'
          ],
          callback(){}
        },
        {
          icon : require('img/user.png'),
          title : '车规级运维',
          list : [
            '1、前装车规级运维团队，7*24小时时时刻刻专人监控',
            '2、产品运营服务团队持续建设，客户使用问题及时响应'
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
