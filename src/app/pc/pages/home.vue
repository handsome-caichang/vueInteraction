<template>
<div>
    <bar></bar>
    <div class="bg-mask bg-mask-animate" :style="globalMaskFlag ? 'display: block' : 'display: none'">
    </div>
</div>
</template>

<script>
import Bar from './child/bar'
import {
    mapState,
    mapMutations
} from 'vuex'
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
    },
    components: {
        Bar,
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
