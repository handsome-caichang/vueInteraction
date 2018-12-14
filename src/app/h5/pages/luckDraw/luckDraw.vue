<template>
<div class="activity-lottery-winning body">
    <div class="main home" style="height: 100%;">
        <div class="editTarget-homeBoxBg hd-Special-bgImgInfo">
            <div class="titleImg titleDown">
                <img id="titleBox" class="editTarget-titleBox" :src="titleImg"/>
            </div>
            <div class="outercont">
                <div class="outer-cont defBgColor" style="cursor: pointer; z-index: 4;" :class="rotateClass"> 
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
                <div style="margin-bottom:70px;margin-top:20px;">
                    <div class="center_txt">
                        <div class="txt_style_1 joinNumLine " v-if="luckDraw.bizData.baseInfo.isShowUserCount">已有<span class="ipt_num joinNumLineText">{{luckDraw.bizData.baseInfo.userCount + luckDraw.bizData.baseInfo.visualUserCount}}</span>人参与</div>
                        <div class="txt_style_1 ">
                            <div class="dayDraw" style="font-size: 0.6rem; color: rgb(250, 82, 8);">
                                您今天还有
                                <span class="ipt_num specil dayDrawCount" style="font-size: 0.6rem; color: rgb(250, 82, 8);">{{luckDraw.bizData.lotteryInfo.dailyLimit}}</span>
                                次抽奖机会
                            </div>
                        </div>
                    </div>
                </div>
                <div id="myAwardBox" class="poupMainBox" style="background-color: rgb(254, 103, 95); border-color: rgb(255, 255, 255);">
                    <img class="titleImgBox" :src="myAwardImg"/>
                    <div class="myAwardInfo rowSpacing"  v-if="giftInfo.length != 0">
                        <div class="award-box" v-for="(item, index) in giftInfo" :key="index">
                            <div class="awardLimitBox">
                                <span class="awardText awardNameDef">{{item.levelName}}：{{item.name}}</span>
                            </div>
                            <span class="awardInfoDetail" @click="gotoDetail">查看详情</span>
                        </div>
                        <div class="infoDeviceLine"></div>
                    </div>
                    <div class="myAwardInfo rowSpacing" v-if="giftInfo.length == 0">
                        <div style="line-height: 2.6rem; padding-left: 0.05rem;font-size: 0.75rem;">暂无中奖记录</div>
                    </div>
                </div>
                <div id="actExplain" class="poupMainBox " style="background-color: rgb(254, 103, 95); border-color: rgb(255, 255, 255);">
                    <img class="titleImgBox" :src="activeRule"/>
                    <div class="ruleBoxBg editTarget-ruleBox"></div>
                    <div id="ruleBox">
                        <div id="activeRuleInfoBox" class="poupMainInfo poupMain">
                            <div id="awardLine" class="rowSpacing poupLine" data-sortkey="a">
                                <div class="titleTextBox">
                                    <div class="awardTitleText" style="font-size: 0.75rem; color: rgb(255, 255, 255);">活动奖品</div>
                                </div>
                                <div id="awardLineBox" class="awardDetailText" style="font-size: 0.7rem; color: rgb(255, 255, 255);">
                                    <div class="awardItem" v-for="(item, index) in giftInfo" :key="index"><span class="awardStyle">{{item.levelName}}</span>: <span class="award">{{item.name}}</span></div>
                                </div>
                                <div class="infoDeviceLine ruleBoxLine"></div>
                            </div>
                            <div id="gameDateTime" class="rowSpacing poupLine" data-sortkey="b">
                                <div class="titleTextBox">
                                    <div class="awardTitleText" style="font-size: 0.75rem; color: rgb(255, 255, 255);">活动时间</div>
                                </div>
                                <div class="awardDetailText" style="font-size: 0.7rem; color: rgb(255, 255, 255);"><span id="startDate">{{luckDraw.bizData.baseInfo.startTime}}</span>-<span id="endDate">{{luckDraw.bizData.baseInfo.endTime}}</span></div>
                                <div class="infoDeviceLine ruleBoxLine"></div>
                            </div>
                            <div id="explainBox" class="rowSpacing poupLine" data-sortkey="e">
                                <div class="titleTextBox">
                                    <div class="awardTitleText" style="font-size: 0.75rem; color: rgb(255, 255, 255);">活动说明</div>
                                </div>
                                <div class="awardDetailText" style="font-size: 0.7rem; color: rgb(255, 255, 255);"> {{luckDraw.bizData.baseInfo.activeInfo}}</div>
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
const zp0 = 'http://192.168.0.228/cc/zp0.png';
const zp1 = 'http://192.168.0.228/cc/zp1.png';
const zp2 = 'http://192.168.0.228/cc/zp2.png';
const zp3 = 'http://192.168.0.228/cc/zp3.png';
const zp4 = 'http://192.168.0.228/cc/zp4.png';
const zp5 = 'http://192.168.0.228/cc/zp5.png';
const zp6 = 'http://192.168.0.228/cc/zp6.png';
const zp900 = 'http://192.168.0.228/cc/zp900.png';
import startBtn from './image/startBtn.png'
import titleImg from './image/title.png'
import myAwardImg from './image/myAwardImg.png'
import activeRule from './image/activeRuleImg.png'
import {mapState,mapMutations} from 'vuex'
export default {
    name: "luckDraw",
    data() {
        return {
            device,
            rotatePan,
            startBtn,
            titleImg,
            myAwardImg,
            activeRule,
            loadinData: false, // 加载抽奖
            zhuanpanData: [  // 转盘的数组
            ],
            listCurrentIndex: -1, // 当前中奖的在转盘列表的索引
            luckDraw: window.h5AllData.luckDraw,
            h5AllData: window.h5AllData,
            giftInfo: window.h5AllData.luckDraw.bizData.giftInfo,
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
       ])
    },
    components: {
        resuleBox
    },
    methods: {
        ...mapMutations([
            'set_luckDrawPopupAwardFalg',
            'set_luckDrawPopupAwardType',
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
            let heightNum = Math.round( document.documentElement.clientWidth * 0.95 / 2 *100)/100;  // 图片宽度高度值的一半
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
            let heightNum = Math.round( document.documentElement.clientWidth * 0.95 / 2 *100)/100;  // 宽度高度值的一半
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
            this.loadinData = true;
            // setTimeout(() => { // 模拟调用接口
                let res = {
                    errorCode: 0,
                    data: {
                        giftId: "2",
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
                // let res = {
                //     errorCode: 1,
                //     data: {
                //         giftId: '0',
                //     }
                // };
                this.loadinData = false; 
                console.log(this.listCurrentIndex);
                for (let index = 0; index < this.zhuanpanData.length; index++) {
                   const element = this.zhuanpanData[index];
                   if (res.data.giftId == element.giftId) {
                       console.log(this.listCurrentIndex);
                       this.listCurrentIndex = index;
                       break;
                   }
                }
                if (res.errorCode == 0) {
                    window.h5AllData.awardDetail = res.data;
                    this.set_luckDrawPopupAwardType('2');
                }else {
                    this.set_luckDrawPopupAwardType('1');
                }
                setTimeout( ()=> { // 转盘
                    this.set_luckDrawPopupAwardFalg(true);
                }, 5000)
            // }, 3000)
        },
        tralg(type) {
            this.listCurrentIndex = -1;
            this.set_luckDrawPopupAwardFalg(false);
            if (type == 'detail') {
                this.$router.push(`awardDetail/${this.h5AllData.awardDetail.giftsId}`);
            }
        },
        gotoDetail() {
            this.$router.push('awardDetail/123');
        },
        zhuanpanPush(index, img, isNothing = true) {
            if (isNothing) {
                this.zhuanpanData.push({
                    img: zp0,
                    giftsId: '-1'
                });
            }
            if (this.giftInfo[index].isConsolation) { // 是否是安慰奖
                this.giftInfo[index].img = zp900;
            }else {
                this.giftInfo[index].img = img;
            }
            this.zhuanpanData.push(this.giftInfo[index]);
        },
        resetZhuanpanData() {
            let lengs = this.giftInfo.length;
            if (lengs == 0) return;
            this.zhuanpanData = [];
            this.zhuanpanData.push({
                img: zp0,
                giftsId: '-1'
            });
            this.giftInfo[0].img = zp1;
            this.zhuanpanData.push(this.giftInfo[0]); // 2 个了
            if (lengs == 1) {
                 this.zhuanpanData.push({
                    img: zp0,
                    giftsId: '-1'
                });
                this.zhuanpanData.push({
                    img: zp0,
                    giftsId: '-1'
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
        }
    },
    created() {
        this.resetZhuanpanData();
    },
    watch: {
        giftInfo(newVal) {
            this.resetZhuanpanData();
        }
    }
};

</script>

<style scoped>
@import "./css/luck.scss";
@import "./css/animations.scss";

.award-box {
    display: flex;
    justify-content: space-around;
}

.titleImgBox {
  z-index: 699;
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
}

.txt_style_1 {
    text-align: center;
}
.hd-Special-bgImgInfo {
    background-image: url('./image/homeBg.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-color: rgb(254, 103, 95);
    height: 100%;
}

.activity-lottery-winning {
    background-color: #fff;
}

.titleImg .editTarget-titleBox {
    width: 80%;
}

.joinNumLine {
    color: rgb(250, 82, 8);
    font-size: 0.6rem;
    text-shadow: rgb(255, 255, 255) 1px 0px 0px, rgb(255, 255, 255) -1px 0px 0px, rgb(255, 255, 255) 0px 1px 0px, rgb(255, 255, 255) 0px -1px 0px;
}

.joinNumLineText {
    color: rgb(250, 82, 8);
    font-size: 0.6rem;
    text-shadow: rgb(255, 255, 255) 1px 0px 0px, rgb(255, 255, 255) -1px 0px 0px, rgb(255, 255, 255) 0px 1px 0px, rgb(255, 255, 255) 0px -1px 0px;
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
}
.myAwardInfo .awardInfoDetail {
    font-size: 18px;
    color: rgb(255, 252, 0);
    width: 25%;
}
.awardLimitBox {
    display: inline-block;
    vertical-align: bottom;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px; 
    color: rgb(255, 255, 255);
    width: 75%;
}

.titleImg {
    text-align: center;
    padding-top: 20px;
}
</style>
