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
            <div class="topBarMyInfoContent" v-if="userInfo">
                <div class="top">长沙市校管家教育科技有限公司</div>
                <div class="bottom">
                    <div class="leftB">{{userInfo.userName}}</div><a class="rightB" href="javascript:;" @click="outIn"><div class="icon"></div>退出</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
export default {
    name: 'headerContainer',
    computed: {
        ...mapState([
            'headerType',
            'userInfo'
        ])
    },
    methods: {
        outIn() {
            app.confirm({title: '确定要退出系统吗？'}).then( res => {
                if (res) {
                    this.$router.replace('login')
                }
            })
        }
    }
}
</script>

<style scoped>
@import '../assets/css/header.scss';
</style>
