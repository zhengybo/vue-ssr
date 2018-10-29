<template lang="html">
  <div class="footer-items">
    <div class="footer-items-title">{{datas.title}}</div>
    <div class="footer-item" v-for="item in datas.list">
      <img class="footer-icon" v-if="item.icon" :src="item.icon" alt="">
      <span v-if="!item.link">{{item.name}}</span>
      <a target="__blank" v-else :href="item.link">{{item.name}}</a>
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

      a{
        color: inherit;
      }
    }

    .footer-icon{
      width: 14px;
      height: 14px;
      margin-right: 2px;
      display: inline-block;
      transform: translateY(1px);
    }
  }
</style>
