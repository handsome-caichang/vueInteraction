<template>
<div class="main-whiteBox verifContBox">
    <div class="columnTitle">
        核销奖券<div class="batchCodes pointer">批量核销</div>
    </div>
    <div class="verifPanel">
        <div class="searchBoxCont" style="width: 816px; height: 44px"><input type="text" class="searchInput input" placeholder="请输入需要核销的券码">
            <div class="searchIcon searchBtn"></div>
            <div class="clearBtn hide"></div>
        </div>
        <div class="searchTips hide">
            <div class="imgTips"></div>
            <div class="txtTips">
                <div class="item item1">
                    <p class="title">搜索卡券</p>
                    <p>核销员输入由客户提供的奖品券号</p>
                </div>
                <div class="item item2">
                    <p class="title">校验</p>
                    <p>检查券信息是否对应及有效</p>
                </div>
                <div class="item item3">
                    <p class="title">完成使用</p>
                    <p>校验无误后向客户进行减免或赠送礼品，并核销卡券</p>
                </div>
            </div>
        </div>
        <div class="searchResult">
            <div class="searchTable">
                <div class="faiTableWrap">
                    <div class="center">
                        <table class="faiTable" cellpadding="0" cellspacing="0">
                            <thead>
                                <tr class="scrollFixedTr">
                                    <th data-key="code1" class="column1 textCenter codeNum sep">
                                        <div class="padding">券码</div>
                                    </th>
                                    <th data-key="gameId" class="column1 textCenter activeNum sep">
                                        <div class="padding">活动编号</div>
                                    </th>
                                    <th data-key="awardStyle" class="column textCenter awardLevel sep">
                                        <div class="padding">奖项等级</div>
                                    </th>
                                    <th data-key="award" class="column textCenter awardName sep">
                                        <div class="padding">奖品名称</div>
                                    </th>
                                    <th data-key="awardinfo" class="column2 textCenter user sep">
                                        <div class="padding">中奖者</div>
                                    </th>
                                    <th data-key="awardTime" class="column3 textCenter awardTime  sep">
                                        <div class="padding">中奖时间</div>
                                    </th>
                                    <th data-key="codeStatus" class="column4  textCenter">
                                        <div class="padding">券码状态</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr _index="0" class="odd">
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">229733047</div>
                                    </td>
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">HD47</div>
                                    </td>
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">安慰奖</div>
                                    </td>
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">价值5元小礼品</div>
                                    </td>
                                    <td class="textCenter ellipsis">
                                        <div class="padding ellipsis tdWrap">
                                            <div class="userPlayer ellipsis" style="width:auto;"><img src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eribQm1CY0QQvjLGyk6ic8Jb0kesAORhxXyiadT93atoicdQnzNHgX9HweXTZ1w1atTquhZ3IVNJQoVOA/132"><span title=""></span></div>
                                        </div>
                                    </td>
                                    <td class="textCenter awardTime ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">2018-12-05 15:58:17</div>
                                    </td>
                                    <td class="textCenter codeStatus ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">未核销</div>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <div class="cavBtnBox hide" style="display:block">
                <!-- <div class="revoke hide">
                    <div class="cavRemark">
                        核销备注：<input class="cavNote" type="text" value="" disabled="disabled" maxlength="9" >
                    </div>
                    <div class="revokeBtn">
                        <div class="revokeCav">撤回核销</div>
                        <div class="revokeTip">撤回核销为敏感操作请慎重考虑</div>
                    </div>
                </div> -->
                <div class="cav">
                    <div style="margin-bottom: 20px; margin-top: 24px;">
                        核销备注：<input class="cavNote" type="text" value="" maxlength="9" >
                    </div>
                        <div class="cavBtn main-Button-blue">核销</div>
                        <p class="cavTips"></p>
                </div>
            </div>
        </div>
    </div>
    <div class="changeToPhoneBox">
        <div class="phoneTiPsImg hide reminder"></div>
        <div class="changeToPhone"><span class="icon"></span>使用手机随时随地核销卡券</div>
    </div>
</div>
</template>

<script>
export default {
    name: "verification",
    data() {
        return {};
    },
    computed: {},
    methods: {},
    components: {}
};
</script>

<style scoped>
@import '../../assets/css/verification.scss';
</style>
