<template lang="html">
  <div class="page-02-list">
    <img class="page-02-icon" :src="datas.icon" alt="">
    <div class="page-02-name" >{{datas.name}}</div>
    <div class="page-02-desc">{{datas.desc}}</div>
    <link-to class="scan" :to="datas.link"> 点击查看 </link-to>
  </div>
</template>

<script>
export default {
  props : {
    datas : {
      type : Object,
      default(){
        return {
          icon : '',
          name : '',
          desc : '',
          link : ''
        }
      }
    }
  }
}
</script>

<style lang="scss">
  .page-02-list{
    width: 40%;
    max-width: 400px;
    float: left;
    text-align: left;

    .page-02-icon{
      width: 30px;
      height: 30px;
    }
    .page-02-name{
      color: #404952;
      margin: 30px 0;
      font-size: 22px;
    }
    .page-02-desc{
      color: #64707e;
      font-size: 16px;
      margin-bottom: 20px;
      text-align: justify;
    }

    .scan{
      color: #3d8fff;
      border: 1px solid #1aabfe;
      padding: 5px 10px;
      line-height: 35px;
      border-radius: 5px;
      text-align: center;
    }
  }

</style>
