<template>
<div style="overflow: hidden;">
    <div class="shoTheActBar">
        <div class="hdManageLeft">
            <div class="leftUtil" v-for="(item,index) in list" :key="index" :class="currentIndex == index ? 'hoverChecked checked' : ''">
                <div class="iconHolder" :class="item.ico"></div>
                <div class="leftUtildescr" @click="tabClick(item, index)">{{item.name}}</div>
            </div>
        </div>
        <div class="manageFrame scrollBox">
            <div class="manageFrameWarp checked">
                <!-- <bar-list></bar-list> -->
                <component class="component" :is="currentTabComponent" @toBackGameData="toBackGameData">
                </component>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import BarList from './bar-list'
import ActiveList from './active-list'
import Destruction from './destruction'
import GameData from './barChild/gameData.vue'
export default {
    name: 'bar',
    data() {
        return {
            list: [{
                    ico: '',
                    name: '创建活动',
                    component: 'BarList'
                },
                {
                    ico: 'iconActList',
                    name: '我的活动',
                    component: 'ActiveList'
                },
                {
                    ico: 'iconHexiao',
                    name: '核销管理',
                    component: 'destruction'
                },
                // {
                //     ico: 'iconMyinfo',
                //     name: '个人中心',
                //     path: ''
                // }
            ],
            currentIndex: 0,
            currentTab: 'BarList',
        }
    },
    computed: {
        currentTabComponent() {
            return this.currentTab
        }
    },
    methods: {
        tabClick(item, index) {
            this.currentIndex = index;
            this.currentTab = item.component;
        },
        toBackGameData(data) {
            console.log(data);
            if (data == -1) {
                this.currentTab = "ActiveList";
            }else {
                this.currentTab = 'gameData';
            }
        }
    },
    created() {
    },
    components: {
        BarList,
        ActiveList,
        Destruction,
        GameData
    }
}
</script>

<style scoped>
@import '../../assets/css/barLeft.scss';

</style>
