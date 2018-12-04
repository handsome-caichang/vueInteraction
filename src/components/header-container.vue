<template>
<div id="hdManageTop" style="min-width: 384px;">
    <div class="mangeTopLeftPart">
        <a class="hd_fkw_logoParent" href="http://hd.fkw.com" target="_blank">
                <div class="logo" id="hd_fkw_logoBox">
                    <img class="hd_logo_style4" src="//g-hd.faisys.com/version2/image/hdLogoNew.png?v=555">
                </div>
            </a>
        <div class="fkwProduct">
            <a href="http://i.fkw.com" target="_blank">凡科网旗下产品</a></div>
        <div class="swichStroreBar">
        </div>
    </div>
    <div class="manageInfoBox" v-if="headerType !== '1'">
        <div class="manageInfo hoverShadow coupLister">
            <div class="coupIconBtn">
                <div class="headerRedDot hide" style="display: none;"></div>
            </div>
            <div class="coupListBox" style="display: none;">
                <div class="faiCoupBoxer">
                    <div class="faiCoupInfo notCoupInfo">
                        <div class="notCoupShow"><span class="lineDecore"></span><span class="middle">目前还未有可用现金券</span><span class="lineDecore"></span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="manageInfo hoverShadow manageInfoMin topBarBulletin">
            <div class="topBarIcon1">
                <div class="headerRedDot hide" style="display: none;"></div>
            </div>
        </div>
        <div class="manageInfo manageInfoMin hoverShadow moreBarContentBox">
            <div class="moreBarIcon">
                <span class="headerRedDot hide" style="top:3px;right:9px;"></span>
            </div>
        </div>
        <div class="manageInfo manageInfoMin hoverShadow topBarMyInfo">
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
