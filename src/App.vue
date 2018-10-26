<template lang="html">
  <div id="app" :class="{ cube : name == 'cube' }">
    <transition :name="name" >
      <router-view :style="{
        'transform-origin' : name == 'cube' ? `center center -${deep}px` : 'none'
      }" class="absolute"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  data(){
    const transition = ['cube', 'fade', 'scale', 'transform'];
    return {
      deep : 0,
      transition,
      name : transition[this.random(0, 3)]
    }
  },
  methods : {
    random(m, n){
      return ~~(Math.random() * (n - m + 1)) + m;
    }
  },
  mounted(){
    if(this.name == 'cube'){
      this.deep = document.documentElement.clientWidth / 2;
      window.addEventListener('resize', () => {
        this.deep = document.documentElement.clientWidth / 2;
      })
    }
  },

}
</script>

<style lang="scss">
  @import 'scss/public/style.scss';
  #app{
    height: 100%;

    .absolute{
      position: absolute;
      height: 100%;
      width: 100%;
    }

    .cube{
      perspective: 4000px;
      transform-style: preserve-3d;
    }
  }

</style>
