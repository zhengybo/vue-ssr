<template lang="html">
  <div class="page-product-item">
    <div :class="{ 'product-item-one' : true, 'right' : right}" >
      <img class="product-item-icon" :src="datas.icon" alt="">
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
  height: 400px;
  overflow: hidden;
  .product-item-one{
    width: 66.7%;
    height: 100%;
    float: left;
    background-color: #263868;
    position: relative;
    img{
      width: 400px;
      @extend %middle;
    }
  }

  .product-item-two{
    width: 33.3%;
    height: 100%;
    padding: 0 0 0 10%;
    box-sizing: border-box;
    float: left;
  }

  .product-item-title{
    color: black;
    text-align: left;
    font-size: 30px;
    margin-top: 80px;
    margin-bottom: 30px;
  }

  .product-item-descs{
    color: #707070;
  }

  .product-item-desc{
    line-height: 36px;
    font-size: 20px;
  }
}
</style>
