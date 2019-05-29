<template lang="html">
  <div class="page-01">
    <layout-header :froceRouterLink="true" class="page-header"></layout-header>
    <div class="bg-center">
      <img class="bg-01" :src="require('img/lingxing.jpg')" alt=""><img class="bg-02" :src="require('img/tu.jpg')" alt="">
    </div>
    <div class="page-01-content">
      <span class="page-01-title">xxxxxx 多源、整合、车管专家</span>
      <span class="page-01-sub-title">多源头硬件接入、多类型数据整合、可视化车辆管理</span>
    </div>
  </div>
</template>

<script>
import layoutHeader from '@/view/layout/header'
export default {
  components : {
    layoutHeader
  }
}
</script>

<style lang="scss">
  .page-01{
    height: 100%;
    background-color: #0c122a;
    position: relative;
    text-align: center;
    .page-header{
        position: absolute;
    }

    .page-01-content{
      width: 100%;
      color: white;
      top : 30%;
      left: 13%;
      position: absolute;
    }

    .page-01-title{
      color: white;
      left: 0;
      font-size: 50px;
      position: absolute;
    }

    .page-01-sub-title{
      top : 40%;
      left: 0;
      top: 80px;
      opacity: 0.6;
      font-size: 24px;
      position: absolute;
    }

    .bg-center{
      height: 100%;
      width: 1600px;
      user-select:none;
      display: inline-block;
    }
    .bg-01,.bg-02{
      width: 800px;
      height: auto;
    }
  }
</style>
