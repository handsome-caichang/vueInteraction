<template>
<div class="activity-lottery-winning body">
    <div class="main home" style="height: 100%;">
        <div class="editTarget-homeBoxBg hd-Special-bgImgInfo">
            <div class="titleImg titleDown">
                <img id="titleBox" class="editTarget-titleBox" :src="title"/>
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
                        <div class="txt_style_1 joinNumLine ">已有<span class="ipt_num joinNumLineText">62614</span>人参与</div>
                        <div class="txt_style_1 ">
                            <div class="dayDraw" style="font-size: 0.6rem; color: rgb(250, 82, 8);">
                                您今天还有
                                <span class="ipt_num specil dayDrawCount" style="font-size: 0.6rem; color: rgb(250, 82, 8);">3</span>
                                次抽奖机会
                            </div>
                        </div>
                    </div>
                </div>
                <div id="myAwardBox" class="poupMainBox" style="background-color: rgb(254, 103, 95); border-color: rgb(255, 255, 255);">
                    <img class="titleImgBox" :src="myAwardImg"/>
                    <div class="myAwardInfo rowSpacing">
                        <div class="award-box">
                            <div class="awardLimitBox">
                                <span class="awardText awardNameDef">一等奖：价值100元礼品</span>
                            </div>
                            <span class="awardInfoDetail" @click="gotoDetail">查看详情</span>
                        </div>
                        <div class="infoDeviceLine"></div>
                    </div>
                    <!-- <div class="myAwardInfo rowSpacing">
                        <div style="line-height: 2.6rem; padding-left: 0.05rem;font-size: 0.75rem;">暂无中奖记录</div>
                    </div> -->
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
                                    <div class="unComfortLine awardItem "><span class="awardStyle">一等奖</span>: <span class="award">价值100元礼品</span></div>
                                    <div class="unComfortLine awardItem "><span class="awardStyle">二等奖</span>: <span class="award">价值50元礼品</span></div>
                                    <div class="unComfortLine awardItem "><span class="awardStyle">三等奖</span>: <span class="award">价值10元礼品</span></div>
                                    <div class="unComfortLine awardItem "><span class="awardStyle">四等奖</span>: <span class="award">价值5元小礼品</span></div>
                                    <div class="unComfortLine awardItem "><span class="awardStyle">五等奖</span>: <span class="award">价值5元小礼品</span></div>
                                    <div class="unComfortLine awardItem "><span class="awardStyle">六等奖</span>: <span class="award">价值5元小礼品</span></div>
                                    <div class="unComfortLine awardItem "><span class="awardStyle">七等奖</span>: <span class="award">价值5元小礼品</span></div>
                                    <div class="unComfortLine awardItem "><span class="awardStyle">八等奖</span>: <span class="award">价值5元小礼品</span></div>
                                    <div class="awardItem anwei "><span class="awardStyle">安慰奖</span>: <span class="award">价值5元小礼品</span></div>
                                </div>
                                <div class="infoDeviceLine ruleBoxLine"></div>
                            </div>
                            <div id="gameDateTime" class="rowSpacing poupLine" data-sortkey="b">
                                <div class="titleTextBox">
                                    <div class="awardTitleText" style="font-size: 0.75rem; color: rgb(255, 255, 255);">活动时间</div>
                                </div>
                                <div class="awardDetailText" style="font-size: 0.7rem; color: rgb(255, 255, 255);"><span id="startDate">2018年5月9日 13:48</span>-<span id="endDate">2018年5月16日 13:48</span></div>
                                <div class="infoDeviceLine ruleBoxLine"></div>
                            </div>
                            <div id="explainBox" class="rowSpacing poupLine" data-sortkey="e">
                                <div class="titleTextBox">
                                    <div class="awardTitleText" style="font-size: 0.75rem; color: rgb(255, 255, 255);">活动说明</div>
                                </div>
                                <div id="exlainInfo" class="awardDetailText" style="font-size: 0.7rem; color: rgb(255, 255, 255);">点击“开始”转盘开始转动，最终指针指着的即为您所中的奖品。</div>
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
    <resule-box v-show="luckDrawPopupAwardFalg" @tralg="tralg" :awardDetail="luckDrawPopupAwarddDetail" :type="luckDrawPopupAwardType"></resule-box>
</div>
</template>

<script>
import resuleBox from './child/resuleBox'
import device from './image/device.png'
import rotatePan from './image/rotatePan.png'
import zp0 from './image/zp0.png'
import zp1 from './image/zp1.png'
import zp2 from './image/zp2.png'
import zp3 from './image/zp3.png'
import zp4 from './image/zp4.png'
import zp5 from './image/zp5.png'
import startBtn from './image/startBtn.png'
import title from './image/title.png'
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
            title,
            myAwardImg,
            activeRule,
            awardList: [ // 当前奖品
                {
                    levelName: '一等奖',
                    giftsId: '1',
                },
                {
                    levelName: '二等奖',
                    giftsId: '2',
                },
                {
                    levelName: '三等奖',
                    giftsId: '3',
                },
            ],
            awardDetail: {  // 当前中奖的详情
                levelName: '一等奖',
                name: '价值300元的礼品',
                giftsId: '1',
                id: '45235'
            },
            loadinData: false, // 加载抽奖
            zhuanpanData: [  // 转盘的数组
                {
                    img: zp0,
                    giftsId: '0'
                },
                {
                    img: zp0,
                    giftsId: '0'
                },
                {
                    img: zp2,
                    giftsId: '2'
                },
                {
                    img: zp0,
                    giftsId: '0'
                },
                {
                    img: zp3,
                    giftsId: '3'
                },
                {
                    img: zp4,
                    giftsId: '4'
                },
            ],
            listCurrentIndex: -1, // 当前中奖的在转盘列表的索引
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
           'luckDrawPopupAwarddDetail',
       ])
    },
    components: {
        resuleBox
    },
    methods: {
        ...mapMutations([
            'set_luckDrawPopupAwardFalg',
            'set_luckDrawPopupAwardType',
            'set_luckDrawPopupAwarddDetail',
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
            setTimeout(() => { // 模拟调用接口
                let res = {
                    errorCode: 0,
                    data: {
                        levelName: '一等奖',
                        name: '价值300元的礼品',
                        giftsId: '3',
                        id: '45235' 
                    }
                };
                // let res = {
                //     errorCode: 1,
                //     data: {
                //         giftsId: '0',
                //     }
                // };
                this.loadinData = false; 
                for (let index = 0; index < this.zhuanpanData.length; index++) {
                   const element = this.zhuanpanData[index];
                   if (res.data.giftsId == element.giftsId) {
                       this.listCurrentIndex = index;
                       break;
                   }
                }
                if (res.errorCode == 0) {
                    this.awardDetail = res.data;
                    this.set_luckDrawPopupAwarddDetail(this.awardDetail);
                    this.set_luckDrawPopupAwardType('2');
                }else {
                    this.set_luckDrawPopupAwardType('1');
                }
                setTimeout( ()=> { // 转盘
                    this.set_luckDrawPopupAwardFalg(true);
                }, 5000)
            }, 3000)
        },
        tralg(type) {
            this.listCurrentIndex = -1;
            this.set_luckDrawPopupAwardFalg(false);
            if (type == 'detail') {
                this.$router.push(`awardDetail/${this.luckDrawPopupAwarddDetail.giftsId}`);
            }
        },
        gotoDetail() {
            this.$router.push('awardDetail/123');
        },
    },
    created() {
       
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
