<!-- 一个兼容性的router-link（ie9处理） -->
<template lang="html">
  <div @click="link"  class="router-link">
    <a href="javascript:void(0)"><slot></slot></a>
  </div>
</template>

<script>
export default {
  props : {
    beforeLink : {
      type : Function,
      default : () => {}
    },
    froceRouterLink : false,
  },
  data(){
    return {
      flag : true,
      className : ''
    }
  },
  created(){
  },
  mounted(){
    this.flag = !!window.history.replaceState;
  },
  methods : {
    link(){
      if(this.beforeLink() === false) return
      if(this.flag || this.froceRouterLink){
        this.$router.push(this.$attrs.to)
      }else {
        location.href = this.$attrs.to;
      }
    }
  }
}
</script>

<style lang="scss">
.router-link{
  display: inline-block;
  cursor: pointer;
  a{
    display: block;
    width: 100%;
    height: 100%;
    color: inherit;
    line-height: inherit;
    font-size: inherit;
    font-weight: inherit;
  }
}
</style>
