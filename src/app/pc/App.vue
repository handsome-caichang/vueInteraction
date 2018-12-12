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
   data() {
      return {
      };
  },
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
.container {
  position: absolute;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: none repeat scroll 0 0 #f5f5f5;
    overflow-x: hidden;
}
</style>
