<template>
<div id="gameTypeSetting" class="settingBox scrollBox" style="display: block;">
    <div class="gameTypeTips ng-binding">
        当前选择：抽奖派发<span class="tipsColor ng-binding">（活动发布后将无法修改）</span>
    </div>
    <p class="underLineWay">
        <span class="fontWeight ng-binding">抽奖限制</span>
    </p>
    <div id="drawSetBox" class="subTabsettingBox">
        <div id="drawInfoBox">
           <div id="drawTimesSettingBox" class="ng-scope">
                <div class="settingLine" id="totalDrawTimes">
                    <div class="leftTitle">
                        <span class="name ng-binding">总抽奖机会：</span>
                    </div>
                    <div class="content flex-1">
                        <div class="main">
                            <input type="radio" id="noLimitDrawTimes" v-model="editData.bizData.lotteryInfo.totalLimit" :value="-1" name="isLimitDrawTimes">
                            <label for="noLimitDrawTimes">不限</label>
                            <input type="radio" :class="{'idChecked': test}" id="limitDrawTimes" v-model="editData.bizData.lotteryInfo.totalLimit" :value="1" name="isLimitDrawTimes">
                            <label for="limitDrawTimes">限制</label>
                            <span class="afterRadio" v-if="editData.bizData.lotteryInfo.totalLimit != -1">每人最多有
                                <input max="99" min="1" v-model="editData.bizData.lotteryInfo.totalLimit" class="input onlyNum minInput" type="number">次</span>
                        </div>
                    </div>
                </div>
               <div class="settingLine ng-scope" id="dayDrawTimes">
                    <div class="leftTitle">
                        <span class="name ng-binding">每日抽奖机会：</span>
                    </div>
                    <div class="content flex-1">
                        <div class="main ng-binding">每人每日有<input id="drawTimesLimit" v-model="editData.bizData.lotteryInfo.dailyLimit" maxlength="2" class="input onlyNum minInput" type="number">次抽奖机会</div>
                    </div>
                </div>
            </div>
            <p class="underLineWay ng-scope">
                <span class="fontWeight">中奖率</span>
            </p>
            <div id="prizedTotalBox" class="ng-scope">
                <div class="settingLine">
                    <div class="leftTitle">
                        <span class="name">每人中奖次数：</span>
                    </div>
                    <div class="content flex-1">
                        <div class="main">每人最多可中奖<input v-model="editData.bizData.lotteryInfo.winLimit" maxlength="2" class="input onlyNum minInput" type="number">次</div>
                    </div>
                </div>
            </div>
            <div>
                <div class="settingLine">
                    <div class="leftTitle">
                        <span class="name">总中奖率：</span>
                    </div>
                    <div class="content flex-1">
                        <div class="main">
                            <input v-model="editData.bizData.lotteryInfo.totalWinLimit" class="input onlyNum minInput" type="number">%
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="settingLine" ng-show="game.gameType == 0">
            <div class="leftTitle">
                <span class="name">奖品派完提示：</span>
            </div>
            <div class="content flex-1">
                <div class="main">
                    <input v-model="editData.bizData.lotteryInfo.nogiftNotify" class="activeName input mainInput name" type="text"/>
                </div>
            </div>
            <div class="flag">*</div>
        </div>
    </div>
</div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        name: 'sendSet',
        props: {
            iframeConentObj: {
                type: Object,
                default() {
                    return {
                        
                    }
                }
            },
        },
        data() {
            return {
                editData: window.h5AllData.luckDraw,
                lotteryInfo: window.h5AllData.luckDraw.bizData.lotteryInfo
            }
        },
        computed: {
            // ...mapState([
            //     'editData',
            // ]),
            test() {
                console.log(this.lotteryInfo)
                if (this.lotteryInfo.totalLimit == -1) {
                    return false;
                }else {
                    return true;
                }
            }
        },
        methods: {
           
        },
        created() {
            // this.$set(this.editData.bizData.lotteryInfo, 'totalLimit');
        }
    }
</script>
<style scoped>
@import '../../../assets/css/edit.scss';
</style>
