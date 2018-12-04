<template>
<div id="cav_container" class="main-whiteBox">
    <div id="cav_tabBox">
        <div class="cav_tab cav_t_record checked" data-page="record">核销记录</div>
        <div class="cav_tab cav_t_hbRecord" data-page="hbRecord">红包记录</div>
        <div class="cav_tab cav_t_gift" data-page="gift">礼品记录</div>
        <div id="cav_gotoCavBtn" class="main-Button" @click="toVer"><span class="icon"></span>前往核销</div>
    </div>
    <div id="cav_cententBox">
        <div class="cav_centent cav_c_gift">
            <div class="recordBar">
                <div id="searchGameId">
                    <div class="dropDownBox_main">
                        <div class="txt" data-value="0">全部活动</div><span class="icon dropDownArrow"></span>
                    </div>
                    <div class="dropDownBox_sub hide" style="display: none;">
                        <div class="options" data-value="0">全部活动</div>
                        <div class="options" data-value="3">HD3</div>
                        <div class="options" data-value="2">HD2</div>
                        <div class="options" data-value="1">HD1</div>
                    </div>
                </div>
                <div class="filter time3" data-selecttype=2>今天</div>
                <div class="filter time3" data-selecttype=3>昨天</div>
                <div class="filter latelyStevenDay time3" data-selecttype=4>最近七天</div>
                <div class="filter time3" data-selecttype=5>最近30天</div>
                <div class="filter time3" data-selecttype=6 style="margin-right:15px;">本月</div>
                <input id="startTimeGift" class="startTime" type="text" value="" placeholder="开始时间" readonly>
                <input id="endTimeGift" class="endTime" type="text" value="" placeholder="结束时间" readonly>
                <div id="gift_recordBtn" class="filter recordBtn" data-selecttype=1 style="margin-right: 20px;"><span class="icon"></span>查询</div>
                <div id="exportBtn" class="exportBtn"><span class="icon"></span>导出</div>
            </div>
            <div id="giftRecordTable" class="recordTable">
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
                                <tr class="queryIngTr odd">
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
            <div id="hb_description">
                <p>
                    注：由于派发接口原因，无法获取礼品实时状态，派发后5分钟会查询礼品状态，30分钟后会再次查询礼品状态
                </p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "destruction",
    data() {
        return {};
    },
    computed: {},
    methods: {
      toVer() {
        this.$router.push('/venification')
      }
    },
    components: {}
};
</script>

<style scoped>
@import "../../assets/css/destruction.scss";

.main-whiteBox {
    background-color: #fff;
    border: solid 1px #e7e7e7;
}

.dropDownBox_main {
    position: relative;
    text-align: left;
    padding-left: 8px;
    line-height: 30px;
    cursor: pointer;
    border: solid 1px #e7e7e7;
}

.dropDownBox_main .dropDownArrow {
    position: absolute;
    right: 8px;
    top: 0;
    bottom: 0;
    margin: auto;
    background-position: -722px -622px;
    width: 16px;
    height: 10px;
}
</style>
