<template>
<div class="manageTop" style="min-width: 384px;position: absolute;" v-if="headerType == '1'">
    <div class="mangeTopLeftPart">
        <a class="logoParent" href="http://www.xiaogj.com" target="_blank">
                <div class="logo">
                    <img class="logo_style4" :src="logonImg">
                </div>
            </a>
        <div class="product">
            <a href="http://www.xiaogj.com" target="_blank">校管家旗下产品</a>
        </div>
    </div>
    <div class="manageInfoBox">
        <div class="manageInfo">
            <div class="myInfoIcon"></div>
            <div class="topBarMyInfoContent" v-if="userInfo">
                <div class="top" style="text-align: center;">{{userInfo.userName}}</div>
                <div class="bottom">
                    <a class="rightB" href="javascript:;" @click="outIn"><div class="icon"></div>退出</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState, mapMutations
} from 'vuex';
import logonImg from '../assets/images/logo.png'
import {
    logout
} from 'pcApi/jie.js'
export default {
    name: 'headerContainer',
    data() {
        return {
            logonImg
        }
    },
    computed: {
        ...mapState([
            'headerType',
            'userInfo'
        ])
    },
    methods: {
        ...mapMutations([
            'set_userInfo',
            'set_tabAndIndex'
        ]),
        outIn() {
            app.confirm({
                title: '确定要退出系统吗？'
            }).then(res => {
                if (res) {
                    logout().then(res => {
                        this.set_userInfo(null);
                        this.set_tabAndIndex({
                            currentIndex: 0,
                            currentTab: 'BarList'
                        });
                        if (res.errorCode == 0) {
                            this.$router.replace('login')
                        }
                    })
                }
            })
        }
    }
}
</script>

<style scoped>
@import '../assets/css/header.scss';
</style>
