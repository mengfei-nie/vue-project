<template>
  <div>
    <mt-header fixed title="Header">
      <!-- <router-link to="" @click="back" slot="left"> -->
        <mt-button v-if="isShowBack" @click="back" icon="back" slot="left">返回</mt-button>
      <!-- </router-link> -->
    </mt-header>
    <transition :name="transitionName">
      <router-view id="viewBox"></router-view>
    </transition>  
    <foot v-if="isShowFooter"></foot>
  </div>
</template>

<script type="text/javascript">
// import Header from './common/Header'
import { Header, Button } from 'mint-ui'
import Footer from './common/Footer'
export default {
  name: 'viewBox',
  components: {
    mtHeader: Header,
    mtButton: Button,
    foot: Footer
  },
  props: {
    transitionName: {
      type: String
    },
    isShowBack: {
      type: Boolean
    },
    isShowFooter: {
      type: Boolean
    }
  },
  methods: {
    back: () => {
      window.history.go(-1)
    }
  }
}
</script>

<style type="text/css">
  /*页面左滑*/
  .slideLeft-enter-active,.slideLeft-leave-active {
    transition: all 0.5s;
  }
  .slideLeft-enter {
    transform: translateX(100%);
  }
  .slideLeft-leave-active {
    transform: translate(-100%);
  }
  /*页面右滑*/
  .slideRight-enter-active,.slideRight-leave-active {
    transition: all 0.5s;
  }
  .slideRight-enter {
    transform: translateX(-100%);
  }
  .slideRight-leave-active {
    transform: translate(100%);
  }
  #viewBox {
    margin-top: 40px;
  }
</style>
