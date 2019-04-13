<template>
<div class="activity-lottery-winning body">
    <div class="unPublish" v-if="!isEdit && !luckDraw.baseInfo.isPublish">活动尚未发布，当前仅供参考</div>
    <div class="main home" style="height: 100%;width: 395px;" :style="{width: (app.base.device.gecko || app.base.device.trident || app.base.device.getExplorer == 'Edge') ? '395px' : ''}">
        <div class="editTarget-homeBoxBg hd-Special-bgImgInfo">
            <div class="titleImg titleDown">
                <img id="titleBox" class="editTarget-titleBox" :src="titleImg"/>
            </div>
            <div class="outercont">
                <div class="outer-cont defBgColor" style="cursor: pointer; z-index: 4;" :class="rotateClass"> 
                    <img class="outerImg" :src="rotatePanbg" style="position: absolute;z-index: -1;bottom: -4px;"/> 
                    <img class="outerImg" :src="rotatePan" /> 
                    <div class="newAwardShow">
                        <img class="zp" v-for="(item,indexs) in zhuanpanData" :key="indexs" :src="item.img" :style="zhuanStyle(item,indexs)" />
                        <img class="editTarget-deviceLine abs" v-for="(item,index) in zhuanpanData" :key="index+100" :style="devicStyle(item,index)" :src="device" />
                    </div> 
                </div>
                <div id="inner" class="startBtnImg" @click="startAward">
                    <img :src="startBtn" />
                </div>
            </div>
            <div class="content">
                <div style="margin-bottom:20px;margin-top:20px;">
                    <div class="center_txt">
                        <div class="txt_style_1 joinNumLine " v-if="luckDraw.baseInfo.isShowUserCount">已有<span class="ipt_num joinNumLineText">{{luckDraw.baseInfo.userCount + luckDraw.baseInfo.visualUserCount}}</span>人参与</div>
                        <div class="txt_style_1 ">
                            <div class="dayDraw" style="font-size: 15px; color: #fff" v-if="luckDraw.lotteryInfo.totalLimit != -1">
                                今天可抽
                                <span class="ipt_num specil dayDrawCount" style="font-size:15px; color: #fff">{{luckDraw.lotteryInfo.dailyLimit}}</span>
                                次
                            </div>
                            <div class="dayDraw" style="font-size:15px; color: #fff" v-if="luckDraw.lotteryInfo.totalLimit != -1">
                                您还有
                                <span class="ipt_num specil dayDrawCount" style="font-size:15px; color: #fff">{{luckDraw.lotteryInfo.totalLimit}}</span>
                                次抽奖机会
                            </div>
                            <div class="dayDraw" style="font-size:15px; color: #fff" v-if="luckDraw.lotteryInfo.totalLimit == -1">
                                您今天还有
                                <span class="ipt_num specil dayDrawCount" style="font-size:15px; color: #fff">{{luckDraw.lotteryInfo.dailyLimit}}</span>
                                次抽奖机会
                            </div>
                        </div>
                    </div>
                </div>
                <div class="poupMainBox" v-if="isEdit">
                    <img class="titleImgBox" :src="myAwardImg"/>
                    <div class="myAwardInfo rowSpacing"  v-if="gifts.length != 0">
                        <div class="award-box" v-for="(item, index) in gifts" :key="index">
                            <div class="awardLimitBox">
                                <span class="awardText awardNameDef">{{item.levelName}}：{{item.name}}</span>
                            </div>
                            <span class="awardInfoDetail" @click="gotoDetail(item)">查看详情</span>
                        </div>
                        <div class="infoDeviceLine"></div>
                    </div>
                    <div class="myAwardInfo rowSpacing" v-if="gifts.length == 0">
                        <div style="line-height: 2.6rem; padding-left: 0.05rem;font-size: 0.75rem;">暂无中奖记录</div>
                    </div>
                </div>
                <div class="poupMainBox" v-if="!isEdit">
                    <img class="titleImgBox" :src="myAwardImg"/>
                    <div class="myAwardInfo rowSpacing"  v-if="luckDraw.myDataGifts.length != 0">
                        <div class="award-box" v-for="(item, index) in luckDraw.myDataGifts" :key="index">
                            <div class="awardLimitBox">
                                <span class="awardText awardNameDef">{{item.levelName}}：{{item.name}}</span>
                            </div>
                            <span class="awardInfoDetail" @click="gotoDetail(item)">查看详情</span>
                        </div>
                        <div class="infoDeviceLine"></div>
                    </div>
                    <div class="myAwardInfo rowSpacing" v-if="luckDraw.myDataGifts.length == 0">
                        <div style="line-height: 2.6rem; padding-left: 0.05rem;font-size: 0.75rem;">暂无中奖记录</div>
                    </div>
                </div>
                <!-- v-if="(isEdit && luckDraw.lotteryInfo.contactType != 0) || (!isEdit && luckDraw.address && luckDraw.address.name)" -->
                <div  v-if="(isEdit && luckDraw.lotteryInfo.contactType != 0) || (!isEdit && luckDraw.address && luckDraw.address.name)">
                    <div id="awardContactInfo" class="poupMainBox" style="display: block;position: relative;">
                        <div class="updateBtn modifyBtn" @click="editContactInfo"><span class="editIcon"></span>  编辑</div>
                        <img class="titleImgBox" :src="contactInfoImg" />
                        <div class="rowSpacing contactGroup" style="font-size:13px;">
                            <div class="contactItem">姓名：<span>{{luckDraw.address.name}}</span>
                            </div>
                            <div class="contactItem">联系电话：<span>{{luckDraw.address.mobile}}</span>
                            </div>
                            <div class="contactItem">联系地址：<span>{{luckDraw.address.province}}{{luckDraw.address.city}}{{luckDraw.address.region}}{{luckDraw.address.address}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="poupMainBox " style="margin-bottom: 0px;">
                    <img class="titleImgBox" :src="activeRule"/>
                    <div id="ruleBox">
                        <div id="activeRuleInfoBox" class="poupMainInfo poupMain">
                            <div id="awardLine" class="rowSpacing poupLine" data-sortkey="a">
                                <div class="titleTextBox">
                                    <div class="awardTitleText" style="font-size:14px;">活动奖品</div>
                                </div>
                                <div id="awardLineBox" class="awardDetailText" style="font-size: 13px;">
                                    <div class="awardItem" v-for="(item, index) in gifts" :key="index"><span class="awardStyle">{{item.levelName}}</span>: <span class="award">{{item.name}}</span></div>
                                </div>
                                <div class="infoDeviceLine ruleBoxLine"></div>
                            </div>
                            <div id="gameDateTime" class="rowSpacing poupLine" data-sortkey="b">
                                <div class="titleTextBox">
                                    <div class="awardTitleText" style="font-size:14px;">活动时间</div>
                                </div>
                                <div class="awardDetailText" style="font-size: 13px;"><span id="startDate">{{luckDraw.baseInfo.startTime | formatDatetime('yyyy-MM-dd hh:mm')}}</span>至<span id="endDate">{{luckDraw.baseInfo.endTime | formatDatetime('yyyy-MM-dd hh:mm')}}</span></div>
                                <div class="infoDeviceLine ruleBoxLine"></div>
                            </div>
                            <div id="explainBox" class="rowSpacing poupLine" data-sortkey="e">
                                <div class="titleTextBox">
                                    <div class="awardTitleText" style="font-size:14px;">活动说明</div>
                                </div>
                                <div class="awardDetailText" style="font-size: 13px;"> {{luckDraw.baseInfo.activityInfo}}</div>
                                <div class="infoDeviceLine ruleBoxLine"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="loadingToast" :class="{'hide': !loadinData}">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-loading weui-icon_toast"></i>
            <p class="weui-toast__content">数据加载中</p>
        </div>
    </div>
    <resule-box v-show="luckDrawPopupAwardFalg" @tralg="tralg" :awardDetail="h5AllData.awardDetail" :type="luckDrawPopupAwardType"></resule-box>
</div>
</template>

<script>
import resuleBox from './child/resuleBox'
import device from './image/device.png'
import rotatePan from './image/rotatePan.png'
import rotatePanbg from './image/rotatePanbg.png'
import contactInfoImg from './image/contactInfoImg.png'
import zp0 from '../../assets/images/zp0.png';
import zp1 from '../../assets/images/zp1.png';
import zp2 from '../../assets/images/zp2.png';
import zp3 from '../../assets/images/zp3.png';
import zp4 from '../../assets/images/zp4.png';
import zp5 from '../../assets/images/zp5.png';
import zp6 from '../../assets/images/zp6.png';
import zp900 from '../../assets/images/zp900.png';
// const zp0 = 'https://cdn01.xiaogj.com/file/ad32b7168ef04230b33eab04e9e69e0d/201812/31dd141fd56242dbb0f517fee66eed5e.png';
// const zp0 = 'https://cdn01.xiaogj.com/file/63ede7c02f38429bac36c6d058af2c28/201812/ba0bd39ceddd4723a0a2a9fcbac31a53.png';
// const zp1 = 'https://cdn01.xiaogj.com/file/e62ccdaf86b9490db16b64f4181cd0c2/201812/1e26c05af8cb45d18d50b5fb28ed590a.png';
// const zp1 = 'https://cdn01.xiaogj.com/file/b8df68d98e284cd0ac3b16e518a2b7ae/201812/a1f0d9462b4f4f1c8526522beaa1d464.png';
// const zp2 = 'https://cdn01.xiaogj.com/file/052debc47e7f4ccc881c5c6626dc45e3/201812/8b4e477ab2354e8f8ab23fca0e4861a8.png';
// const zp2 = 'https://cdn01.xiaogj.com/file/06961cf2bfa6456abf8f3e9a5a509f50/201812/7d7178c32064431a826057062d274667.png';
// const zp3 = 'https://cdn01.xiaogj.com/file/171dbdb9a180469aa97e85c7d7b36fe2/201812/33a4b69d0dbf4d6eace5de1206854804.png';
// const zp3 = 'https://cdn01.xiaogj.com/file/b7df58cc76a8475fa0e06a647d675b62/201812/f15b5389d624482ea97c7d0ae31e8778.png';
// const zp4 = 'https://cdn01.xiaogj.com/file/bddda22f9d2b4487aba3419336f37ac8/201812/a894d29ed6d94608a3d07e157a04cfdf.png';
// const zp4 = 'https://cdn01.xiaogj.com/file/f2488a4025f84cc69875124971298a8f/201812/a259c09e3cb0494782896cfacfbefd8d.png';
// const zp5 = 'https://cdn01.xiaogj.com/file/d57007015df2415ab7da26626701e5ed/201812/09d53e795f4c4b849bafb8ad200fd8b7.png';
// const zp5 = 'https://cdn01.xiaogj.com/file/d34d456973bf4113a20beefb1ac85102/201812/6dad7b519e9647e0bc9fa76db69536a3.png';
// const zp6 = 'https://cdn01.xiaogj.com/file/a8c3e75a46a54e2d89e6187db34474e1/201812/8e7b945836134c14a5e55c4e5dd2e321.png';
// const zp6 = 'https://cdn01.xiaogj.com/file/c3c00a68a1184d17804f89735bb8bd88/201812/71b42cbec3f444ff87c740327fa92393.png';
// const zp900 = 'https://cdn01.xiaogj.com/file/360a1cddfe3f450088ec06cc1e01662c/201812/8116ca4d9a454ea1bb3ef0c8c331fae9.png';
// const zp900 = 'https://cdn01.xiaogj.com/file/3397399bd732438baa953179f8c8fc80/201812/7d6a5680523044e090b181602eb850aa.png';
import startBtn from './image/startBtn.png'
import titleImg from './image/title.png'
import myAwardImg from './image/myAwardImg.png'
import activeRule from './image/activeRuleImg.png'
import {mapState,mapMutations} from 'vuex'
import { getLotteryData,executeLottery,upPv ,upAction} from "h5Api/jie.js";

export default {
    name: "luckDraw",
    data() {
        return {
            device,
            rotatePan,
            rotatePanbg,
            startBtn,
            titleImg,
            myAwardImg,
            contactInfoImg,
            activeRule,
            loadinData: false, // 加载抽奖
            zhuanpanData: [  // 转盘的数组
            ],
            listCurrentIndex: -1, // 当前中奖的在转盘列表的索引
            luckDraw: window.h5AllData.luckDraw,
            h5AllData: window.h5AllData,
            gifts: window.h5AllData.luckDraw.gifts,
            shareLevel: '',
            activityID: '',
            desc: '1',
            clicks: false,
        }
    },
    computed: {
        rotateClass() { // 最后旋转到哪个位置，要根据奖品数量，然后当前奖项
            let className = 'rotate', anweiNum = 0,num = 0;
            if (this.listCurrentIndex == -1){
                return '';
            } 
            if (this.zhuanpanData.length == 4) {
                anweiNum = 90;
                num = this.listCurrentIndex * anweiNum + 45;
            }
            if (this.zhuanpanData.length == 6) {
                anweiNum = 60;
                num = this.listCurrentIndex * anweiNum + 30;
            }
            if (this.zhuanpanData.length == 8) {
                anweiNum = 45;
                num = this.listCurrentIndex * anweiNum + 22;
            }
            return className + num;
        },
        ...mapState([
           'luckDrawPopupAwardFalg',
           'luckDrawPopupAwardType',
           'isEdit',
           'isFristIn',
           'autoStartLuckDraw',
       ])
    },
    components: {
        resuleBox
    },
    methods: {
        ...mapMutations([
            'set_luckDrawPopupAwardFalg',
            'set_luckDrawPopupAwardType',
            'set_loadingEnd',
            'set_autoStartLuckDraw',
        ]),
        zhuanStyle(item,index) {
            let widthProp = 0.2; // 图片宽度比例
            let rota = index * 60  + 30; // 图片旋转角度
            if (this.zhuanpanData.length == 4) {
                rota = index * 90  + 48;
                widthProp = 0.25;
            }else if(this.zhuanpanData.length == 6) {
                rota = index * 60  + 30;
                widthProp = 0.2;
            }else if(this.zhuanpanData.length == 8) {
                rota = index * 45  + 23;
                widthProp = 0.18;
            }
            let heightNum = Math.round( document.documentElement.clientWidth * 0.85 / 2 *100)/100;  // 图片宽度高度值的一半
            let widthNum = Math.round( document.documentElement.clientWidth / 2 *100)/100;  // 屏幕宽度高度值的一半
            let currWidth = Math.round( document.documentElement.clientWidth * widthProp / 2  *100)/100; // 图片自身高度宽度一半
            let trasNum =  widthNum / 2; // y 轴移动距离
            let tops = heightNum - currWidth  + 'px'; // 高度一半 - 自身高度一半
            let lefts = widthNum - currWidth  + 'px'; // 宽度一半 - 自身宽度一半
            let widths = widthProp * 100 + '%';
            return {
                width: widths,
                top: tops,
                left: lefts,
                transform: `rotate(${rota}deg)`+ `translateY(-${trasNum}px)`
            }
        },
        devicStyle(item,index) {
            let rota = 0; // line 旋转角度
            if (this.zhuanpanData.length == 4) {
                rota = index * 90 - 1;
            }else if(this.zhuanpanData.length == 6) {
                rota = index * 60 - 1;
            }else if(this.zhuanpanData.length == 8) {
                rota = index * 45 - 1;
            }
            let heightNum = Math.round( document.documentElement.clientWidth * 0.85 / 2 *100)/100;  // 宽度高度值的一半
            let widthNum = Math.round( document.documentElement.clientWidth / 2 *100)/100;  // 宽度高度值的一半
            let a = heightNum - 26 / 152 * heightNum ;
            let tops = heightNum - a + 'px'; // 高度一半 - 自身高度一半
            let lefts = widthNum  + 'px'; // 宽度一半 - 自身宽度一半
            return {
                width: '2px',
                height: a + 'px',
                top: tops,
                left: lefts,
                transform: `rotate(${rota}deg)`
            }
        },
        startAward() {
            if (this.isEdit) return;
            if (this.clicks) return;
            if (this.luckDraw.lotteryInfo.contactType == 1) {
                if (!this.luckDraw.address || !this.luckDraw.address.name) {
                    let query = this.$route.query;
                    let newQuery = JSON.parse(JSON.stringify(query));
                    this.$router.push({ path: 'contactInfo', query: newQuery });
                    return;
                }
            }
            this.clicks = true;
            this.loadinData = true;
            let postData = {
                activityID: this.$route.query.id
            };
            if (this.$route.query.shareLevel) {
                postData.shareLevel = this.$route.query.shareLevel;
            }
            executeLottery(postData).then(res => {
                this.loadinData = false; 
                if (res.errorCode == 0) {
                    if (res.data && res.data.isWin) {
                        window.h5AllData.awardDetail = res.data.gift;
                        this.desc = this.luckDraw.myDataGifts.length > 0 ? this.luckDraw.advancedSetting.shareWinContent : this.luckDraw.advancedSetting.shareNowinContent;
                        this.set_luckDrawPopupAwardType('2');
                    }else {
                        res.data.gift = {
                            giftID: '-1'
                        }
                        this.set_luckDrawPopupAwardType('1');
                    }
                    this.luckDraw.lotteryInfo.totalLimit = res.data.totalLeftCount;
                    this.luckDraw.lotteryInfo.dailyLimit = res.data.dailyLeftCount;
                    if (res.data.isNoGift) {
                        this.clicks = false;
                        app.alert(this.luckDraw.lotteryInfo.noGiftNotify);
                        return;
                    }else {
                        for (let index = 0; index < this.zhuanpanData.length; index++) {
                            const element = this.zhuanpanData[index];
                            if (res.data.gift.giftID == element.id) {
                                this.listCurrentIndex = index;
                                break;
                            }
                        }
                        setTimeout( ()=> { // 转盘
                            if (res.data.isWin) {
                                this.luckDraw.myDataGifts.push(res.data.gift);
                            }
                            this.clicks = false;
                            this.set_luckDrawPopupAwardFalg(true);
                        }, 5000)
                    }
                }else if (res.errorCode == 100301){
                    this.clicks = false;
                    let urls = res.errorMessage + encodeURIComponent(location.href);
                    // app.alert(encodeURIComponent(urls))
                    window.location.href = urls;
                    // this.$router.replace(encodeURIComponent(urls));
                }else if (res.errorCode == 100212) {
                    let query = this.$route.query;
                    let newQuery = JSON.parse(JSON.stringify(query));
                    this.$router.push({ path: 'contactInfo', query: newQuery });
                }else {
                    this.clicks = false;
                    app.alert(res.errorMessage)
                }
            })
        },
        tralg(type) {
            if (this.isEdit) return;
            this.listCurrentIndex = -1;
            this.set_luckDrawPopupAwardFalg(false);
            if (type == 'detail') {
                if (this.luckDraw.lotteryInfo.contactType == 2 && (!this.luckDraw.address || !this.luckDraw.address.name)) {
                    let query = this.$route.query;
                    let newQuery = JSON.parse(JSON.stringify(query));
                    newQuery.code = window.h5AllData.awardDetail.code;
                    this.$router.push({ path: 'contactInfo', query: newQuery });
                }else {
                    let query = this.$route.query;
                    let newQuery = JSON.parse(JSON.stringify(query));
                    newQuery.code = window.h5AllData.awardDetail.code;
                    this.$router.push({ path: 'awardDetail', query: newQuery });
                }
            }
        },
        gotoDetail(item) {
            if (this.isEdit) return;
            this.listCurrentIndex = -1;
            window.h5AllData.awardDetail = item;
            if (this.luckDraw.lotteryInfo.contactType == 2 && (!this.luckDraw.address || !this.luckDraw.address.name) ) {
                let query = this.$route.query;
                let newQuery = JSON.parse(JSON.stringify(query));
                newQuery.code = item.code;
                this.$router.push({ path: 'contactInfo', query: newQuery });
            }else {
                let query = this.$route.query;
                let newQuery = JSON.parse(JSON.stringify(query));
                query.code = item.code;
                this.$router.push({ path: 'awardDetail', query: newQuery });
            }
        },
        zhuanpanPush(index, img, isNothing = true) {
            if (isNothing) {
                this.zhuanpanData.push({
                    img: zp0,
                    giftsId: '-1'
                });
            }
            if (this.gifts[index].isConsolation) { // 是否是安慰奖
                this.gifts[index].img = zp900;
            }else {
                this.gifts[index].img = img;
            }
            this.zhuanpanData.push(this.gifts[index]);
        },
        resetZhuanpanData() {
            let lengs = this.gifts.length;
            if (lengs == 0) return;
            this.zhuanpanData = [];
            this.zhuanpanData.push({
                img: zp0,
                id: '-1'
            });
            this.gifts[0].img = zp1;
            this.zhuanpanData.push(this.gifts[0]); // 2 个了
            if (lengs == 1) {
                 this.zhuanpanData.push({
                    img: zp0,
                    id: '-1'
                });
                this.zhuanpanData.push({
                    img: zp0,
                    id: '-1'
                });
            }
            if (lengs == 2) {
                this.zhuanpanPush(1, zp2);
            }
            if (lengs == 3) {
                this.zhuanpanPush(1, zp2);
                this.zhuanpanPush(2, zp3);
            }
            if (lengs == 4) {
                this.zhuanpanPush(1, zp2, false);
                this.zhuanpanPush(2, zp3, false);
                this.zhuanpanPush(3, zp4);
            }
            if (lengs == 5) {
                this.zhuanpanPush(1, zp2);
                this.zhuanpanPush(2, zp3, false);
                this.zhuanpanPush(3, zp4);
                this.zhuanpanPush(4, zp5, false);
            }
            if (lengs == 6) {
                this.zhuanpanPush(1, zp2, false);
                this.zhuanpanPush(2, zp3, false);
                this.zhuanpanPush(3, zp4);
                this.zhuanpanPush(4, zp5, false);
                this.zhuanpanPush(5, zp6, false);
            }
        },
        sharePage() {
            let that = this;
            let shareLevel = this.shareLevel;
            let desc = this.desc;
            let name = this.luckDraw.baseInfo.name;
            let shareImage = this.luckDraw.advancedSetting.shareImage;
            if (shareLevel) {
                ++shareLevel;
            }else {
                shareLevel = 1;
            }
            if(shareImage.indexOf('https') == -1) {
                shareImage = 'https:' + shareImage;
            }
            let pengyoulink='',penyouquanlink='';
            if ( this.luckDraw.advancedSetting.shareUrl.indexOf('?') != -1) {
                 pengyoulink = `${this.luckDraw.advancedSetting.shareUrl}`+ encodeURIComponent(`&sourceType=2&shareLevel=${shareLevel}`);
                 penyouquanlink = `${this.luckDraw.advancedSetting.shareUrl}`+ encodeURIComponent(`&sourceType=1&shareLevel=${shareLevel}`);
                //  penyouquanlink = `${this.luckDraw.advancedSetting.shareUrl}&sourceType=1&shareLevel=${shareLevel}`;
            }else {
                 pengyoulink = `${this.luckDraw.advancedSetting.shareUrl}`+ encodeURIComponent(`?sourceType=2&shareLevel=${shareLevel}`);
                 penyouquanlink = `${this.luckDraw.advancedSetting.shareUrl}`+ encodeURIComponent(`?sourceType=1&shareLevel=${shareLevel}`);
                // pengyoulink = `${this.luckDraw.advancedSetting.shareUrl}?sourceType=2&shareLevel=${shareLevel}`;
                // penyouquanlink = `${this.luckDraw.advancedSetting.shareUrl}?sourceType=1&shareLevel=${shareLevel}`;
            }
            let pengyouquan = {
                title: name,
                desc: desc,
                imgUrl: shareImage,
                link: penyouquanlink,
                success: function() {
                }
            };
            let penyou = {
                title: name,
                desc: desc,
                imgUrl: shareImage,
                link: pengyoulink,
                success: function() {
                    // alert('peng1111')
                    // upAction({
                    //     type: '4',
                    //     activityID: that.activityID,
                    //     shareLevel: that.shareLevel
                    // }).then(res => {
                    //     console.log(res);
                    // })
                },
               
            };
            wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
                wx.showMenuItems({ // 要显示的菜单项，所有menu项见附录3
                    menuList: [
                        "menuItem:share:appMessage",
                        "menuItem:share:timeline"
                    ]
                });
                wx.checkJsApi({
                    jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'],
                    success: function(res) {
                        if (res.checkResult.updateAppMessageShareData) {
                            wx.updateAppMessageShareData(penyou);
                        }else {
                            wx.onMenuShareAppMessage(penyou);
                        }
                        if (res.checkResult.updateTimelineShareData) {
                            wx.updateTimelineShareData(pengyouquan);
                        }else {
                            wx.onMenuShareTimeline(pengyouquan);
                        }
                    }
                })
                wx.getNetworkType({
                    success: function(res) {
                        if (!that.isFristIn){
                            return;
                        }
                        let pvData = {
                            activityID: that.activityID,
                        };
                        if(res.networkType == 'wifi') {
                            pvData.networkType = '1'
                        }else {
                            pvData.networkType = '2'
                        }
                        if (that.$route.query.sourceType) {
                            pvData.sourceType = that.$route.query.sourceType;
                        }
                        if(that.$route.query.shareLevel) {
                            pvData.shareLevel = that.$route.query.shareLevel;
                        }
                        upPv(pvData).then(res => {
                        })
                    }
                })
            })
        },
        editContactInfo() {
            if (this.isEdit) return;
            let query = this.$route.query;
            let newQuery = JSON.parse(JSON.stringify(query));
            this.$router.push({ path: 'contactInfo', query: newQuery });
        }
    },
    created() {
        console.log(app.base.device);
        this.set_loadingEnd(true);
        this.resetZhuanpanData();
        this.activityID = this.$route.query.id;
        this.shareLevel = this.$route.query.shareLevel ? this.$route.query.shareLevel : '';
        if (!this.isEdit) {
            wx.ready(function() {
                wx.hideAllNonBaseMenuItem();
            })
            this.desc = this.luckDraw.myDataGifts.length > 0 ? this.luckDraw.advancedSetting.shareWinContent : this.luckDraw.advancedSetting.shareNowinContent;
            if (this.luckDraw.advancedSetting.isCanShare) {
                this.sharePage();
            };
            this.$nextTick(()=> {
                if (this.autoStartLuckDraw) {
                    this.startAward();
                    this.set_autoStartLuckDraw(false);
                }
            })
        }
    },
    watch: {
        gifts(newVal) {
            this.resetZhuanpanData();
        }
    },
    /* beforeRouteEnter (to, from, next) {
        if (to.query.edit != 1) {
            getLotteryData({
                id:to.query.id
            }).then(res => {
                if (res.errorCode == 0) {
                    let data = res.data;
                    window.h5AllData = { // 模拟数据
                        luckDraw: {
                            id: data.id,
                            baseInfo: {
                                name: data.bizData.name,
                                startTime: data.bizData.startTime,
                                endTime: data.bizData.endTime,
                                isPublish: data.bizData.isPublish,
                                // url: "",
                                // limitCount: 10000,  //  参与人数限制，没用
                                visualUserCount: 0,  // 抽奖的时候没用，
                                isShowUserCount: data.bizData.isShowUserCount,
                                userCount: data.statisticData.customerCount,
                                activityInfo: data.bizData.activityInfo
                            },
                            advancedSetting: {
                                isCanShare: data.bizData.isCanShare,
                                shareImage: data.bizData.shareImage,
                                shareWinContent: data.bizData.shareWinContent,
                                shareNowinContent: data.bizData.shareNowinContent,
                                shareUrl:data.bizData.shareUrl,  // 分享的url
                            },
                            lotteryInfo: {
                                dailyLimit: data.myData.dailyLeftCount,
                                totalLimit: data.myData.totalLeftCount,
                                noGiftNotify: data.bizData.noGiftNotify,
                                contactType: data.bizData.contactType,  // 0 不用填写 1 参与前，2 参与后
                            },
                            gifts: data.bizData.gifts,
                            h5Data: JSON.parse(data.h5Data),
                            myDataGifts: data.myData.gifts,
                            address: data.myData.address,
                        },
                        awardDetail: {
                        }
                    };
                    app.tool.setDocTitle(data.bizData.name);
                    next();
                }else {
                    app.alert(res.errorMessage);
                }
            });
        }else {
            if (!window.h5AllData) {
                window.h5AllData = { // 模拟数据
                    luckDraw: {
                        id: "b5c3da18ccc74376b3492802e9c6d9f0",
                        templateID: null,
                        createTime: "2018-12-10T03:47:03.421Z",
                        updateTime: "2018-12-14T03:17:37.278Z",
                        createUserID: "00000000000000000000000000000000",
                        baseInfo: {
                            name: "参与活动赢大奖",
                            startTime: "2018-12-14T02:58:21Z",
                            endTime: "2018-12-14T02:58:21Z",
                            isPublish: false,
                            url: "",
                            limitCount: 10000,
                            visualUserCount: 0,
                            isShowUserCount: true,
                            userCount: 0,
                            activityInfo: "点击“开始”转盘开始转动，最终指针指着的即为您所中的奖品"
                        },
                        advancedSetting: {
                            isCanShare: true,
                            shareImage: "1",
                            shareWinContent: "​我已经在活动中抽到了奖品，你也快来抽大奖吧！",
                            shareNowinContent:
                            "​轻轻松松就能抽到大奖，积攒多年的人品终于有用了，你也赶紧来抽奖吧！！"
                        },
                        lotteryInfo: {
                            totalLimit: -1,
                            dailyLimit: 3,
                            winLimit: 1,
                            totalWinPrecent: 10.0,
                            noGiftNotify: "奖品已经派完",
                            contactType: 0
                        },
                        gifts: [
                            {
                            id: "36fb60143991409283db8c6c942a2dab",
                            levelName: "一等奖",
                            name: "价值100元礼品",
                            count: 0,
                            operationNotify: "凭券联系现场工作人员兑奖",
                            address: "请填写您的兑奖地址或者门店地址",
                            telphone: "88888888",
                            cashStartTime: "2018-12-14T02:58:21Z",
                            cashEndTime: "2018-12-14T02:58:21Z",
                            isConsolation: false
                            },
                            {
                            id: "fca6d44bfdc940ee87a4242a0a145050",
                            levelName: "二等奖",
                            name: "价值50元礼品",
                            count: 0,
                            operationNotify: "凭券联系现场工作人员兑奖",
                            address: "请填写您的兑奖地址或者门店地址",
                            telphone: "88888888",
                            cashStartTime: "2018-12-14T02:58:21Z",
                            cashEndTime: "2018-12-14T02:58:21Z",
                            isConsolation: false
                            },
                            {
                            id: "4f8674907d594b9fa8595ca1477cd7e0",
                            levelName: "三等奖",
                            name: "价值10元礼品",
                            count: 0,
                            operationNotify: "凭券联系现场工作人员兑奖",
                            address: "请填写您的兑奖地址或者门店地址",
                            telphone: "",
                            cashStartTime: "2018-12-14T02:58:21Z",
                            cashEndTime: "2018-12-14T02:58:21Z",
                            isConsolation: false
                            }
                        ],
                        h5Data: {
                            awardDetailName: "长沙市校管家教育科技有限公司",
                            awardDetaiInfo: "兑换券详情"
                        },
                        address: {
                            name: 'xiaogj',
                            mobile: '13800000000',
                            province: '北京市',
                            city: '市辖区',
                            region: '东城区',
                            address: '平安街道103号'
                        }
                    },
                    awardDetail: {
                        giftId: "1",
                        id: "", // id
                        levelName: "一等奖", // 奖品等级名称
                        name: "价值100元礼品", // 奖品名称
                        count: 0, // 奖品数量
                        operationNotify: "凭券联系现场工作人员兑奖", // 操作提示
                        address: "请填写您的兑奖地址或者门店地址", // 兑换地址
                        telphone: "88888888", // 联系电话
                        cashStartTime: app.tool.getNowFormatDate(), // 兑换开始时间
                        cashEndTime: app.filters.formatDatetime(
                            new Date().getTime() + 3600 * 1000 * 24 * 7,
                            "yyyy-MM-dd hh:mm:ss"
                        ), // 兑换结束时间
                        isConsolation: false // 是否是安慰奖
                    }
                };
            }
            next();
        }
    } */
};

</script>

<style scoped>
@import "./css/luck.scss";
@import "./css/animations.scss";

.award-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.titleImgBox {
  z-index: 699;
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
  display: block;
}

.txt_style_1 {
    text-align: center;
}
.hd-Special-bgImgInfo {
    background-image: url('./image/homeBg.png');
    background-size: cover;
    background-color: rgb(254, 103, 95);
    padding-bottom: 60px;
    /* margin-bottom: 12px; */
}

.activity-lottery-winning {
    background-color: #fff;
}

.titleImg .editTarget-titleBox {
    width: 80%;
}

.joinNumLine {
    color: #fff;
    font-size: 15px;
}

.joinNumLineText {
    color: #fff;
    font-size: 15px;
}
.weui-mask_transparent {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}
.weui-toast {
    position: fixed;
    z-index: 5000;
    width: 7.6em;
    min-height: 7.6em;
    top: 180px;
    left: 50%;
    margin-left: -3.8em;
    background: rgba(17,17,17,0.7);
    text-align: center;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
}
@keyframes weuiLoading {
	0% {
		-webkit-transform: rotate3d(0,0,1,0deg);
		transform: rotate3d(0,0,1,0deg)
	}

	100% {
		-webkit-transform: rotate3d(0,0,1,360deg);
		transform: rotate3d(0,0,1,360deg)
	}
}
.weui-icon_toast.weui-loading {
	margin: 30px 0 0;
	width: 38px;
	height: 38px;
	vertical-align: baseline
}
.weui-loading {
	width: 20px;
	height: 20px;
	display: inline-block;
	vertical-align: middle;
	-webkit-animation: weuiLoading 1s steps(12,end) infinite;
	animation: weuiLoading 1s steps(12,end) infinite;
	background: transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;
	background-size: 100%
}
.weui-toast__content {
    margin: 0 0 15px;
}

.myAwardInfo .awardNameDef {
    display: inline-block;
    vertical-align: bottom;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 13px;
    color: #333333;
    font-family:PingFangSC-Regular;
}
.myAwardInfo .awardInfoDetail {
    font-size: 13px;
    color: #999999;
    font-family:PingFangSC-Regular;
}
.awardLimitBox {
    display: inline-block;
    vertical-align: bottom;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px; 
    color: #333;
    width: 75%;
}

.titleImg {
    text-align: center;
    padding-top: 20px;
}
</style>
