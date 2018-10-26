<!-- el-scrollbar 由于基于原生滚动 不适用于侧边栏(收缩状态一些元素被隐藏) -->
<template lang="html">
  <div
  @wheel.stop.prevent="wheel"
  :class="{
    'scroll-contain' : true,
    'hidenOver' : isHiddenOverArea}"
  ref="contain">
    <div
    :style="warperStyle"
    class="scroll-warper"
    ref="warper">
    <slot></slot>
    <div ref="observerWarper" class="observer-warper"></div>
  </div>
    <div
    v-if="scrollbar != 'none'"
    v-show="ratio < 1"
    :class="{
      'bar-contain' : true,
      'hoverBar' : scrollbar == 'hover',
      'alwaysBar' : scrollbar == 'always'
      }">
      <div
      :style="barStyle"
      :class="{
        'scroll-bar' : true,
        'bigger' : true,
        'mouseBar' : mouseBar,
        }"
      ref="bar"></div>
    </div>
    <div ref="observerContain" class="observer-contain"></div>
  </div>
</template>

<script>
import { Browser } from '@/js/public'
import MoveTo from './moveto'
import resize from './resize'
export default {
  props : {
    scrollbar : { // 滚动条显示方式
      type : String,
      default : 'hover'
    },
    isHiddenOverArea : { //是否隐藏 超出部分元素
      type : Boolean,
      default : true
    },
    isResize : { //是否开启重新计算 (不需要的话关闭提高性能)
      type : Boolean,
      default : true
    },
    resizeHandleContain : { //重新调整大小时 contain盒子是否一直变化 (优化性能)
      type : Boolean,
      default : true
    },
  },
  computed : {

  },
  data(){
    return {
      mouseBar : false,
      transiteY : 0,
      transiteX : 0,
      ratio : 1,
      warperStyle : {
        transform : 'translateY(0)'
      },
      barStyle : {
        height : 0,
        transform : 'translateY(0)'
      },
      $height : {
        warperHeight : 0,
        innerHeight : 0,
        barHeight : 0
      }
    }
  },
  mounted (){
    this.init();
    this.initEvents();
  },
  methods : {
    init (){ //初始化dom 的一些参数
      let getStyle = Browser.getStyle,
          { warper , contain } = this.$refs;
      let containHeight = getStyle(contain,'height',true),
          warperHeight = getStyle(warper,'height',true),
          ratio = (containHeight / warperHeight),
          barHeight = (ratio > 1 ? 1 : ratio)  *  containHeight;
      this.ratio = ratio;
      let $height = this.$height = {
            containHeight,
            warperHeight,
            barHeight,
            dValue : warperHeight - containHeight
          }
      Object.assign(this.barStyle,{
        height : barHeight + 'px',
        display : $height.dValue > 0 ? 'block' : 'none'
      })
    },
    initEvents(){ // 初始化移动
      const { observerWarper, observerContain, bar } = this.$refs;
      resize(observerWarper,this.resize);
      resize(observerContain,this.resize);
      new MoveTo(bar,{
        downHock : () => {
          this.mouseBar = true;
        },
        offsetHock : (x,y) => {
          this.move(-y / this.ratio);
        },
        upHock : () => {
          this.mouseBar = false;
        }
      });
    },
    wheel(e){
      if(this.ratio > 1) return;
      let delta = e.wheelDelta || -e.deltaY,
          ratio = this.$height.containHeight/800; //和盒子高度有关
      delta = delta > 0 ? 30 : -30; // 设置默认滚动速度
      delta = Math.min((delta / this.ratio * ratio),100); // 调制适当的滚动速度
      this.move(delta);
    },
    move(delta){ //移动相对位置
      let { dValue } = this.$height,
          { warper } = this.$refs;
      this.transiteY += delta;
      if(this.transiteY > 0)this.transiteY = 0;
      if(this.transiteY < 0&&-this.transiteY > dValue)this.transiteY = -dValue;
      this.scrollTo(this.transiteY);
    },
    scrollTo(y){ //滚动到指定位置
      this.scrollWarper(y);
      this.scrollBar(-y * this.ratio);
    },
    scrollWarper(y){
      this.warperStyle.transform = `translateY(${y}px)`;
    },
    scrollBar(y){
      this.barStyle.transform = `translateY(${y}px)`;
    },
    resize(e){ //重新计算
      this.init(); // 重新初始化数据
      let { transiteY, ratio, $height :{ dValue } } = this;
      if(ratio >= 1){
        this.scrollTo(0);
      }else {
        if(-transiteY > dValue){
          this.scrollTo(-dValue);
        }else {
          this.scrollBar(-transiteY * ratio) // 只需要调整滚动条位置
        }
      }
    }
  },
  destoryed(){

  }
}
</script>

<style scoped lang="scss">
  @import './index.scss';
</style>
