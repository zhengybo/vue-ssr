<template lang="html">
  <div id="app" class="">
    <layout>
      <router-view></router-view>
    </layout>

  </div>
</template>

<script>
import layout from './view/layout'
export default {
  components : {
    layout
  }
}
</script>

<style lang="css">
</style>
