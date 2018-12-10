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
                                <div class="actName" ng-bind="game.name">参与活动赢大奖</div>
                            </div>
                            <div class="gameContent">
                                <iframe src="http://localhost:8081"
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
                        <component class="component" :is="currentTabComponent">
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
            this.checked = item.type;
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
        this.set_headerType('2')
    }
}
</script>

<style scoped>
@import '../../assets/css/edit.scss';

</style>
