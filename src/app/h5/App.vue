<template>
  <div id="app">
    
    <div id="preloadPage" class="bg" :class="{'hideImp': loadingEnd}">
      <div class="spinner">
        <div class="spinner-container container1">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
        </div>
        <div class="spinner-container container2">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
        </div>
        <div class="spinner-container container3">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
        </div>
      </div>
      <!-- <div class="info"><span id="loadPercent">1</span>%</div> -->
      <div id="userPreload"></div>
    </div>
    <transition name="slide-fade" transition>
        <router-view />
    </transition>
  </div>
</template>
<script>

import { mapState } from 'vuex';
export default {
  name: 'App',
  computed: {
    ...mapState([
      'loadingEnd'
    ])
  },
  created() {
    if (!window.iframeH5Vue) {
        window.iframeH5Vue = this;
    }
  },
}
</script>

<style>
  @import "./assets/css/base.scss";
  html,body {
    font-size: 23.4375px;;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #app {
    overflow: hidden auto;
    height: 100%;
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(375px);
  }

</style>
