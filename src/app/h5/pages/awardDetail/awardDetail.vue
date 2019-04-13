<template>
<div id="awardDetailBox" class="poupMain bg isAngular">
    <div class="unPublish" v-if="!isEdit && !luckDraw.baseInfo.isPublish">活动尚未发布，当前仅供参考</div>
    <div id="awardDetailScrollBox">
        <div class="awardCloseIcon" @click="closeDetail"></div>
        <div class="awardDetail">
            <div class="hostName">{{luckDraw.h5Data.awardDetailName}}</div>
            <div class="awardName layerId-26 defBgColor" style="cursor: pointer; position: relative;">{{awardDetail.name}}</div>
            <div class="awardCodeTime codeTimeFixedRange"><em>兑换期限</em>：<span class="codeBgTime">{{awardDetail.cashStartTime | formatDatetime('yyyy-MM-dd hh:mm')}}</span> - <span class="codeEndTime">{{awardDetail.cashEndTime | formatDatetime('yyyy-MM-dd hh:mm')}}</span></div>
            <div class="awardDetailWarp"></div>
        </div>
        <div class="codeImgBox">
            <div id="codeDetailInfoBox" v-if="awardDetail && !awardDetail.isVerificated">
                <div class="codeLine"><span>兑奖码</span>：<span class="code selectText">{{awardDetail.code ? awardDetail.code : 888888888}}</span></div>
                <div class="codeOptInfo_Gift">{{awardDetail.operationNotify}}</div>
            </div>
            <div id="codeDetailInfoBox"  v-if="awardDetail && awardDetail.isVerificated">
                <div class="codeOptInfo_Gift"><span>已核销</span></div>
            </div>
        </div>
        <div class="awardBtnList">
            <div style="height:0.4rem;"></div>
            <!--兑奖券详情弹出层 -->
            <div id="ticketDetailBox">
                <p class="ticketitle"><span class="text">{{luckDraw.h5Data.awardDetaiInfo}}</span></p>
                <div class="ticketInfo">
                    <div class="itemList dateLine codeTimeFixedRange">
                        <span class="title">有效日期</span>
                        <div class="box">
                            <span class="beginTime">{{awardDetail.cashStartTime | formatDatetime('yyyy-MM-dd hh:mm')}}</span> 至 <span class="endTime">{{awardDetail.cashEndTime | formatDatetime('yyyy-MM-dd hh:mm')}}</span>
                        </div>
                    </div>
                    <div class="itemList addressLine">
                        <span class="title titleAdress">兑奖地址</span>
                        <div class="box">
                            <div class="address">{{awardDetail.address}}</div>
                        </div>
                    </div>
                    <div class="itemList addressLine" style="margin-bottom:10px;">
                        <span class="title titleAdress">客服电话</span>
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
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'awardDetail',
    data() {
        return window.h5AllData
    },
    computed: {
        ...mapState([
            'isEdit'
        ])
    },
    methods: {
        ...mapMutations([
            'set_isFristIn'
        ]),
        closeDetail() {
            if (this.isEdit) return;
            this.$router.back();
        }
    },
    created() {
        this.set_isFristIn(false);
        if (this.$route.query.code) {
            if (this.luckDraw.myDataGifts.length > 0) {
                this.luckDraw.myDataGifts.forEach(item => {
                    if (item.code == this.$route.query.code) {
                        this.awardDetail = item;
                    }
                })
            }
        }
    }
}
</script>
<style scoped>
@import "./awardDetail.scss";
.hexiao {
    padding: 20px;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: #333;
    border-radius: 4px;
}
</style>
