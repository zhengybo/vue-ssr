<template lang="html">
  <div class="layout-contain">
    <scrollbar
    id="scroll-aside"
    :class="{ 'aside-scroll' : true }"
    :isHiddenOverArea="true">
      <layout-header class="header"></layout-header>
        <slot></slot>
      <layout-footer class="footer"></layout-footer>
    </scrollbar>

  </div>
</template>

<script>
import layoutFooter from './footer'
import layoutHeader from './header'
export default {
  components : {
    layoutHeader,
    layoutFooter,
  }
}
</script>

<style lang="css">

</style>
