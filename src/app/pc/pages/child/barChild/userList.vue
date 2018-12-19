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
                                <th data-key="awardinfo" class="textCenter columnPer10 sep">
                                    <div class="padding">活动名称</div>
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
                                </th>
                            </tr>
                        </thead>
                        <tbody style="">
                            <tr class="queryIngTr odd"  v-if="tdList.length == 0"><td class="padding" colspan="10">没有数据</td></tr>
                            <tr _index="0" class="odd" v-for="(item, index) in tdList" :key="index">
                                <td class="textCenter player awardPlayer ellipsis">
                                    <div class="padding ellipsis tdWrap">
                                        <div class="userPlayer"><img :src="item.customer.headImageUrl"></div>
                                            <p class="wxname">{{item.customer.nickName}}</p>
                                        </div>
                                </td>
                                <td class="textCenter lineHeight ellipsis">
                                    <div class="padding ellipsis tdWrap">
                                        <p>{{item.activityName}}</p>
                                    </div>
                                </td>
                                <td class="textCenter lineHeight ellipsis">
                                    <div class="padding ellipsis tdWrap">
                                        <p>{{item.gift.levelName}}</p>
                                    </div>
                                </td>
                                <td class="textCenter lineHeight ellipsis">
                                    <div class="padding ellipsis tdWrap">
                                        <p>{{item.gift.name}}</p>
                                    </div>
                                </td>
                                <td class="textCenter awardTime lineHeight ellipsis">
                                    <div class="padding ellipsis tdWrap">
                                        <p>{{item.createTime}}</p>
                                    </div>
                                </td>
                                <td class="textCenter lineHeight ellipsis">
                                    <div class="padding ellipsis tdWrap">
                                        <p v-if="!item.gift.isExpired && item.isVerificated">未核销</p>
                                        <p v-if="item.isVerificated">已核销</p>
                                        <p v-if="item.gift.isExpired" >已过期</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
                <div class="bottom">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageIndex" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalCount">
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
                                <th class="columnPer5 textCenter sprizeCol sep">
                                    <div class="padding">玩家头像</div>
                                </th>
                                <th class="columnPer10 textCenter sprizeCol sep">
                                    <div class="padding">玩家昵称</div>
                                </th>
                                <th  class="textCenter columnPer10 sep">
                                    <div class="padding">性别</div>
                                </th>
                                <th  class="textCenter columnPer10 sep">
                                    <div class="padding">城市</div>
                                </th>
                                <th class="columnPer15 textCenter sprizeCol sep">
                                    <div class="padding">首次参与时间</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="queryIngTr odd"  v-if="userList.length == 0"><td class="padding" colspan="10">没有数据</td></tr>
                            <tr class="odd" v-for="(item,index) in userList" :key="index">
                                <td class="textCenter defaultWidth headImg ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">
                                        <div class="userPlayer">
                                            <img :src="item.customer.headImageUrl">
                                            </div>
                                        </div>
                                </td>
                                <td class="textCenter defaultWidth ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">{{item.customer.nickName}}</div>
                                </td>
                                <td class="textCenter defaultWidth ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">{{item.customer.sex == '1' ? '男' : (item.customer.sex == '2' ? '女': '未知')}}</div>
                                </td>
                                <td class="textCenter defaultWidth ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">{{item.customer.city}}</div>
                                </td>
                                <td class="textCenter defaultWidth ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">{{item.createTime}}</div>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
                <div class="bottom">
                    <el-pagination @size-change="userhandleSizeChange" @current-change="userhandleCurrentChange" :current-page="userPageIndex" :page-sizes="[10, 20, 30, 40]" :page-size="userPageSize" layout="total, sizes, prev, pager, next, jumper" :total="userTotalCount">
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
} from '../activeList.js'
import {getWinLotteryRecord,getCustomer} from 'pcApi/jie.js'
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
            tdList: [],
            thList,
            pageIndex: 1,
            pageSize: 10,
            totalCount: 0,
            userList: [
            ],
            userPageIndex: 1,
            userPageSize: 10,
            userTotalCount: 0
        }
    },
    methods: {
        goBack() {
            this.$emit('toBackGameData', -1)
        },
        handleSizeChange(val) {
            this.pageSize = val;
            this.initList();
        },
        handleCurrentChange(val) {
            this.pageIndex = val;
            this.initList();
        },
        userhandleSizeChange(val) {
            this.userPageSize = val;
            this.initUserList();
        },
        userhandleCurrentChange(val) {
            this.userPageIndex = val;
            this.initUserList();
        },
        initList() {
             getWinLotteryRecord({
                activityID:this.id,
                pageIndex:this.pageIndex,
                pageSize:this.pageSize
            }).then(res => {
                console.log(res);
                if (res.errorCode == 0) {
                    this.totalCount = res.totalCount;
                    this.tdList = res.data;
                }else {
                    console.log(res.errorMessage);;
                }
            })
        },
        initUserList() {
            getCustomer({
                activityID:this.id,
                pageIndex:this.userPageIndex,
                pageSize:this.userPageSize
            }).then(res => {
                console.log(res);
                if (res.errorCode == 0) {
                    this.userTotalCount = res.totalCount;
                    this.userList = res.data;
                }else {
                    console.log(res.errorMessage);;
                }
            })
        }
    },
    created() {
        this.initList();
        this.initUserList();
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
