<template>
<div class="version3">
    <div class="container editActContainer">
        <edit-header @saveView="saveView" @close="close"></edit-header>
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
                                <div class="actName" >{{baseInfo.name}}</div>
                            </div>
                            <div class="gameContent" ref="iframeBox">
                                <!-- <iframe ref="iframeConent" :src='iframeSrc' frameborder="0" scrolling="no" style="width:100%;height:100%;"></iframe> -->
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
                    <div class="editDetail" v-if="iframeLodingEnd">
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
import editHeader from './compoent/header'
import baseSet from './compoent/baseSet'
import prizeSet from './compoent/prizeSet'
import sendSet from './compoent/sendSet'
import templateSet from './compoent/templateSet'
import {mapMutations, mapState} from 'vuex'
import {getTemplateDetail, createTemplate,getEditTemplateDetail,updateLotteryActivity} from 'pcApi/jie.js'
export default {
    name: 'editHaeder',
    data() {
        return {
            checked: 'baseSet',
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
            baseInfo: {
                name: ''
            },
            editData: {},
             leftList: [
                {
                name: "首页",
                type: "baseSet",
                data: "luckDraw"
                },
                {
                name: "奖品详情",
                type: "prizeSet",
                data: "awardDetail/test"
                },
                {
                name: "中奖页面",
                type: "awardYes",
                data: "2"
                },
                {
                name: "没中奖页",
                type: "awardNo",
                data: "1"
                }
            ],
            iframeLodingEnd: false,
            iframeSrc: '',
            iframeHtml: '',
            resData: {},
            isEdit: true,
        }
    },
    computed: {
        currentTabComponent() {
            return this.currentTab
        },
    },
    beforeRouteEnter (to, from, next) {
        if (to.query.name == 'add') {
             getTemplateDetail({
                id: to.params.id
            }).then(res => {
                if (res.errorCode == 0) {
                    next(vm => vm.setData(res.data));
                }else {
                    alert(res.errorMessage)
                }
            })
        }else {
            getEditTemplateDetail({
                id: to.params.id
            }).then(res => {
                if (res.errorCode == 0) {
                    next(vm => vm.setData(res.data));
                }else {
                    alert(res.errorMessage)
                }
            })
        }
        
    },
    methods: {
        ...mapMutations([
            'set_headerType'
        ]),
        checkLeft(item) {
            if (this.checked != item.type)  {
                this.checked = item.type;
                if (item.type == 'awardYes' || item.type == 'awardNo') {
                    if (item.type == 'awardYes') {
                        window.h5AllData.awardDetail =  this.editData.gifts[0];
                    }
                    this.iframeConentObj.$router.replace('/luckDraw')
                    this.h5Store.commit('set_luckDrawPopupAwardFalg', true);
                    this.h5Store.commit('set_luckDrawPopupAwardType', item.data);
                }else {
                    this.currentTab = this.checked;
                    this.h5Store.commit('set_luckDrawPopupAwardFalg', false);
                    this.iframeConentObj.$router.replace(`/${item.data}`)
                }
            }
        },
        tabClick(item) {
            this.currentTab = item.component;
        },
        saveView() {
            let createdData = app.tool.clone(window.h5AllData.luckDraw);
            createdData.h5Data = JSON.stringify(createdData.h5Data);
            if (!this.isEdit) {
                createdData.templateID = this.$route.params.id;
                createTemplate(createdData).then(res => {
                    console.log(res)
                    if (res.errorCode == 0) {
                        this.$router.replace('/home');
                    }
                })
            }else {
                updateLotteryActivity(createdData).then(res => {
                    console.log(res)
                    if (res.errorCode == 0) {
                        this.$router.replace('/home');
                    }
                })
            }
        },
        close() {
            let flag = window.confirm('系统可能不会保存您所做的更改。');
            if (flag) {
                this.$router.replace('/home')
            }
        },
        setData(res) {
            res.lotteryActivityInfo.baseInfo.url = res.lotteryActivityInfo.baseInfo.url.replace(/^\s+|\s+$/gm,'');
            // this.iframeSrc = res.lotteryActivityInfo.baseInfo.url+'?edit=1&templateId='+this.$route.params.id;
            this.iframeSrc = 'http://192.168.0.185:8080/h5'+'/index.html#/luckDraw?edit=1&id='+this.$route.params.id;
            this.resData = res.lotteryActivityInfo;
            this.editData = res.lotteryActivityInfo;
            this.baseInfo = this.editData.baseInfo;
            this.resData.h5Data = JSON.parse(this.resData.h5Data);
            let iframe = document.createElement('iframe'); 
            iframe.src = this.iframeSrc;
            iframe.scrolling="no";
            iframe.style.width="100%";
            iframe.style.height="100%";
            iframe.style.border="none";
            this.$refs.iframeBox.append(iframe);
            this.$nextTick(()=> {
                let that = this;
                iframe.onload = function () {
                    that.iframeConentObj = this.contentWindow.iframeH5Vue;
                    that.h5Store = this.contentWindow.h5Store;
                    window.h5AllData = this.contentWindow.h5AllData;
                    for (const key in that.resData) {
                        if (that.resData.hasOwnProperty(key)) {
                            if (key !== 'gifts') {
                                window.h5AllData.luckDraw[key] = that.resData[key];
                            }else {
                                window.h5AllData.luckDraw[key].splice(0, window.h5AllData.luckDraw[key].length, ...that.resData[key]);
                            }
                        }
                    }
                    that.iframeLodingEnd = true;
                }
            })
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
        if (this.$route.query.name == 'add') {
            this.isEdit = false;
        }else {
            this.isEdit = true;
        }
    }
}
</script>

<style scoped>
@import '../../assets/css/edit.scss';

</style>
