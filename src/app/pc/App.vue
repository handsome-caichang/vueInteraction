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
import { mapState, mapMutations } from 'vuex';
import {getUser} from 'pcApi/jie.js'
export default {
  name: 'App',
   data() {
      return {
      };
  },
  computed: {
  },
  components: {
    HeaderContainer
  },
  methods: {
    ...mapMutations([
      'set_userInfo'
    ])
  },
  created() {
    // if (!this.userInfo) {
    //   this.$router.replace('/login')
    // }
    getUser().then(res => {
        // console.log(res);
        if (res.errorCode == 0) {
          this.set_userInfo(res.data);
        }else {
          this.$router.replace('/login')
        }
    })
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
