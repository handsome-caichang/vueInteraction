<template>
<div class="main-whiteBox cav_container" style="min-width: 1115px;">
    <div class="cav_tabBox">
        <div class="cav_tab cav_t_record checked">核销记录</div>
        <router-link  class="main-Button cav_gotoCavBtn" target="_blank" :to="{path:'/verification'}"><span class="icon"></span>前往核销</router-link>
        <!-- <div @click="toVer"></div> -->
    </div>
    <div>
        <div class="cav_centent cav_c_gift">
            <div class="recordBar">
                <div class="searchGameId">
                    <div class="dropDownBox_main">
                        <!-- <div class="txt">全部活动</div> -->
                        <el-dropdown trigger="click" @command="command">
                            <span class="el-dropdown-link">
                                {{currentItem.name ? currentItem.name : '请选择活动'}}<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown" style="max-height: 300px;overflow: scroll;">
                                <el-dropdown-item v-for="(item,index) in activeList" :key="index" :command="item">{{item.name}}</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
                <div style="display: flex;align-items: center;">
                    <!-- <el-date-picker
                        v-model="timeValue"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions2">
                    </el-date-picker> -->
                    <div class="filter recordBtn" style="margin:0 20px 0 20px;" @click="initList"><span class="icon"></span>查询</div>
                </div>
            </div>
            <div class="recordTable">
                <div class="faiTableWrap">
                    <div class="center">
                        <table class="faiTable" cellpadding="0" cellspacing="0">
                            <thead>
                                <tr>
                                    <th data-key="consumeTime" class="column1 pad16 textCenter sep">
                                        <div class="padding">核销时间</div>
                                    </th>
                                    <th data-key="code1" class="column3 textCenter sep">
                                        <div class="padding">券码</div>
                                    </th>
                                    <th data-key="code1" class="column3 textCenter sep">
                                        <div class="padding">核销员</div>
                                    </th>
                                    <th data-key="gameName" class="column4 textCenter sep">
                                        <div class="padding">活动名称</div>
                                    </th>
                                    <th data-key="awardStyle" class="column6 textCenter sep">
                                        <div class="padding">奖项等级</div>
                                    </th>
                                    <th data-key="award" class="column6 textCenter sep">
                                        <div class="padding">奖品名称</div>
                                    </th>
                                    <th data-key="awardinfo" class="col-width-180 textCenter sep">
                                        <div class="padding">中奖者</div>
                                    </th>
                                    <th data-key="note" class="column5 textCenter awardTime">
                                        <div class="padding">备注</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="odd" v-for="(item, index) in destructionList" :key="index">
                                    <td class="textCenter pad16 ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">{{item.verificationTime}}</div>
                                    </td>
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">{{item.code}}</div>
                                    </td>
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">{{item.verificationUserName}}</div>
                                    </td>
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">{{item.activityName}}</div>
                                    </td>
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">{{item.gift.levelName}}</div>
                                    </td>
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">{{item.gift.name}}</div>
                                    </td>
                                    <td class="textLeft noPad awardUser ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">
                                            <div class="userPlayer"><img :src="item.customer.headImageUrl"></div>
                                                <div class="playerName" title="">{{item.customer.nickName}}</div>
                                            </div>
                                    </td>
                                    <td class="textCenter awardTime ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">{{item.remark}}</div>
                                    </td>
                                </tr>
                                <tr class="queryIngTr odd" v-if="destructionList.length == 0">
                                    <td class="padding" colspan="10">没有数据</td>
                                </tr>
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </div>
                    <div class="bottom">
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="pageIndex"
                            :page-sizes="[10, 20, 30, 40]"
                            :page-size="pageSize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="totalCount">
                        </el-pagination>
                    </div>
                </div>
            </div>
            <div class="hb_description">
                <p>
                    注：由于派发接口原因，无法获取礼品实时状态，派发后5分钟会查询礼品状态，30分钟后会再次查询礼品状态
                </p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import {
    // destructionList
// } from './activeList.js'
import {getList, getWinLotteryRecord} from 'pcApi/jie.js'
export default {
    name: "destruction",
    data() {
        return {
            destructionList: [],
            timeValue: '',
            pickerOptions2: {
                shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            const start = new Date();
                            picker.$emit('pick', [start, start]);
                        }
                    },
                    {
                        text: '昨天',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', [start, end]);
                        }
                    },
                    {
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }
                ]
            },
            pageIndex: 1,
            pageSize: 10,
            totalCount: 0,
            activeList: [
            ],
            currentItem: {
            }
        };
    },
    computed: {},
    methods: { 
        command(item) {
            this.currentItem = item;
            this.initList();
        },
        handleSizeChange(val) {
            this.pageSize = val;
            this.initList();
        },
        handleCurrentChange(val) {
            this.pageIndex = val;
            this.initList();
        },
        initList() {
            if (!this.currentItem.id)  return;
            getWinLotteryRecord({
                activityID: this.currentItem.id,
                pageIndex:this.pageIndex,
                pageSize:this.pageSize,
                isVerificated: true,
            }).then(res => {
                console.log(res);
                if (res.errorCode == 0) {
                    this.totalCount = res.totalCount;
                    this.destructionList = res.data;
                }else {

                }
            })
        }
    },
    components: {},
    created() {
        getList({
            pageIndex: 1,
            pageSize: 65535
        }).then(res => {
            if (res.errorCode == 0) {
                this.activeList = res.data;
            }
        })
    },
};
</script>

<style scoped>
@import "../../assets/css/destruction.scss";
.faiTableWrap .bottom {
    display: flex;
    align-items: center;
}
.searchGameId {
    width: auto;
}
.dropDownBox_main {
    padding-right: 10px;
}
</style>
