<template lang="html">
  <div class="">
    <layout-header></layout-header>
    <router-view></router-view>
    <layout-footer></layout-footer>
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
