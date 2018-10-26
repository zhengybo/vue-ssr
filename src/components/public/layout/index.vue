<template lang="html">
  <div class="layout-contain">
    <layout-header id="header"></layout-header>
    <scrollbar :isHiddenOverArea="true">
      <slot></slot>
      <layout-footer id="footer"></layout-footer>
    </scrollbar>
  </div>
</template>

<script>
import layoutFooter from '@/view/layout/footer'
import layoutHeader from '@/view/layout/header'
export default {
  components : {
    layoutHeader,
    layoutFooter,
  }
}
</script>

<style lang="scss">
#header{
  top : 0;
  left : 0;
  width: 100%;
  z-index:999;
  // opacity: 0.5;
  display: block;
  margin-right: 17px;
  padding-left: 50px;
  padding-top: 20px;
  padding-bottom: 10px;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  box-sizing: border-box;
}
.layout-contain{
  height: 100%;
  box-sizing: border-box;
  // overflow-y: scroll;
  position: relative;
}
.layout-content{
  // overflow-y:scroll;
}
#footer{
  position: relative;
  bottom: 0;
}

.layout-contain{
  >.scroll-contain{
    >.scroll-warper{
      min-height: 100%;
    }
  }
}
</style>
