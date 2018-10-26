<template lang="html">
  <div class="home-page-02">
    <div class="home-page-02-up">
      <div class="home-title pd-t-30 pd-b-30"> 使用场景 </div>
      <div class="center">
        <div class="home-page-02-content">
          <list
          v-for="(item, i) in lists"
          :class="{ right : i % 2 == 1 }"
          :key="i"
          :datas="item"></list>
        </div>
      </div>
      <div class="home-title pd-t-50 pd-b-50 home-title-product"> 产品特性 </div>
    </div>
    <list-product :datas="product"></list-product>
  </div>
</template>

<script>
import list from './list'
import listProduct from './../page-03/list'
export default {
  data(){
    return {
      lists : [
        {
          icon : '/public/jinkong_icon.png',
          name : '资管版',
          desc : '资管版是一款专注于车辆资产管理的SAAS平台，实时呈现车辆状态、数据报表、车辆状态通知，满足您的管车需求',
          link : '/product'
        },
        {
          icon : '/public/ziguan_icon.png',
          name : '金控版',
          desc : '金控版专注于贷款车辆的监控，依托大数据计算，帮助放贷公司提前判断车主行为，利用车厂数据帮助寻车',
          link : '/product'
        }
      ],
      product : {
        icon : '/public/api.png',
        title : '开放API',
        list : [
          '1、高性能、安全可靠、开放API',
          '2、轻松对接已有的业务系统'
        ],
        callback(){}
      }
    }
  },
  components : {
    list,
    listProduct
  }
}
</script>

<style lang="scss">
  .home-page-02{
    height: 100%;
    position: relative;

    .home-page-02-up,.home-page-02-down{
      height: 50%
    }

    .home-page-02-up{
      position: relative;
    }

    .home-page-02-content{
      width: 60%;
      display: inline-block;
    }

    .home-title-product{
      width: 100%;
      bottom: 0;
      z-index: -1;
      position: absolute;
    }
  }

</style>
