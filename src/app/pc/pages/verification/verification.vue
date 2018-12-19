<template>
<div class="main-whiteBox verifContBox">
    <div class="columnTitle">
        核销奖券<div class="batchCodes pointer"></div>
    </div>
    <div class="verifPanel">
        <div class="searchBoxCont" style="width: 816px; height: 44px"><input type="text" v-model="code" class="searchInput input" placeholder="请输入需要核销的券码">
            <div class="searchIcon searchBtn" @click="searchClick"></div>
        </div>
        <div class="searchTips" v-if="!isClick">
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
        <div class="searchResult" v-if="isClick">
            <div class="searchTable">
                <div class="faiTableWrap">
                    <div class="center">
                        <table class="faiTable" cellpadding="0" cellspacing="0">
                            <thead>
                                <tr class="scrollFixedTr">
                                    <th class="textCenter codeNum sep">
                                        <div class="padding">券码</div>
                                    </th>
                                    <th  class="textCenter activeNum sep">
                                        <div class="padding">活动名称</div>
                                    </th>
                                    <th  class="textCenter awardLevel sep">
                                        <div class="padding">奖项等级</div>
                                    </th>
                                    <th class="textCenter awardName sep">
                                        <div class="padding">奖品名称</div>
                                    </th>
                                    <th  class="textCenter user sep">
                                        <div class="padding">中奖者</div>
                                    </th>
                                    <th  class="textCenter awardTime  sep">
                                        <div class="padding">中奖时间</div>
                                    </th>
                                    <th  class=" textCenter" style="width: 96px;">
                                        <div class="padding">券码状态</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="queryIngTr odd" v-if="!gift"><td class="padding" colspan="8">没有数据</td></tr>
                                <tr _index="0" class="odd" v-if="gift">
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">{{gift.code}}</div>
                                    </td>
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">{{gift.activityName}}</div>
                                    </td>
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">{{gift.gift.levelName}}</div>
                                    </td>
                                    <td class="textCenter ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">{{gift.gift.name}}</div>
                                    </td>
                                    <td class="textCenter ellipsis">
                                        <div class="padding ellipsis tdWrap">
                                            <div class="userPlayer ellipsis" style="width:auto;">
                                                <img :src="gift.headImageUrl">
                                                <span>{{gift.nickName}}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="textCenter awardTime ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap">{{gift.createTime}}</div>
                                    </td>
                                    <td class="textCenter codeStatus ellipsis tmpShowHoverTips">
                                        <div class="padding ellipsis tdWrap" v-if="!gift.isVerificated && !gift.gift.isExpired">未核销</div>
                                        <div class="padding ellipsis tdWrap"  v-if="gift.isVerificated" style="color: #ff4e1f;">已核销</div>
                                        <div class="padding ellipsis tdWrap"  v-if="!gift.isVerificated && gift.gift.isExpired" style="color: #ff4e1f;">已过期</div>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <div class="cavBtnBox" style="display:block" v-if="gift">
                <div class="revoke" v-if="gift.isVerificated">
                    <div class="cavRemark">
                        核销备注：<input class="cavNote" v-model="gift.remark" type="text" value="" disabled="disabled" maxlength="9" >
                    </div>
                    <!-- <div class="revokeBtn">
                        <div class="revokeCav">撤回核销</div>
                        <div class="revokeTip">撤回核销为敏感操作请慎重考虑</div>
                    </div> -->
                </div>
                <div class="cav" v-if="!gift.isVerificated">
                    <div style="margin-bottom: 20px; margin-top: 24px;">
                        核销备注：<input v-model="remark" class="cavNote" :disabled="gift.gift.isExpired" type="text" value="" maxlength="9" >
                    </div>
                        <div class="cavBtn main-Button-blue" @click="verificate">核销</div>
                        <p class="cavTips"></p>
                </div>
            </div>
        </div>
    </div>
    <div class="changeToPhoneBox">
        <div class="phoneTiPsImg hide reminder"></div>
        <!-- <div class="changeToPhone"><span class="icon"></span>使用手机随时随地核销卡券</div> -->
    </div>
</div>
</template>

<script>
import {getWinLotteryRecordByCode,verificate} from 'pcApi/jie.js'
export default {
    name: "verification",
    data() {
        return {
            code: '',
            remark: '',
            gift: null,
            isClick: false,
        };
    },
    computed: {},
    methods: {
        searchClick() {
            if(this.code) {
                this.isClick = true;
                getWinLotteryRecordByCode({
                    code: this.code
                }).then(res => {
                    this.gift = res.data;
                })
            }
        },
        verificate() {
            if (!this.gift&&this.gift.isExpired) return;
            verificate({
                remark: this.remark,
                id: this.gift.id
            }).then(res => {
                if (res.errorCode == 0) {
                    this.searchClick();
                }
            })
        }
    },
    components: {},
    created() {
    }
};
</script>

<style scoped>
@import '../../assets/css/verification.scss';
input[type="text"]{
  border:1px solid #e7e7e7;
}
/* .scrollFixedTr {
    display: flex;
    align-items: center;
    width: 100%;
}
.flex1 {
    flex: 1
} */
</style>
