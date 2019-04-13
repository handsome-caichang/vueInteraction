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
                <component class="component" :is="currentTab" @toBackGameData="toBackGameData" :id="currentId">
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
import UserList from './barChild/userList.vue'
import {getTemplateList} from 'pcApi/jie.js'
import { mapState, mapMutations } from 'vuex';
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
                    component: 'Destruction'
                },
                // {
                //     ico: 'iconMyinfo',
                //     name: '个人中心',
                //     path: ''
                // }
            ],
            // currentIndex: 0,
            // currentTab: 'BarList',
            pageIndex: 0,
            pageSize: 10,
            currentId: '',
            componentList: [
                {
                    component: 'BarList'
                },
                {
                    component: 'ActiveList'
                },
                {
                    component: 'destruction'
                },
                {
                    component: 'GameData'
                },
                {
                    component: 'UserList'
                },
            ]
        }
    },
    computed: {
        ...mapState([
            'currentTab',
            'currentIndex'
        ]),
    },
    methods: {
        ...mapMutations([
            'set_tabAndIndex'
        ]),
        tabClick(item, index) {
            this.set_tabAndIndex({
                currentIndex: index,
                currentTab: item.component
            });
            let query = this.$router.history.current.query;
            let path = this.$router.history.current.path;
            let newQuery = JSON.parse(JSON.stringify(query));
            newQuery.tabType = index;
            this.$router.push({ path, query: newQuery });
        },
        toBackGameData(data,id) {
            if (data == -1) {
                this.set_tabAndIndex({
                    currentIndex: this.currentIndex,
                    currentTab: "ActiveList"
                });
            }else if(data == 1){
                 this.set_tabAndIndex({
                    currentIndex: this.currentIndex,
                    currentTab: "gameData"
                });
                this.currentId = id;
            }else if(data == 2) {
                 this.set_tabAndIndex({
                    currentIndex: this.currentIndex,
                    currentTab: "userList"
                });
                this.currentId = id;
            }
        }
    },
    created() {
        console.log(this.$route.query);
        if(this.$route.query && this.$route.query.tabType) {
            if (this.$route.query.tabType == '1' || this.$route.query.tabType == '2' || this.$route.query.tabType == '3') {
                this.set_tabAndIndex({
                    currentIndex: this.$route.query.tabType,
                    currentTab: this.componentList[this.$route.query.tabType].component
                });
            }
        }
    },
    components: {
        BarList,
        ActiveList,
        Destruction,
        GameData,
        UserList
    }
}
</script>

<style scoped>
@import '../../assets/css/barLeft.scss';

</style>
