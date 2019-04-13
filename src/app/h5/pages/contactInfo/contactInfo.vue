<template>
    <div id="awardUserInfoBox" class="page  input js_show">
        <div class="unPublish" v-if="!isEdit && !luckDraw.baseInfo.isPublish">活动尚未发布，当前仅供参考</div>
        <div class="awardUserInfoTitle">
            <h2 >填写联系信息</h2>
            <p class="tipsColor">为了方便兑奖，请先填写您的联系信息</p>
        </div>
        <div class="awardUserInfoForm">
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell contactInput-ausername contactInput">
                    <div class="weui-cell__hd"><label class="weui-label">姓名</label></div>
                    <div class="weui-cell__bd">
                        <input style="margin:0px;border: none;" v-model="name" id="input_ausername" class="weui-input theInputDecide textInput" propname="姓名" propkey="ausername" type="text" placeholder="请输入姓名">
                    </div>
                </div>
                <div class="weui-cell contactInput-aphone contactInput">
                    <div class="weui-cell__hd"><label class="weui-label">电话</label></div>
                    <div class="weui-cell__bd">
                        <input style="margin:0px;border: none;" maxlength="11" v-model="mobile" id="input_aphone" class="weui-input theInputDecide textInput" propname="联系电话" propkey="aphone" type="tel" placeholder="请输入联系电话">
                    </div>
                </div>
            </div>   
            <div class="contactInput contactInput-aadress" id="theLinkAddress">
                <div class="weui-cells__title">联系地址</div>
                <div class="weui-cells weui-cells_form">
                    <div class="weui-cell theSelectedCity">
                        <div class="weui-cell__hd"><label for="" class="weui-label">省/市/区</label></div>
                        <div class="weui-cell__bd addressInfo">
                            <x-address title="" :raw-value='true' :value-text-align="'left'" placeholder="街道详细地址" v-model="value" :list="ChinaAddressV4Data"></x-address>
                        </div>
                    </div>
                    <div class="weui-cell theTargetNow">
                        <div class="weui-cell__bd">
                            <textarea style="padding:0px;" v-model="address" class="weui-textarea theAddresStreet theInputDecide" placeholder="街道详细地址" rows="3"></textarea>
                            <!-- <div class="weui-textarea-counter"><span class="theMaxNum">0</span>/200</div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="weui-cells__tips">
            注:若因未填写资料或资料填写错误导致无法兑奖，主办方不承担相关法律责任;
        </div>
        <div class="weui-btn-area">
            <a class="weui-btn weui-btn_primary userSubmitBtn" href="javascript:" id="showTooltips" @click="sublimInfo">提交</a>
        </div>
    </div>
</template>


<script>
import { mapMutations ,mapState} from 'vuex';
import { XAddress, ChinaAddressV4Data } from 'vux'
import { updateAddress } from 'h5Api/jie.js'
export default {
    name:'contactInfo',
    data() {
        return {
            value: [
            ],
            ChinaAddressV4Data,
            showAddress:false,
            name: '',
            mobile: '',
            province: '', // 省
            city: '', // 城市
            region: '', // 地区
            address: '', // 地址
            luckDraw: window.h5AllData.luckDraw,
            isEditContactInfo: false
        }
    },
     computed: {
        ...mapState([
            'isEdit'
        ])
    },
    methods: {
        ...mapMutations([
            'set_loadingEnd',
            'set_autoStartLuckDraw',
        ]),
        sublimInfo() {
            if (!this.verification()) {
                this.ChinaAddressV4Data.forEach(el => {
                    if(el.value == this.value[0]) {
                        this.province = el.name;
                    }else if (el.value == this.value[1]) {
                        this.city = el.name;
                    }else if (el.value == this.value[2]) {
                        this.region = el.name;
                    } 
                });
                updateAddress({
                    activityID: this.luckDraw.id,
                    contactName: this.name,
                    contactMobile: this.mobile,
                    contactProvince: this.province,
                    contactCity: this.city,
                    contactRegion: this.region,
                    contactAddress: this.address
                }).then(res => {
                    if (res.errorCode == 0) {
                        this.luckDraw.address = {
                            name: this.name,
                            mobile: this.mobile,
                            province: this.province,
                            city: this.city,
                            region: this.region,
                            address: this.address
                        };
                        
                        if (this.$route.query.code) {
                            let query = this.$route.query;
                            let newQuery = JSON.parse(JSON.stringify(query));
                            this.$router.replace({ path: 'awardDetail', query: newQuery });
                        }else if(!this.isEditContactInfo) {
                            this.set_autoStartLuckDraw(true);
                            this.$router.back();
                        }else {
                            this.$router.back();
                        }
                    }
                })
            }else {
                app.alert(this.verification())
            }
        },
        verification() {
            if (!this.name) return '请输入您的姓名';
            if (!this.mobile) return '请输入您的联系电话';
            if (!app.tool.telReg.test(this.mobile)) return '请输入正确的联系电话';
            if (this.value.length == 0) return '请输入您所城市'
            if (!this.address) return '请输入您所在的街道';
            return '';
        }
    },
    created() {
        this.set_loadingEnd(true);
        if (this.luckDraw.address && this.luckDraw.address.name) {
            this.isEditContactInfo = true;
            this.name = this.luckDraw.address.name;
            this.mobile = this.luckDraw.address.mobile;
            this.province = this.luckDraw.address.province;
            this.city = this.luckDraw.address.city;
            this.region = this.luckDraw.address.region;
            this.address = this.luckDraw.address.address;
            this.value.push(this.province, this.city, this.region);
        }
    },
    components: {
        XAddress
    }
}
</script>


<style lang="scss" scoped>
    @import "./contactInfo.scss";
   .vux-popup-picker-select {
   text-align: left !important;
 }
</style>
