<template lang="html">
  <div class="">
    <div class="name">
      {{name}}123213
    </div>
    <router-view></router-view>
    <router-link to="/home/news1">新闻页</router-link>
    <router-link to="/detail">详情</router-link>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name : '123dasd231213'
    }
  }
}
</script>

<style lang="scss">
  .name{
    color: red;
    background: green;
    position: absolute;
    transform: rotate(90deg);
  }
</style>
