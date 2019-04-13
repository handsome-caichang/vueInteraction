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
           <div id="drawTimesSettingBox" class="">
                <div class="settingLine">
                    <div class="leftTitle">
                        <span class="name ng-binding">总抽奖机会：</span>
                    </div>
                    <div class="content flex-1">
                        <div class="main">
                            <input type="radio" id="noLimitDrawTimes" v-model="editData.lotteryInfo.totalLimit" :value="-1" name="isLimitDrawTimes">
                            <label for="noLimitDrawTimes">不限</label>
                            <input type="radio" :class="{'idChecked': test}" id="limitDrawTimes" v-model="editData.lotteryInfo.totalLimit" :value="1" name="isLimitDrawTimes">
                            <label for="limitDrawTimes">限制</label>
                            <span class="afterRadio" v-if="editData.lotteryInfo.totalLimit != -1">每人最多有
                                <input max="99" min="1" v-model="editData.lotteryInfo.totalLimit" class="input onlyNum minInput" type="number">次</span>
                        </div>
                    </div>
                </div>
                <div class="settingLine">
                    <div class="leftTitle">
                        <span class="name ng-binding">每日抽奖机会：</span>
                    </div>
                    <div class="content flex-1">
                        <div class="main ng-binding">每人每日有<input id="drawTimesLimit" v-model="editData.lotteryInfo.dailyLimit" maxlength="2" class="input onlyNum minInput" type="number">次抽奖机会</div>
                    </div>
                </div>
                <div class="settingLine ">
                    <div class="leftTitle">
                        <span class="name ng-binding">联系信息：</span>
                    </div>
                    <div class="content flex-1">
                        <div class="main" >
                            <input id="contactType0" :class="{'idChecked': editData.lotteryInfo.contactType == 0}" v-model="editData.lotteryInfo.contactType" :value="0" type="radio" name="shar"/><label for="contactType0">关闭</label>
                            <input id="contactType1" :class="{'idChecked': editData.lotteryInfo.contactType == 1}" v-model="editData.lotteryInfo.contactType" :value="1" type="radio" name="shar" /><label for="contactType1">参与前填写</label>
                            <input id="contactType2" :class="{'idChecked': editData.lotteryInfo.contactType == 2}" v-model="editData.lotteryInfo.contactType" :value="2" type="radio" name="shar" /><label for="contactType2">中奖后填写</label>
                            <span>（ 姓名、联系电话、联系地址 ）</span>
                        </div>
                    </div>
                </div>
            </div>
            <p class="underLineWay">
                <span class="fontWeight">中奖率</span>
            </p>
            <div id="prizedTotalBox" class="">
                <div class="settingLine">
                    <div class="leftTitle">
                        <span class="name">每人中奖次数：</span>
                    </div>
                    <div class="content flex-1">
                        <div class="main">每人最多可中奖<input v-model="editData.lotteryInfo.winLimit" maxlength="2" class="input onlyNum minInput" type="number">次</div>
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
                            <input v-model="editData.lotteryInfo.totalWinPrecent" class="input onlyNum minInput" type="number">%
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
                    <input v-model="editData.lotteryInfo.noGiftNotify" class="activeName input mainInput name" type="text"/>
                </div>
            </div>
            <!-- <div class="flag">*</div> -->
        </div>
    </div>
</div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        name: 'sendSet',
        props: {
        },
        data() {
            return {
                editData: window.h5AllData.luckDraw,
                lotteryInfo: window.h5AllData.luckDraw.lotteryInfo
            }
        },
        computed: {
            test() {
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
        }
    }
</script>
<style scoped>
@import '../../../assets/css/edit.scss';
</style>
