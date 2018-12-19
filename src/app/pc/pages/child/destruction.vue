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
                        <div class="txt">全部活动</div>
                    </div>
                </div>
                <div style="display: flex;align-items: center;">
                    <el-date-picker
                        v-model="timeValue"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions2">
                    </el-date-picker>
                    <div class="filter recordBtn" style="margin:0 20px 0 20px;"><span class="icon"></span>查询</div>
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
                                    <th data-key="consummer" class="column4 textCenter sep">
                                        <div class="padding">核销员</div>
                                    </th>
                                    <th data-key="code1" class="column3 textCenter sep">
                                        <div class="padding">券码</div>
                                    </th>
                                    <th data-key="gameId" class="column2 textCenter sep">
                                        <div class="padding">活动编号</div>
                                    </th>
                                    <th data-key="gameName" class="column4 textCenter sep">
                                        <div class="padding">活动名称</div>
                                    </th>
                                    <th data-key="consumeType" class="column7 textCenter sep">
                                        <div class="padding">核销方式</div>
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
                                        <div class="padding ellipsis tdWrap">{{item.consumeTime | formatDatetime("yyyy-MM-dd hh:mm:ss")}}</div>
                                    </td>
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">{{item.consummer}}</div>
                                    </td>
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">{{item.cusCode}}</div>
                                    </td>
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">HD47</div>
                                    </td>
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">{{item.gameName}}</div>
                                    </td>
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">{{item.consumeType == 2 ? '网页核销': '手机核销'}}</div>
                                    </td>
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">{{item.awardStyle}}</div>
                                    </td>
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">{{item.award}}</div>
                                    </td>
                                    <td class="textLeft noPad awardUser ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">
                                            <div class="userPlayer"><img :src="item.info.headImg"></div>
                                                <div class="playerName" title="">{{item.name}}</div>
                                            </div>
                                    </td>
                                    <td class="textCenter awardTime ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">test</div>
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
import {
    destructionList
} from './activeList.js'
export default {
    name: "destruction",
    data() {
        return {
            destructionList,
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
        };
    },
    computed: {},
    methods: { 
        handleSizeChange(val) {
            this.pageSize = val;
            // this.initList();
        },
        handleCurrentChange(val) {
            this.pageIndex = val;
            // this.initList();
        },
    },
    components: {}
};
</script>

<style scoped>
@import "../../assets/css/destruction.scss";
.faiTableWrap .bottom {
    display: flex;
    align-items: center;
}
</style>
