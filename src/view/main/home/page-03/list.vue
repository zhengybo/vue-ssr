<template lang="html">
  <div class="page-product-list">
    <div :class="{ 'product-list-one' : true, 'right' : right}" >
      <img class="product-list-icon" :src="datas.icon" alt="">
    </div>
    <div :class="{ 'product-list-two' : true, 'right' : right}" >
      <div class="product-list-title">{{datas.title}}</div>
      <div class="product-list-descs">
        <div v-for="desc in datas.list" class="product-list-desc">
          {{desc}}
        </div>
      </div>
      <div class="product-use btn" @click="use">立即使用</div>
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
          list : [],
          callback(){}
        }
      }
    }
  },
  methods : {
    use(){
      this.$parent.$parent.$parent.$refs.fullPage.setIndex(5)
    }
  }
}
</script>

<style lang="scss">
.page-product-list{
  // height: 100%;
  height: 50%;
  .product-list-one{
    width: 50%;
    height: 100%;
    float: left;
    background-color: #263868;
    position: relative;
    img{
      width: 400px;
      // height: 300px;
      @extend %middle;
    }
  }

  .product-list-two{
    width: 50%;
    height: 100%;
    padding: 0 0 0 10%;
    box-sizing: border-box;
    float: left;
  }

  .product-list-title{
    font-size: 30px;
    margin-top: 80px;
    margin-bottom: 30px;
  }

  .product-list-descs{
    color: #707070;
  }

  .product-list-desc{
    line-height: 36px;
    font-size: 20px;
  }

  .product-use{
    color: white;
    padding: 6px 20px;
    font-size: 16px;
    border-radius: 36px;
    margin-top: 40px;
    display: inline-block;
    background-color: #4dbcf1;
  }
}
</style>
