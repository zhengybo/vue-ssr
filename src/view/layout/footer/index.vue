<template lang="html">
  <div class="footer">
    <div class="hidden footer-content">
      <list
      class="l"
      v-for="(item, i) in lists"
      :key="i"
      :datas="item"></list>
      <img class="erCode" :src="require('img/ercode.png')" alt="">
    </div>
    <div class="center ICP"> xxxxxxxxxxxxxxxxxxxxxx </div>
  </div>
</template>

<script>
import list from './list'
export default {
  data(){
    return {
      lists : [
        {
          title : 'xxxxx',
          list : [
            { name : '李先生' },
            { name : '021-5xxxx' },
            { name : 'xxxxxxxxxx' }
          ]
        },
        {
          title : 'xxxxx',
          list : [
            { name : '赵女士' },
            { name : '028-62xxxx' },
            { name : 'xxxxxxxxxx' }
          ]
        },
        {
          title : '关于xxxxxx',
          list : [
            { name : 'xxxxxx介绍' },
            { name : '关于xxxxxx' },
            { name : 'xxxxxx星' }
          ]
        }
      ]
    }
  },
  components : {
    list
  }
}
</script>

<style lang="scss">
.footer{
  bottom: 0;
  width: 100%;
  height: 300px;
  background-color: #0c1229;
  position: relative;
  text-align: center;

  .footer-content{
    width: 75%;
    margin-top: 50px;
    display: inline-block;
  }

  .erCode{
    position: absolute;
    width: 120px;
    height: 120px;
    right: 20px;
    top: 60px;
    background-color: red;
    transform: translateX(-100px);
  }

  .ICP{
    color: white;
    font-size: 16px;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    position: absolute;
  }
}
</style>
