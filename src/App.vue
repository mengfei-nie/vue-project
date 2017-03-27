<template>
  <div id="app">
    <view-box 
    :transitionName="name"
    :isShowBack="is_show_back"
    :isShowFooter="is_show_footer"
    ></view-box>
  </div>
</template>

<script>
import ViewBox from './components/ViewBox'
export default {
  name: 'app',
  components: {
    ViewBox
  },
  data () {
    return {
      name: '',
      is_show_back: '',
      is_show_footer: true
    }
  },
  // 接着在父组件内
  // watch $route 决定使用哪种过渡
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      console.log(toDepth, fromDepth)
      // 假如在首页不使用过渡效果
      if (toDepth === 2) {
        if (fromDepth < 3) {
          console.log(1111111)
          this.name = ''
          this.is_show_back = false
        } else {
          console.log(222222)
          this.name = ''
          this.is_show_back = false
          this.name = 'slideRight'
        }
      } else {
        console.log(33333333333)
        this.is_show_back = true
        this.name = toDepth < fromDepth ? 'slideRight' : 'slideLeft'
      }
    }
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  /*第三方库样式修改*/
  .mint-header {
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.1);
    .mint-header-title {
      color: #000;
    }
  }  
}
</style>
