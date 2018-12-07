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
           <div id="drawTimesSettingBox" ed-if="!hasChooseAccessOnce()" class="ng-scope">
                <div class="settingLine" id="totalDrawTimes">
                    <div class="leftTitle">
                        <span class="name ng-binding">总抽奖机会：</span>
                    </div>
                    <div class="content flex-1">
                        <div class="main"><input type="radio" ng-model="game._flag.f268435456" ng-value="false" id="noLimitDrawTimes" name="isLimitDrawTimes" class="ng-pristine ng-untouched ng-valid" value="false"><label for="noLimitDrawTimes">不限</label><input type="radio" ng-model="game._flag.f268435456" ng-value="true" id="limitDrawTimes" name="isLimitDrawTimes" class="ng-pristine ng-untouched ng-valid" value="true"><label for="limitDrawTimes">限制</label></div>
                    </div>
                </div>
               <div class="settingLine ng-scope" ng-if="!game.$$drawTimes.none" id="dayDrawTimes">
                    <div class="leftTitle">
                        <span class="name ng-binding">每日抽奖机会：</span>
                    </div>
                    <div class="content flex-1">
                        <div class="main ng-binding">每人每日有<input id="drawTimesLimit" ng-model="game._setting.dtl" model-format="int" maxlength="2" class="input onlyNum minInput ng-pristine ng-untouched ng-valid ng-valid-maxlength" type="text">次抽奖机会</div>
                    </div>
                </div>
            </div>
            <p class="underLineWay ng-scope" ng-if="true ">
                <span class="fontWeight">中奖率</span>
            </p>
            <div id="prizedTotalBox" ed-if="game.gameType == 0 || game.gameType == 4" class="ng-scope">
                <div class="settingLine">
                    <div class="leftTitle">
                        <span class="name">每人中奖次数：</span>
                    </div>
                    <div class="content flex-1">
                        <div class="main">每人最多可中奖<input id="awardTimesLimit" ng-model="game._setting.awardTimesLimit" model-format="int" maxlength="2" class="input onlyNum minInput ng-pristine ng-untouched ng-valid ng-valid-maxlength" type="text">次</div>
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
                            <input id="winningRate" model-format="float" class="input onlyNum minInput ng-pristine ng-untouched ng-valid" type="text">%
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
                    <input type="radio" id="closeNoAwardTips" name="awardTips" class="ng-pristine ng-untouched ng-valid" value="false">
                    <label for="closeNoAwardTips">显示没中奖</label>
                    <input type="radio" id="openNoAwardTips" name="awardTips" class="ng-pristine ng-untouched ng-valid" value="true">
                    <label for="openNoAwardTips">提示已派完</label></div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'sendSet'
    }
</script>
<style scoped>
@import '../../../assets/css/edit.scss';
</style>
