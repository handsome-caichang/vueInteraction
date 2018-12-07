<template>
<div class="main-whiteBox cav_container" style="min-width: 1115px;">
    <div class="cav_tabBox">
        <div class="cav_tab cav_t_record checked">核销记录</div>
        <div class="cav_tab cav_t_hbRecord">红包记录</div>
        <div class="cav_tab cav_t_gift">礼品记录</div>
        <div class="main-Button cav_gotoCavBtn" @click="toVer"><span class="icon"></span>前往核销</div>
    </div>
    <div>
        <div class="cav_centent cav_c_gift">
            <div class="recordBar">
                <div class="searchGameId">
                    <div class="dropDownBox_main">
                        <div class="txt">全部活动</div><span class="icon dropDownArrow"></span>
                    </div>
                    <div class="dropDownBox_sub hide" style="display: none;">
                        <div class="options">全部活动</div>
                        <div class="options">HD3</div>
                        <div class="options">HD2</div>
                        <div class="options">HD1</div>
                    </div>
                </div>
                <div class="filter time3">今天</div>
                <div class="filter time3">昨天</div>
                <div class="filter latelyStevenDay time3">最近七天</div>
                <div class="filter time3">最近30天</div>
                <div class="filter time3" style="margin-right:15px;">本月</div>
                <input class="startTime" type="text" value="" placeholder="开始时间" readonly>
                <input class="endTime" type="text" value="" placeholder="结束时间" readonly>
                <div class="filter recordBtn" style="margin-right: 20px;"><span class="icon"></span>查询</div>
                <div class="exportBtn"><span class="icon"></span>导出</div>
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
                        <div class="total"><span class="allTotal">共有 0 条记录 ，每页显示</span>
                            <div class="dropDownBox">
                                <div class="dropDownArea">10</div>
                                <div class="faiTable_poupBox optionsBox hide">
                                    <div class="options">10</div>
                                    <div class="options">50</div>
                                    <div class="options">100</div>
                                    <div class="options">500</div>
                                </div>
                            </div>
                        </div>
                        <div class="pageBox">
                            <div class="page"><a href="javascript:;" hidefocus="true" class="prevPage disabledBtn"></a><span class="currentPage">1 / 0</span><a href="javascript:;" hidefocus="true" class="nextPage disabledBtn"></a></div><span class="pageJump"><input maxlength="1" class="jumpInput" type="text"><div class="jumpSubmit pointer">跳转</div></span>
                        </div>
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
            destructionList
        };
    },
    computed: {},
    methods: {
        toVer() {
            this.$router.push('/verification')
        }
    },
    components: {}
};
</script>

<style scoped>
@import "../../assets/css/destruction.scss";
</style>
