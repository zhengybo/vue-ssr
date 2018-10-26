<!-- 一个简易的fullpage组件 兼容ie9 -->
<template lang="html">
  <div @wheel.stop.prevent="wheel" class="full-contain">
    <div
      :style="{
        'transform' : `translateY(${position}px)`,
        '-ms-transform' : `translateY(${position}px)`
      }"
      ref="swaper"
      :class="{
        'full-swaper' : true,
        'transition-swaper' : allowTransition
        }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { Browser } from '@/js/public'

const { setStyle, getStyle, $, whichTransitionEvent } = Browser
const $ClassItem = 'full-swaper-item'

export default {
  props : {
    defaultIndex : {
      type : Number,
      default : 0
    },
  },
  data(){
    return {
      pending : false,
      position : 0,
      itemLength : 0,
      pageHeight : 0,
      currentIndex : 0,
      transition : null,
      _resize : null,
      allowTransition : false
    }
  },
  created(){
    this.initParams();
    this.initClass();
  },
  mounted(){
    this.initEvent();
    setTimeout(() => { // hack 基于足够的transform设置时间， $nextTick 无效
      this.pending = false;
      this.allowTransition = true;
    },50)
  },
  watch : {
    currentIndex(){
      this.setTransform();
    }
  },
  methods : {
    initParams(){ // 初始化参数
      this.currentIndex = this.defaultIndex;
      this.setIndex(this.currentIndex);
    },
    initClass(){ // 初始化类
      this.$slots.default.forEach((item, index) => {
        let t,d;
        if((d = t = item.data) && (t = t.staticClass)){
          if(t && !!~t.indexOf($ClassItem)){
            this.itemLength ++ ;
            d.staticClass += ` ${$ClassItem}-${index}`
          }
        }
      })
    },
    initEvent(){ // 初始化事件

      this.setPageHeight();
      this.setTransform();
      this._resize = this.resize.bind(this);
      window.addEventListener('resize', this._resize)

      this.transition = whichTransitionEvent();
      if(this.transition){
        this.$refs.swaper.addEventListener(this.transition,e => {
          this.transitionEnd(this.currentIndex)
        });
      }

    },
    resize(){
      let lastHeight = this.pageHeight;
      this.setPageHeight();
      if(lastHeight != this.pageHeight && this.currentIndex != 0){ // 高度不变不需要 变换
        this.setTransform();
      }
    },
    wheel(e){ // 滚动
      let delta = e.wheelDelta || -e.deltaY ; // 方向确认
      let index = this.currentIndex;
      if(this.pending && this.transition){
        return;
      }
      if(delta < 0) {
        this.setIndex(this.currentIndex + 1);
      }else {
        this.setIndex(this.currentIndex - 1);
      }
      // 不存在 滚动效果的浏览器
      if(!this.transition && index !== this.currentIndex){
        this.transitionEnd(this.currentIndex);
      }
    },
    transitionEnd(index){
      if(this.transition){ // 存在滚动效果
        this.handelerEnd(index);
      }else {
        this.handelerEnd(index);
      }
    },
    handelerEnd(index){ // 处理滚动结束动作
      this.pending = false;
      this.$emit('callback', index);
    },
    setTransform(){
      this.pending = true;
      this.position = -this.currentIndex * this.pageHeight;
    },
    setPageHeight(){
      this.pageHeight = getStyle(this.$el,'height', true);
      $(`.${$ClassItem}`).forEach(element => {
        setStyle(element, { 'height' : `${this.pageHeight}px` });
      })
    },
    setIndex(index){ // 设置第几个
      index = +index;
      if(!this.checkScroll(index)) return;
      this.currentIndex = index;
    },
    checkScroll(index){ // 检查时候发生实际滚动
      return (index >= 0 && index < this.itemLength) && this.currentIndex != index;
    }
  },

  beforeDestroy(){
    window.removeEventListener('resize',this._resize);
  }
}
</script>

<style lang="scss">
  .full-contain{
    height: 100%;
    .full-swaper{
      height: 100%;
      width: 100%;
      position: absolute;
      transform: translateY(-0px);
    }
    .full-swaper-item{
      height: 100%;
      overflow: hidden;
      position: relative;
    }
    .transition-swaper{
      transition: all 600ms ease;
    }
  }
</style>
