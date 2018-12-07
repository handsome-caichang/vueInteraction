<template>
    <div id="awardsSetting" class="settingBox ng-scope" style="display: block;">
        <div id="awardBoxTitleWarp">
            <div id="awardBoxTitle">                     
                <div class="awardNums commBg">
                    <span class="topAwardExplain text">请设置活动需要派发的奖项</span>
                    <div class="comfortCheckbox">
                        <input type="checkbox" id="comfortSetting" class="ng-untouched ng-valid ng-dirty ng-valid-parse">
                        <label for="comfortSetting" style="margin: 0px;">设置安慰奖</label>
                    </div>
                </div>
                <div class="awardLevelBox">
                    <div class="commTabBox">
                        <div class="commTab awardLevelItem norLevelItem ng-scope checked">
                            <span class="commTabName awardItemName ng-binding">奖项一</span>
                            <div class="awardErrDot"></div>
                        </div>
                    </div>
                    <div class="awardNumOptBox">
                        <div id="delAwardNum" class="awardNumOpt pointer delAwardNum disabled"></div>
                        <div id="addAwardNum" class="awardNumOpt pointer addAwardNum"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 奖项 -->
        <div id="awardBox" class="scrollBox awardBox relative">
            <div id="awardBoxTitle_holder"></div>
             <div id="awardDetail" class="awardDetail" style="overflow: visible;">
                 <!-- 奖项一 -->
                <div class="awardSettingBox ng-scope" style="left: 0px; display: block;">
                    <p class="underLineWay">
                        <span class="fontWeight ng-binding">基本选项 · 奖项一</span>
                    </p>

                    <div class="settingLine ng-scope">
                        <div class="leftTitle">
                            <span class="name">奖项等级名称：</span>
                        </div>
                        <div class="content flex-1">
                            <div class="main">
                                <input class="awardStyle input mainInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>
                        </div>
                        <div class="flag">*</div>
                    </div>

                    <div class="awardDescribeBox settingLine">
                        <div class="leftTitle">
                            <span class="name ng-binding">奖项名称：</span>
                        </div>
                        <div class="content flex-1">
                           <div class="main ng-scope">
                               <input class="awardDescribe input mainInput ng-pristine ng-untouched ng-valid" type="text">
                               <div class="tipsColor ERR_lock ERR_lock_strict" style="display: block;">
                                   已生成订单的商品名称不会受修改的影响
                                </div>
                            </div>
                        </div>
                        <div class="flag">*</div>
                    </div>

                    <div class="awardDescribeBox settingLine">
                        <div class="leftTitle">
                            <span class="name ng-binding">奖项数量：</span>
                        </div>
                        <div class="content flex-1">
                           <div class="main ng-scope">
                               <input class="awardDescribe input mainInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>
                        </div>
                        <div class="flag">*</div>
                    </div>
                </div>
                
                <div class="awardSettingBox ng-scope" style="left: 0px; display: block;">
                    <p class="underLineWay">
                        <span class="fontWeight ng-binding">兑奖选项 · 奖项一</span>
                    </p>

                    <div class="setAwardOptInfoBox settingLine">
                        <div class="leftTitle">
                            <span class="name">操作提示：</span>
                        </div>
                        <div class="content flex-1">
                            <div class="main">
                                <input class="awardOptInfo input mainInput" type="text">
                            </div>
                        </div>
                        <div class="flag">*</div>
                    </div>

                    <div class="setAwardOptInfoBox settingLine">
                        <div class="leftTitle">
                            <span class="name">兑奖地址：</span>
                        </div>
                        <div class="content flex-1">
                            <div class="main">
                                <input class="awardOptInfo input mainInput" type="text">
                            </div>
                        </div>
                        <div class="flag">*</div>
                    </div>

                    <div class="setAwardOptInfoBox settingLine">
                        <div class="leftTitle">
                            <span class="name">联系电话：</span>
                        </div>
                        <div class="content flex-1">
                            <div class="main">
                                <input class="awardOptInfo input mainInput" type="text">
                            </div>
                        </div>
                        <div class="flag">*</div>
                    </div>

                     <div class="setCodeTimeBox settingLine" ed-hide="award.$type.isJZcoupon">
                    <div class="leftTitle">
                        <span class="name ng-binding">兑奖期限：</span>
                    </div>

                    <div class="content flex-1">
                        <div class="codeTimeBox">
                            <div id="timeRangeBox0" class="timeRangeBox flex">
                                <input class="flex-1 useCodeBeginTime input pointer wxCardInput hasDatepicker" readonly="" type="text" value="2018-12-07 00:00:00" >
                                <span class="mid">至</span>
                                <input class="flex-1 useCodeEndTime input pointer wxCardInput hasDatepicker" readonly="" type="text" value="2018-12-14 23:59:59" >
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'prizeSet'
    }
</script>
<style scoped>
@import '../../../assets/css/edit.scss';
</style>
