<template>
<div class="manageTop" style="min-width: 384px;" v-if="headerType == '1'">
    <div class="mangeTopLeftPart">
        <a class="logoParent" href="http://hd.fkw.com" target="_blank">
                <div class="logo">
                    <img class="logo_style4" src="//g-hd.faisys.com/version2/image/hdLogoNew.png?v=555">
                </div>
            </a>
        <div class="product">
            <a href="http://i.fkw.com" target="_blank">凡科网旗下产品</a>
        </div>
    </div>
    <div class="manageInfoBox">
        <div class="manageInfo">
            <div class="myInfoIcon"></div>
        </div>
    </div>
</div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: 'headerContainer',
         computed: {
            ...mapState([
                'headerType'
            ])
        },
    }
</script>

<style scoped>
  @import '../assets/css/header.scss';
</style>
