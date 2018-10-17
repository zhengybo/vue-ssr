<template lang="html">
  <div class="">
    <div class="name">
      {{name}}1as123131131qwe233123dsqweas123我的
    </div>
    <router-link to="/detail">asdaqwqes</router-link>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name : '123dasd231213'
    }
  },
  title(){
    return '主页'
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
