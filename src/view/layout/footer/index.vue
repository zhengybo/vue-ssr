<template lang="html">
  <div class="footer">
    <div class="hidden footer-content">
      <list
      class="l"
      v-for="(item, i) in lists"
      :key="i"
      :datas="item"></list>
      <img class="erCode" src="/public/ercode.png" alt="">
    </div>
    <div class="center ICP"> 川公网安备 51019002999742号泸ICP备16014043号-10 </div>
  </div>
</template>

<script>
import list from './list'
export default {
  data(){
    return {
      lists : [
        {
          title : '上海总公司',
          list : [
            { name : '李先生' },
            { name : '021-53890000' },
            { name : '上海市徐汇区田林路200号B座2楼钛马号' }
          ]
        },
        {
          title : '成都分公司',
          list : [
            { name : '赵女士' },
            { name : '028-62350288' },
            { name : '成都市高新区天府三街199号太平洋保险金融大厦B区11楼' }
          ]
        },
        {
          title : '关于钛马',
          list : [
            { name : '钛马介绍' },
            { name : '关于钛马' },
            { name : '钛马星' }
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
