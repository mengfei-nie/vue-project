<template>
  <div>
    <mt-head></mt-head>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script type="text/javascript">
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'viewBox',
  components: {
    mtHead: Header,
    foot: Footer
  }
}
</script>
