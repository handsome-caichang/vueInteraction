<template>
<div>
  <bar></bar>
  <div class="bg-mask bg-mask-animate" :style="globalMaskFlag ? 'display: block' : 'display: none'">
  </div>
    <!-- <poup-preview v-if="globalMaskFlag"></poup-preview> -->
    <!-- <poup-preview-cancal v-if="globalMaskFlag"></poup-preview-cancal> -->
</div>
</template>

<script>
import Bar from './child/bar'
import {mapState} from 'vuex'
import PoupPreview from '../components/poup_preview'
import PoupPreviewCancal from '../components/poup_preview_canal'
export default {
  name: 'home',
  data () {
    return {
    }
  },
   computed: {
       ...mapState([
           'globalMaskFlag'
       ])
    },
  components: {
      Bar,
      PoupPreviewCancal,
      PoupPreview,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/fai.scss';
  @import '../assets/css/index.scss';

</style>
