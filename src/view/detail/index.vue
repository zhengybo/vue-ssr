<template lang="html">
  <div class="">
    {{test}}----
  </div>
</template>

<script>

export default {
  data(){
    return {

    }
  },
  computed : {
    test(){
      return this.$store.state.user.token
      // return this.$store.user.token
    }
  }
}
</script>

<style lang="css">
</style>
