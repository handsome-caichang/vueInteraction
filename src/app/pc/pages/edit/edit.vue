<template>
<div class="version3">
    <div class="container editActContainer">
        <edit-header @saveView="saveView"></edit-header>
        <div class="editActiveWarp">
            <div id="editActive" class="editActive editActBox flex">
                <div class="topBarWarp">
                    <div class="topBarSrollBox">
                        <div class="topBar">
                            <div class="column" v-for="(item,index) in leftList" :key="index" :class="checked == item.type ? 'checked':''" @click="checkLeft(item)">
                                <span class="name">{{item.name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="phoneWarp">
                    <div class="phoneBox">
                        <div class="phone">
                            <div class="wxTitle">
                                <div class="actName" ng-bind="game.name">{{editData.bizData.baseInfo.name}}</div>
                            </div>
                            <div class="gameContent">
                                <iframe ref="iframeConent" src="http://localhost:8080/h5"
                                        frameborder="0" scrolling="no" style="width:100%;height:100%;"></iframe>
                            </div>
                            <div class="moduleLayer moduleLayerBox"></div>
                        </div>
                    </div>
                </div>
                <div class="editContent isOpenActiveABTest flex-1" ng-class="game.$newEditSet">
                    <div class="commTabBox flex activeTab">
                        <div class="tabSetting commTab flex-1 ng-scope" v-for="(item, index) in list" :key="index" :class="{'checked': item.component == currentTab}" @click="tabClick(item)">
                            <span class="commTabName tabSettingName">{{item.name}}</span>
                            <div class="awardErrDot"></div>
                        </div>
                    </div>
                    <div class="editDetail">
                        <component class="component" :is="currentTabComponent" :iframeConentObj="iframeConentObj" :h5Store="h5Store">
                        </component>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {editMixin} from './edit.js'
import editHeader from './compoent/header'
import baseSet from './compoent/baseSet'
import prizeSet from './compoent/prizeSet'
import sendSet from './compoent/sendSet'
import templateSet from './compoent/templateSet'
import {mapMutations, mapState} from 'vuex'
export default {
    name: 'editHaeder',
    mixins: [editMixin],
    data() {
        return {
            checked: 'home',
            list: [
                {
                    name: '基础设置',
                    component: 'baseSet'
                },
                {
                    name: '派件方式',
                    component: 'sendSet'
                },
                {
                    name: '奖项设置',
                    component: 'prizeSet'
                },
                {
                    name: '模板设置',
                    component: 'templateSet'
                },
            ],
            currentTab: 'baseSet',
            iframeConentObj: {},
            h5Store: {},
        }
    },
    computed: {
        currentTabComponent() {
            return this.currentTab
        },
        ...mapState([
            'editData',
        ]),
    },
    methods: {
        ...mapMutations([
            'set_headerType'
        ]),
        checkLeft(item) {
            if (this.checked != item.type)  {
                this.checked = item.type;
                if (item.type == 'awardYes' || item.type == 'awardNo') {
                    this.iframeConentObj.$router.replace('/luckDraw')
                    this.h5Store.commit('set_luckDrawPopupAwardFalg', true);
                    this.h5Store.commit('set_luckDrawPopupAwardType', item.data);
                }else {
                    this.h5Store.commit('set_luckDrawPopupAwardFalg', false);
                    this.iframeConentObj.$router.replace(`/${item.data}`)
                }
            }
        },
        tabClick(item) {
            this.currentTab = item.component;
        },
        saveView() {
            console.log(this.editData);
        }
    },
    components: {
        editHeader,
        baseSet,
        templateSet,
        sendSet,
        prizeSet,
    },
    created() {
        this.set_headerType('2');
        this.$nextTick(()=> {
            let that = this;
            this.$refs.iframeConent.onload = function () {
                that.iframeConentObj = this.contentWindow.iframeH5Vue;
                that.h5Store = this.contentWindow.h5Store;
                console.log(that);
            }
        })
    }
}
</script>

<style scoped>
@import '../../assets/css/edit.scss';

</style>
