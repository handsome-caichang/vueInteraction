<template>
<div class="container gameDataContainer">
    <div class="activityListTitle">
        <span class="icon"></span><a href="javascript:;" @click="goBack">我的活动</a>/<span class="name">获奖名单</span>
    </div>
    <div class="activeTabMenu">
        <div class="menu" :class="{'checked': currTab}" @click="currTab = true">获奖名单</div>
        <div class="menu" :class="{'checked': !currTab}" @click="currTab = false">玩家列表</div>
    </div>
    <div v-show="currTab" class="tableContent">
        <div class="showActiveTable" style="min-width: 1000px;">
            <div class="faiTableWrap">
                <div class="center">
                    <table class="faiTable" cellpadding="0" cellspacing="0">
                        <thead>
                            <tr class="scrollFixedTr">
                                <th data-key="awardinfo" class="textCenter columnPer10 sep">
                                    <div class="padding">中奖玩家</div>
                                </th>
                                <th data-key="awardLevel" class="column textCenter columnPer10 sep">
                                    <div class="padding">奖项等级</div>
                                </th>
                                <th data-key="award" class="textCenter columnPer10 sep">
                                    <div class="padding">奖品</div>
                                </th>
                                <th data-key="awardTime" class="column7 textCenter columnPer15 awardTime sep">
                                    <div class="padding">中奖时间</div>
                                </th>
                                <th data-key="codeStatus" class="column7 textCenter columnPer10 sep dropDown pointer">
                                    <div class="padding">卡券状态</div>
									<!-- <span class="icon"></span> -->
                                    <!-- <div class="faiTable_poupBox dropDownBox_sub hide" style="display: none;">
                                        <div class="optionsWarp">
                                            <div class="options primary" _index="0">卡券状态</div>
                                            <div class="options" _index="1">未核销</div>
                                            <div class="options" _index="2">已核销</div>
                                            <div class="options" _index="3">无需核销</div>
                                            <div class="options" _index="4">已过期</div>
                                            <div class="options" _index="5">已失效</div>
                                            <div class="options" _index="6">已作废</div>
                                        </div>
                                    </div> -->
                                </th>
                                <th data-key="ausername" class="textCenter columnPer10 sep">
                                    <div class="padding">姓名</div>
                                </th>
                                <th data-key="aphone" class="textCenter columnPer10 sep">
                                    <div class="padding">联系电话</div>
                                </th>
                                <th data-key="aadress" class="textCenter columnPer15 sep hide">
                                    <div class="padding">联系地址</div>
                                </th>
                                <th data-key="canalName" class="textCenter columnPer15 userAddress sep">
                                    <div class="padding">渠道</div>
                                </th>
                            </tr>
                            <tr class="trClone hide">
                                <th class="checkBoxWidth textCenter sep"><input id="checkboxItem_all" class="checkbox all" type="checkbox" name="checkboxItem_all"><label for="checkboxItem_all"></label></th>
                                <th data-key="awardinfo" class="textCenter columnPer10 sep">
                                    <div class="padding">中奖玩家</div>
                                </th>
                                <th data-key="awardLevel" class="column textCenter columnPer10 sep">
                                    <div class="padding">奖项等级</div>
                                </th>
                                <th data-key="award" class="textCenter columnPer10 sep">
                                    <div class="padding">奖品</div>
                                </th>
                                <th data-key="awardTime" class="column7 textCenter columnPer15 awardTime sep">
                                    <div class="padding">中奖时间</div>
                                </th>
                                <th data-key="codeStatus" class="column7 textCenter columnPer10 sep dropDown pointer">
                                    <div class="padding">卡券状态<span class="icon"></span></div>
                                    <div class="faiTable_poupBox dropDownBox_sub hide" style="display: none;">
                                        <div class="optionsWarp">
                                            <div class="options primary" _index="0">卡券状态</div>
                                            <div class="options" _index="1">未核销</div>
                                            <div class="options" _index="2">已核销</div>
                                            <div class="options" _index="3">无需核销</div>
                                            <div class="options" _index="4">已过期</div>
                                            <div class="options" _index="5">已失效</div>
                                            <div class="options" _index="6">已作废</div>
                                        </div>
                                    </div>
                                </th>
                                <th data-key="ausername" class="textCenter columnPer10 sep">
                                    <div class="padding">姓名</div>
                                </th>
                                <th data-key="aphone" class="textCenter columnPer10 sep">
                                    <div class="padding">联系电话</div>
                                </th>
                                <th data-key="aadress" class="textCenter columnPer15 sep hide">
                                    <div class="padding">联系地址</div>
                                </th>
                                <th data-key="canalName" class="textCenter columnPer15 userAddress sep">
                                    <div class="padding">渠道</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody style="">
                            <tr _index="0" class="odd">
                                <td class="textCenter player awardPlayer ellipsis">
                                    <div class="padding ellipsis tdWrap">
                                        <div class="userPlayer" data-openid="oosnVwlU7XYn-S5VMT1PUt6-SnEY"><img src="http://thirdwx.qlogo.cn/mmopen/vi_32/ic1crFCeE7OGDr5cWOEnItVAhcL8oOeuFp5MSaxepwDFGrziaEIXA3UEqias6Su8FRjTsLX6ehqCb4yvBf8PnY2MA/132"></div>
                                            <p class="wxname">No zuo no die</p>
                                        </div>
                                </td>
                                <td class="textCenter lineHeight ellipsis">
                                    <div class="padding ellipsis tdWrap">
                                        <p>二等奖</p>
                                        <p>一等奖333333</p>
                                    </div>
                                </td>
                                <td class="textCenter lineHeight ellipsis">
                                    <div class="padding ellipsis tdWrap">
                                        <p>价值50元礼品</p>
                                        <p>价值100元礼品</p>
                                    </div>
                                </td>
                                <td class="textCenter awardTime lineHeight ellipsis">
                                    <div class="padding ellipsis tdWrap">
                                        <p>2018-12-12 17:11:52</p>
                                        <p>2018-12-12 17:10:19</p>
                                    </div>
                                </td>
                                <td class="textCenter lineHeight ellipsis">
                                    <div class="padding ellipsis tdWrap">
                                        <p data-code="358612062">未核销</p>
                                        <p data-code="552315062">已过期</p>
                                    </div>
                                </td>
                                <td class="textCenter ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">
                                        <div class=""><span>陈旺</span></div>
                                    </div>
                                </td>
                                <td class="textCenter ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">
                                        <div class=""><span>18374977980</span></div>
                                    </div>
                                </td>
                                <td class="textCenter userAddress ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">
                                        <div class="userAdress">无&nbsp;</div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
                <div class="bottom">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageIndex" :page-sizes="[10, 20, 30, 40]" :page-size="totalCount" layout="total, sizes, prev, pager, next, jumper" :total="totalCount">
                    </el-pagination>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
    <div v-show="!currTab" class="tableContent">
        <div class="showActiveTable" style="min-width: 1000px;">
            <div class="faiTableWrap">
                <div class="center">
                    <table class="faiTable" cellpadding="0" cellspacing="0">
                        <thead>
                            <tr class="scrollFixedTr">
                                <th data-key="headImg" class="columnPer5 textCenter sprizeCol sep">
                                    <div class="padding">玩家头像</div>
                                </th>
                                <th data-key="name" class="columnPer10 textCenter sprizeCol sep">
                                    <div class="padding">玩家昵称</div>
                                </th>
                                <th data-key="awardinfo" class="columnPer10 textCenter prizeLevelName sep">
                                    <div class="padding">获得奖项</div>
                                </th>
                                <th data-key="ausername" class="textCenter columnPer10 sep">
                                    <div class="padding">姓名</div>
                                </th>
                                <th data-key="aphone" class="textCenter columnPer10 sep">
                                    <div class="padding">联系电话</div>
                                </th>
                                <th data-key="aadress" class="textCenter columnPer15 sep hide">
                                    <div class="padding">联系地址</div>
                                </th>
                                <th data-key="firstJoinTime" class="columnPer15 textCenter sprizeCol sep">
                                    <div class="padding">首次参与时间</div>
                                </th>
                                <th data-key="jointime" class="columnPer15 textCenter sprizeCol sep hide">
                                    <div class="padding">最近参与时间</div>
                                </th>
                                <th data-key="canalName" class="columnPer10 textCenter sep">
                                    <div class="padding">渠道</div>
                                </th>
                            </tr>
                            <tr class="trClone hide">
                                <th class="checkBoxWidth textCenter sep"><input id="checkboxItem_all" class="checkbox all" type="checkbox" name="checkboxItem_all"><label for="checkboxItem_all"></label></th>
                                <th data-key="headImg" class="columnPer5 textCenter sprizeCol sep">
                                    <div class="padding">玩家头像</div>
                                </th>
                                <th data-key="name" class="columnPer10 textCenter sprizeCol sep">
                                    <div class="padding">玩家昵称</div>
                                </th>
                                <th data-key="awardinfo" class="columnPer10 textCenter prizeLevelName sep">
                                    <div class="padding">获得奖项</div>
                                </th>
                                <th data-key="ausername" class="textCenter columnPer10 sep">
                                    <div class="padding">姓名</div>
                                </th>
                                <th data-key="aphone" class="textCenter columnPer10 sep">
                                    <div class="padding">联系电话</div>
                                </th>
                                <th data-key="aadress" class="textCenter columnPer15 sep hide">
                                    <div class="padding">联系地址</div>
                                </th>
                                <th data-key="firstJoinTime" class="columnPer15 textCenter sprizeCol sep">
                                    <div class="padding">首次参与时间</div>
                                </th>
                                <th data-key="jointime" class="columnPer15 textCenter sprizeCol sep hide">
                                    <div class="padding">最近参与时间</div>
                                </th>
                                <th data-key="canalName" class="columnPer10 textCenter sep">
                                    <div class="padding">渠道</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="88" class="odd">
                                <td class="textCenter defaultWidth headImg ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">
                                        <div class="userPlayer" _openid="oosnVwlU7XYn-S5VMT1PUt6-SnEY" _ischeat="false"><img src="http://thirdwx.qlogo.cn/mmopen/vi_32/ic1crFCeE7OGDr5cWOEnItVAhcL8oOeuFp5MSaxepwDFGrziaEIXA3UEqias6Su8FRjTsLX6ehqCb4yvBf8PnY2MA/132"></div>
                                        </div>
                                </td>
                                <td class="textCenter defaultWidth ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">No zuo no die</div>
                                </td>
                                <td class="textCenter lineHeight ellipsis">
                                    <div class="padding ellipsis tdWrap">
                                        <p>一等奖333333</p>
                                        <p>二等奖</p>
                                    </div>
                                </td>
                                <td class="textCenter ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">
                                        <div class=""><span>陈旺</span></div>
                                    </div>
                                </td>
                                <td class="textCenter ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">
                                        <div class=""><span>18374977980</span></div>
                                    </div>
                                </td>
                                <td class="textCenter defaultWidth ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">2018-12-12 17:10:19</div>
                                </td>
                                <td class="textCenter defaultWidth userAddress ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">
                                        <div class="userAddress"><span>无</span></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
                <div class="bottom">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageIndex" :page-sizes="[10, 20, 30, 40]" :page-size="totalCount" layout="total, sizes, prev, pager, next, jumper" :total="totalCount">
                    </el-pagination>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    thList,
    tdList
} from '../activeList.js'
export default {
    name: "userLIst",
    props: {
        id: {
            type: String
        }
    },
    data() {
        return {
            currTab: true,
            tdList,
            thList,
            pageIndex: 1,
            pageSize: 10,
            totalCount: 0,
        }
    },
    methods: {
        goBack() {
            this.$emit('toBackGameData', -1)
        },
        handleSizeChange(val) {
            this.pageSize = val;
            // this.initList();
        },
        handleCurrentChange(val) {
            this.pageIndex = val;
            // this.initList();
        },
    },
    created() {

    },
    watch: {
        currTab(newVal) {

        }
    }
};
</script>

<style scoped>
@import "./gameData.scss";
.dropDownBox {
    width: 70px;
}
.faiTableWrap .bottom {
    display: flex;
    align-items: center;
}
.tableContent {
	margin-top: 20px;
}
.gameDataContainer {
    background: none repeat scroll 0 0 #f5f5f5;
    margin-bottom: 68px;
}

.activityListTitle {
    font-size: 16px;
    line-height: 16px;
    padding: 10px 0 20px 15px;
    color: #949494;
}

.activityListTitle a {
    text-decoration: underline;
    color: #585858;
    display: inline-block;
    margin-right: 8px;
}

.activityListTitle .icon {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-top: solid 1px #585858;
    border-left: solid 1px #585858;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    margin-top: -3px;
    vertical-align: middle;
    margin-right: 4px;
}

.activityListTitle .name {
    display: inline-block;
    margin-left: 8px;
}

.columnTitle:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 4px;
    height: 19px;
    background: #329fea;
    margin-right: 8px;
    margin-top: -2px;
}
</style>
