<template lang="html">
  <div class="footer-items">
    <div class="footer-items-title">{{datas.title}}</div>
    <div class="footer-item" v-for="item in datas.list">
      <icon v-if="item.icon"></icon>
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    datas : {
      type : Object,
      default(){
        return {
          title : '',
          list : []
        }
      }
    }
  },
  data(){
    return {

    }
  }
}
</script>

<style lang="scss">
  .footer-items{
    width: 32%;
    margin-right: 1.3%;

    text-align: left;
    display: inline-block;
    .footer-items-title{
      color: #fff;
      font-size: 20px;
      font-weight: bold;
    }

    .footer-item{
      white-space:pre-line;
      text-align: justify;

      color: #aeaeae;
      font-size: 14px;
      margin-top: 20px;
    }
  }
</style>
