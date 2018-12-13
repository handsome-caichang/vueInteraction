<template>
<div id="awardDetailBox" class="poupMain bg isAngular">
    <div id="awardDetailScrollBox">
        <div class="awardCloseIcon" @click="closeDetail"></div>
        <div class="awardDetail">
            <div class="hostName">{{luckDraw.h5Data.awardDetailName}}</div>
            <div class="awardName layerId-26 defBgColor" style="cursor: pointer; position: relative;">{{awardDetail.name}}</div>
            <div class="awardCodeTime codeTimeFixedRange"><em>兑换期限</em>：<span class="codeBgTime">{{awardDetail.cashStartTime}}</span> - <span class="codeEndTime">{{awardDetail.cashEndTime}}</span></div>
            <div class="awardDetailWarp"></div>
        </div>
        <div class="codeImgBox">
            <div id="codeDetailInfoBox">
                <div class="codeLine"><span>兑奖码</span>：<span class="code selectText">{{awardDetail.id}}</span></div>
                <div class="codeOptInfo_Gift">{{awardDetail.operationNotify}}</div>
            </div>
        </div>
        <div class="awardBtnList">
            <div style="height:0.4rem;"></div>
            <!--兑奖券详情弹出层 -->
            <div id="ticketDetailBox">
                <p class="ticketitle"><span class="text">{{luckDraw.h5Data.awardDetaiInfo}}</span></p>
                <div class="ticketInfo">
                    <div class="itemList dateLine codeTimeFixedRange">
                        <div class="title">有效日期</div>
                        <div class="box">
                            <span class="beginTime">{{awardDetail.cashStartTime}}</span> 至 <span class="endTime">{{awardDetail.cashStartTime}}</span>
                        </div>
                    </div>
                    <div class="itemList addressLine">
                        <div class="title titleAdress">兑奖地址</div>
                        <div class="box">
                            <div class="address">{{awardDetail.address}}</div>
                        </div>
                    </div>
                    <div class="itemList addressLine">
                        <div class="title titleAdress">客服电话</div>
                        <div class="box">
                            <div class="address">
                                <a class="phoneText" :href="`tel:${awardDetail.telphone}`" style="text-decoration:none;">{{awardDetail.telphone}}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'awardDetail',
    data() {
        return window.h5AllData
    },
    computed: {
    },
    methods: {
        closeDetail() {
            this.$router.go(-1);
        }
    },
    created() {
    }
}
</script>
<style scoped>
@import "./awardDetail.scss";

</style>
