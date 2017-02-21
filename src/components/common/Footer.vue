<template>
  <div class="footer">
    <router-link to="/" tag="div">vue</router-link>
    <router-link to="/page1" tag="div">vue-router</router-link>
    <router-link to="/page2" tag="div">vuex</router-link>    
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'footer'
  }
</script>

<style lang="scss">
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
    line-height: 48px;
    display: flex;
    div {
      flex: 1;
    }
  }
</style>
