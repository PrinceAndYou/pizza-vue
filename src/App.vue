<template>
  <div id="app">
    <headTop></headTop>
    <router-view></router-view>  
  </div>
</template>

<script>
import headTop from './components/header/head'

export default {
  name: 'App',
  components:{
    headTop
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666;
}
</style>
