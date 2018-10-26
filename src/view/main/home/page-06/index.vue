<template lang="html">
  <div class="page-06">
    <div class="home-title pd-t-40 pd-b-40"> 联系我们 </div>
    <div class="page-06-center">
      <div class="center-inner">
        <div class="l center-left">
          <img :src="'/public/1.jpg'" alt="">
        </div>
        <div class="r center-right">
          <img :src="'/public/2.jpg'" alt="">
        </div>
      </div>
    </div>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import layoutFooter from '@/view/layout/footer'
export default {
  components : {
    layoutFooter
  }
}
</script>

<style lang="scss">
.page-06{
  height: 100%;
  position: relative;

  .page-06-center{
    text-align: center;

  }

  .center-inner{
    width: 80%;
    overflow: hidden;
    display: inline-block;
    img{
      width:95%;
    }
  }

  .center-left,.center-right{
    width: 50%;
  }

  .footer{
    position: absolute;
  }
}
</style>
