<template lang="html">
  <layout class="product">
    <div class="pd-t-60 banner">
      <span class="describe">
        资管版是一款专注于资产管理的SASS凭条，实时呈现车辆状态、数据报表、车辆状态通知、满足您的管理需求
      </span>
      <img class="describe-img" :src="require('img/product-bg-tu.png')" alt="">
    </div>
    <list
    v-for="(item, i) in lists"
    :class="['mg-t-40', `list-${i}`] "
    :key="i"
    :datas="item"
    :right="(i % 2 == 1)"></list>
  </layout>
</template>

<script>
import list from './list'
export default {
  data(){
    return {
      lists : [
        {
          icon : require('img/tu1.png'),
          title : '车队车辆资源管理',
          bgColor : '#3652c0',
          desc : '钛车宝提供实时车况、车辆定位、告警通知、报表分析、行程数据分析等功能，达到降本增效、可视化运营'
        },
        {
          icon : require('img/tu2.png'),
          title : '车辆租债管理',
          bgColor : '#142143',
          desc : '钛车宝提供实时车况、车辆定位、告警通知、车辆运营报表等，可以有效的监管车辆运营，帮助预判还款能力。'
        },
        {
          icon : require('img/tu3.png'),
          title : '物流车平台管理',
          bgColor : '#fafafc',
          height : '500px',
          desc : '钛车宝对市场上硬件平台进行数据整合，物流车管理平台可以零硬件成本获取平台上车辆的数据，为物流车行业赋能。'
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
    width: 100%;
    height: 100%;
    color: white;
    text-align: center;
    .list-2{
      background-color: #fafafc;
    }

    .banner{
      position: relative;
      height: 500px;
      background: url('./../../../assets/img/product-bg-01.jpg') no-repeat center top;
      background-color: #0c1429;
      background-size: 100% 100%;
      .describe{
        top: 40%;
        left: 15%;
        color: white;
        width: 600px;
        opacity: 0.7;
        font-size: 22px;
        text-align: justify;
        position: absolute;
      }

      .describe-img{
        position: absolute;
        top: 10%;
        left: 60%;
      }
    }
  }

</style>
