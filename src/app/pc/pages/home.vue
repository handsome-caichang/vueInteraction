<template>
<div>
    <bar></bar>
    <div class="bg-mask bg-mask-animate" :style="globalMaskFlag ? 'display: block' : 'display: none'">
    </div>
    <!-- <poup-preview v-if="globalMaskFlag"></poup-preview> -->
    <poup-preview-cancal v-if="globalMaskFlag"></poup-preview-cancal>
</div>
</template>

<script>
import Bar from './child/bar'
import {
    mapState,
    mapMutations
} from 'vuex'
import PoupPreview from '../components/poup_preview'
import PoupPreviewCancal from '../components/poup_preview_canal'
import {getUser} from 'pcApi/jie'
import JDialog from "../components/popup/dialog.vue";
export default {
    name: 'home',
    data() {
        return {}
    },
    computed: {
        ...mapState([
            'globalMaskFlag',
            'userInfo'
        ])
    },
    methods: {
        ...mapMutations([
            'set_headerType',
            'set_userInfo'
        ]),
    },
    created() {
        this.set_headerType('1');
        getUser().then(res => {
            console.log(res);
            if (res.errorCode == 0) {
                this.set_userInfo(res.data.userInfo);
            }
        })
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

</style>
