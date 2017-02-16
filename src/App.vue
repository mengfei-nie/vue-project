<template>
  <div id="app">
    <view-box></view-box>
  </div>
</template>

<script>
import ViewBox from './components/ViewBox'
export default {
  name: 'app',
  components: {
    ViewBox
  }
}
</script>

<style>
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
}
</style>
