<template lang="html">
  <div class="page-product-item">
    <div
    :style="{ backgroundColor : datas.bgColor }"
    :class="{ 'product-item-one' : true, 'right' : right}" >
      <img
      class="product-item-icon"
      :style="{ height : datas.height }"
      :src="datas.icon" alt="">
    </div>
    <div :class="{ 'product-item-two' : true, 'right' : right}" >
      <div class="product-item-title">{{datas.title}}</div>
      <div class="product-item-descs">
        {{datas.desc}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    right : false,
    datas : {
      type : Object,
      default(){
        return {
          icon : '',
          title : '',
          bgColor : '',
          height  : undefined
        }
      }
    }
  },
  methods : {

  }
}
</script>

<style lang="scss">
.page-product-item{
  height: 600px;
  overflow: hidden;
  .product-item-one{
    width: 60%;
    height: 100%;
    float: left;
    position: relative;
    img{
      height: 380px;
      @extend %middle;
    }
  }

  .product-item-two{
    width: 40%;
    height: 100%;
    padding: 0 0 0 6%;
    box-sizing: border-box;
    float: left;

    &.right{
      padding-left:10%;
    }
  }



  .product-item-title{
    color: #1d1d1d;
    text-align: left;
    font-size: 40px;
    margin-top: 120px;
    margin-bottom: 30px;
  }

  .product-item-descs{
    color: #707070;
    max-width: 400px;
    font-size: 22px;
    line-height: 36px;
    padding-right: 10px;
    text-align: justify;
  }

  .product-item-desc{
    line-height: 36px;
    font-size: 20px;
  }
}
</style>
