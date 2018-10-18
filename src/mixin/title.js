
const serverTitleMixin = {
  created () {
    if(this.$ssrContext){
      this.$ssrContext.title = this.$route.meta.title || '';
    }
  }
}

const clientTitleMixin = {
  mounted () {
    let title = this.$route.meta.title;
    if (title) {
      document.title = title || ''
    }
  }
}

export default process.env.VUE_ENV === 'server'
  ? serverTitleMixin
  : clientTitleMixin
