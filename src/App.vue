<template>
  <div id="app">
    <div id="hdContainer">
      <header-container></header-container>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderContainer from './components/header-container'
export default {
  name: 'App',
  components: {
    HeaderContainer
  }
}
</script>

<style>
@import "./assets/css/base.scss";
html,
body {
    height: 100%
}
#app{ 
  height: 100%;
}
</style>
