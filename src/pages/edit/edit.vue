<template>
<div class="version3">
    <div id="editActContainer" ng-app="editActive" class="container editActContainer">
        <edit-header></edit-header>
        <div id="editActiveWarp">
            <div id="editActive" class="editActBox flex">
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
                                <div id="actName" class="actName" ng-bind="game.name">参与活动赢大奖</div>
                            </div>
                            <div id="gameContent">
                                <iframe id="gamePreviewPage" src="http://localhost:8080"
                                        frameborder="0" scrolling="no" style="width:100%;height:100%;"></iframe>
                            </div>
                            <div id='moduleLayerBox' class="moduleLayer"></div>
                        </div>
                        <div class="rightBar">
                            <div class="changePageBox">
                                <div class="changePage prev">
                                    <div class="img"></div>
                                </div>
                                <div class="currentPage">1/1</div>
                                <div class="changePage next">
                                    <div class="img"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="editContent isOpenActiveABTest flex-1" ng-class="game.$newEditSet">
                    <div id="activeTab" class="commTabBox flex">
                        <!-- ngRepeat: tabInfo in ::game.$tabSetting.tabs.list -->
                        <div class="tabSetting commTab flex-1 ng-scope checked" ng-repeat="tabInfo in ::game.$tabSetting.tabs.list" option="0" ng-click="game.$tabSetting.select(tabInfo.val,true);" ng-class="{checked:tabInfo.val==game.$tabSetting.val}">
                            <span class="commTabName tabSettingName ng-binding" ng-bind="tabInfo.name">基础设置</span>
                            <div class="awardErrDot"></div>
                        </div><!-- end ngRepeat: tabInfo in ::game.$tabSetting.tabs.list -->
                        <div class="tabSetting commTab flex-1 ng-scope" ng-repeat="tabInfo in ::game.$tabSetting.tabs.list" option="4" ng-click="game.$tabSetting.select(tabInfo.val,true);" ng-class="{checked:tabInfo.val==game.$tabSetting.val}">
                            <span class="commTabName tabSettingName ng-binding" ng-bind="tabInfo.name">拼团设置</span>
                            <div class="awardErrDot"></div>
                        </div><!-- end ngRepeat: tabInfo in ::game.$tabSetting.tabs.list -->
                        <div class="tabSetting commTab flex-1 ng-scope" ng-repeat="tabInfo in ::game.$tabSetting.tabs.list" option="1" ng-click="game.$tabSetting.select(tabInfo.val,true);" ng-class="{checked:tabInfo.val==game.$tabSetting.val}">
                            <span class="commTabName tabSettingName ng-binding" ng-bind="tabInfo.name">商品设置</span>
                            <div class="awardErrDot"></div>
                        </div><!-- end ngRepeat: tabInfo in ::game.$tabSetting.tabs.list -->
                        <div class="tabSetting commTab flex-1 ng-scope" ng-repeat="tabInfo in ::game.$tabSetting.tabs.list" option="3" ng-click="game.$tabSetting.select(tabInfo.val,true);" ng-class="{checked:tabInfo.val==game.$tabSetting.val}">
                            <span class="commTabName tabSettingName ng-binding" ng-bind="tabInfo.name">高级设置</span>
                            <div class="awardErrDot"></div>
                        </div><!-- end ngRepeat: tabInfo in ::game.$tabSetting.tabs.list -->
                    </div>
                    <div class="editDetail">
                        <div id="baseSetting" class="settingBox scrollBox" option="0">
                            <p class="underLineWay">
                                <span class="fontWeight">基本选项</span>
                            </p>
                            <div id="actNameSetting" class="settingLine">
                                <div class="leftTitle">
                                    <span class="name">活动标题：</span>
                                </div>
                                <div class="content flex-1">
                                    <div class="main"><input id="name" class="activeName input mainInput" type="text"
                                                name="activeName" ng-model="game.name" ed-check-sensit-word /><span class="openTipsIcon"></span></div>
                                    <div class="other actNameTipsLine">
                                        <div class="actNameTipsBox animation_Box">
                                            <div class="actNameTipsTitle">
                                                <div class="titleTips">推荐标题</div>
                                                <div class="closeTips">关闭</div>
                                            </div>
                                            <div class="actNameTips" ng-repeat="info in ::game.templateName">
                                                <div class="actNameTipsIcon"></div>
                                                <div class="actNameTipsText" ng-bind-html="info|to_trusted"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flag">*</div>
                            </div>
                            <!-- <div id="setGameTimeBox" class="settingLine">
                                <div class="leftTitle">
                                    <span class="name">活动时间：</span>
                                </div>
                                <div class="content flex-1">
                                    <div class="main flex">
                                        <input id="beginTime" class="input flex-1" type="text" name="beginTime"
                                                readonly style="cursor:pointer" value="2018-11-21 09:38" />
                                        <span class="mid">至</span>
                                        <input id="endTime" name="endTime" class="input flex-1" type="text"
                                                readonly style="cursor:pointer" value="2018-11-28 09:38" />
                                    </div>
                                </div>
                                <div class="flag">*</div>
                            </div>
                            <div id="setLimitJoinNumBox" class="">
                                <div id="joinNumBox" class="settingLine">
                                    <div class="leftTitle">
                                        <span class="name">参与人数：</span>
                                        <span class="hoverContentBox">
                                            <p class="content">在活动首页{{game._flag.f2?'':'不'}}显示已有多少人参与{{game._flag.f2?'，且显示人数为实际人数与虚拟人数之和':''}}</p>
                                            <span class="target hoverIcon"></span>
                                        </span>
                                    </div>
                                    <div class="content flex-1">
                                        <div class="main">
                                            <input id="hideJoinNum" ng-model="game._flag.f2" ng-value=false type="radio"
                                                name="isShowJoinNum" /><label for="hideJoinNum">隐藏</label>
                                            <input id="showJoinNum" ng-model="game._flag.f2" ng-value=true type="radio"
                                                name="isShowJoinNum" /><label for="showJoinNum">展示</label>
                                        </div>
                                        <div class="other virtualLine" ed-show="game._flag.f2">
                                            <div>在实际参与人数基础上增加<input type="text" id="virtualJoinNum" ng-model="game._setting.vjn"
                                                    model-format="int" maxlength="6" class="input onlyNum minInput" />人
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="settingLine verTipsBox" ng-cloak>
                                    <div class="leftTitle">
                                        <span class="powerIcon ver_biz flag"></span><span class="name">{{[71,84].contains(game.style)
                                        ? "建团数量限制：" : (game.$isOem ? (game.gameType == 1 ? "报名人数限制：" : "参与人数限制：")
                                        : "参与人数限制：")}}</span>
                                        <span class="hoverContentBox">

                                        <span class="target hoverIcon"></span>
                                        </span>
                                    </div>
                                    <div class="content flex-1">
                                        <div class="main" prompt-Pay="joinLimit">
                                            <input _strict="true" id="noLimitNum" ng-model="game._setting.isLimitPTzfGroupNum"
                                            ng-value=false type="radio" name="isLimitNum" ed-ver=2 /><label for="noLimitNum">不限</label>
                                            <input id="LimitNum" ng-model="game._setting.isLimitPTzfGroupNum" ng-value=true
                                            type="radio" name="isLimitNum" /><label for="LimitNum">限制</label>
                                            <span id="limitNumBox" class="afterRadio" ed-if="game._setting.isLimitPTzfGroupNum">
                                            {{[71,84].contains(game.style) ? "最多创建": ""}}<input type="text" id="theLimitNum"
                                                maxlength="6" ng-model="game._setting.ptzfGroupNum" model-format="int"
                                                ng-blur="game.$joinNumBlur('ptzfGroupNum')" ng-class="{firstMinInput: !([71,84].contains(game.style))}"
                                                class="input onlyNum minInput" />{{[71,84].contains(game.style) ?
                                            "个团" : (game.$isOem ? (game.gameType == 1 ? "人报名" : "人参与") : "人参与")}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="attentionBefore" class="verTipsBox settingLine">
                                <div class="leftTitle flex-v">
                                    <div class="nameWrap">
                                        <span class="powerIcon ver_biz flag"></span><span class="name">强制关注：</span>
                                        <span class="hoverContentBox">
                                            <span ng-if="game._flagB.f512">
                                            <p class="content">开启后有被微信封停公众号的风险，请慎用！</p>
                                            </span>
                                            <p class='content'>请先到个人中心开通强制关注功能<a href="http://hd.fkw.com/news/5249" target="_blank" class="aTips knowMore">详细教程</a></p>
                                            <span class="target hoverIcon quort"></span>
                                        </span>
                                    </div>
                                </div>
                                <div class="content flex-1">
                                    <div class="main" prompt-pay="fansOnly">
                                        <input disabled type="radio" id="openFansOnly" name="forFansOnly" ng-model="game._flagB.f512"
                                        ng-value=true ed-ver=2 /><label for="openFansOnly" _info="强制关注">开启</label>
                                        <input type="radio" id="closeFansOnly" name="forFansOnly" ng-model="game._flagB.f512"
                                        ng-value=false /><label for="closeFansOnly">关闭</label>
                                    </div>
                                </div>
                            </div>
                            <div id="paymentGameData" ed-watch="::{payData:game._setting.payData}">
                            <div class="settingLine">
                                <div class="leftTitle">
                                    <span class="name">商家地址：</span>
                                </div>
                                <div class="content flex-1">
                                    <div class="main"><input class="site input mainInput" type="text" ng-model="payData.site"
                                    ed-check-sensit-word />
                                    </div>
                                </div>
                                <div class="flag">*</div>
                            </div>
                            <div class="settingLine">
                                <div class="leftTitle">
                                    <span class="name">客服电话：</span>
                                </div>
                                <div class="content flex-1">
                                    <div class="main"><input class="tel input mainInput" type="text" ng-model="payData.tel" /></div>
                                    </div>
                                    <div class="flag">*</div>
                                </div>
                                <div class="settingLine">
                                    <div class="leftTitle">
                                        <span class="name">客服微信：</span>
                                    </div>
                                    <div class="content flex-1">
                                        <div class="main">
                                            <input class="wx input mainInput" type="text" ng-model="payData.wx" ed-check-sensit-word />
                                        </div>
                                    </div>
                                </div>
                                <div class="settingLine">
                                    <div class="leftTitle">
                                        <span class="name">客服QQ：</span>
                                    </div>
                                    <div class="content flex-1">
                                        <div class="main">
                                            <input class="qq input mainInput" type="text" ng-model="payData.qq" ed-check-sensit-word />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="seniorSetBox transiton300ms">
                                <div class="seniorSetBoxOption underLineWay" ng-click="game.$setBaseBoxStatus('$base_hight_set')">
                                    <span class="fontWeight">高级选项</span>
                                    <div class="baseSeniorSet" ng-cloak>
                                        <span>{{ game.$base_hight_set ? "点击收起" : "更多设置" }}</span>
                                        <span class='roteteArrow transiton300ms {{ game.$base_hight_set ? "" : "rotate180" }}'></span>
                                    </div>
                                </div>
                                <div ng-show='game.$base_hight_set' class='seniorBoxInfo transiton300ms {{ game.$base_hight_set ? "" : "seniorBoxInfoClose" }}'>
                                    <div class="settingLine verTipsBox">
                                        <div class="leftTitle">
                                            <span class="powerIcon ver_biz flag"></span><span class="name">首屏广告：</span>
                                        </div>
                                        <div class="content flex-1">
                                            <div class="main" prompt-pay="bannerSwiper">
                                                <input type="radio" id="closeAdvertising" name="forAdvertising" ng-model="game._flagB.f1048576" ng-value=false /><label for="closeAdvertising">隐藏</label>
                                                <input type="radio" id="openAdvertising" name="forAdvertising" ng-model="game._flagB.f1048576" ng-value=true ed-ver=2 /><label for="openAdvertising">显示</label>
                                                <a class="aTips afterRadio" ng-show="game._flagB.f1048576" href="javascript:;" onclick="Edit.triggerEditBtn('.advertisingBox','广告页设置')">查看设置</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="areaLimitBox" class="settingLine verTipsBox">
                                        <div class="leftTitle">
                                            <span class="powerIcon ver_by flag"></span><span class="name">可参与地区：</span>
                                            <span class="hoverContentBox">
                                                <p class="content">根据微信地理位置（基于GPS）判断玩家所在地区是否在可参与地区中</p>
                                                <span class="target hoverIcon"></span>
                                            </span>
                                        </div>
                                        <div class="content flex-1">
                                            <div class="main" prompt-pay="areaLimit">
                                                <input type="radio" ng-model="game._flagB.f64" ng-value=false id="allArea" name="openAreaLimit" /><label for="allArea">全部</label>
                                                <input type="radio" ng-model="game._flagB.f64" ng-value=true id="someArea" name="openAreaLimit" ed-ver=1 /><label for="someArea">部分</label>
                                                <a class="aTips afterRadio" href="javascript:;" onclick="Edit.showFaiArea(this,'game._setting.areaLimitList')" ng-show="game._flagB.f64">查看设置</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="accessKey" class="settingLine verTipsBox accessKeyBox">
                                        <div class="leftTitle">
                                            <span class="powerIcon ver_biz flag"></span><span class="name">访问密钥：</span>
                                        </div>
                                        <div class="content flex-1">
                                            <div class="main" prompt-pay="interview">
                                                <input id="closeAccessKey" type="radio" name="isUsualKey" ng-model="game._flagC.f2048" ng-value=false /><label for="closeAccessKey">关闭</label>
                                                <input id="openAccessKey" type="radio" name="isUsualKey" ng-model="game._flagC.f2048" ng-value=true ed-ver=2 /><label for="openAccessKey" _info="访问密钥" _src1=0 _src2=24>开启</label>
                                                <a class="aTips afterRadio" href="javascript:;" onclick="Edit.showAccessKeyBox(this)" ng-show="game._flagC.f2048">查看设置</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="activeExplainWarp" class="settingLine">
                                        <div class="leftTitle">
                                            <span class="name">活动说明：</span>
                                        </div>
                                        <div class="content flex-1">
                                            <div class="main">
                                                <textarea id="activeExplain" ng-model="game._setting.ep" ed-check-sensit-word ng-trim="false" class="input scrollBox commTextarea"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="attention_item">注：该游戏属于助力型活动，容易触犯微信朋友圈的管理规则，分享人数过大时容易被微信拉黑朋友圈仅自己可见，请慎用！</div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { leftList } from './edit.js'
import editHeader from './compoent/header'
export default {
    name: 'editHaeder',
    data() {
        return {
            leftList,
            checked: 'home'
        }
    },
    methods: {
        checkLeft(item) {
            this.checked = item.type;
        }
    },
    components: {
        editHeader
    }
}
</script>

<style scoped>
@import '../../assets/css/edit.scss';
@import '../../assets/css/version.scss';
.version3 {
    height: 100%;
}
.flex-1 {
    flex: 1;
}
</style>
