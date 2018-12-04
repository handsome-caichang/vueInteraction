<template>
<div id="verifContBox" class="main-whiteBox">
    <!-- <div class="columnTitle">
        核销奖券<div class="batchCodes pointer">批量核销</div>
    </div>
    <div id="verifPanel">
        <div class="searchBoxCont" style="width: 816px; height: 44px"><input type="text" class="searchInput input" placeholder="请输入需要核销的券码">
            <div class="searchIcon searchBtn"></div>
            <div class="clearBtn hide"></div>
        </div>
        <div class="searchTips">
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
            <div class="searchTable"></div>
            <div id="cavBtnBox" class="hide">
                <div class="revoke hide">
                    <div class="cavRemark">
                        核销备注：<input class="cavNote" type="text" value="" disabled="disabled" maxlength="9" >
                    </div>
                    <div class="revokeBtn">
                        <div class="revokeCav">撤回核销</div>
                        <div class="revokeTip">撤回核销为敏感操作请慎重考虑</div>
                    </div>
                </div>
                <div class="cav hide">
                    <div style="margin-bottom: 20px; margin-top: 24px;">
                        核销备注：<input class="cavNote" type="text" value="" disabled="disabled" maxlength="9" >
                    </div>
                    <div class="cavBtn main-Button-blue disabled">核销</div>
                    <p class="cavTips"></p>
                </div>
                <div class="batchCav hide">
                    <div class="batchCavBtn main-Button-blue">全部核销</div>
                </div>
            </div>
        </div>
    </div>
    <div class="changeToPhoneBox">
        <div class="phoneTiPsImg hide reminder"></div>
        <div class="changeToPhone"><span class="icon"></span>使用手机随时随地核销卡券</div>
    </div> -->
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
