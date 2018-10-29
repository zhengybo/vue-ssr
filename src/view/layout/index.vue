<template lang="html">
  <div class="layout-contain">
    <layout-header class="header"></layout-header>
      <slot></slot>
    <layout-footer class="footer"></layout-footer>
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
