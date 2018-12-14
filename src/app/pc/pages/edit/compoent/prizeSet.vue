<template>
    <div class="settingBox awardsSetting" style="display: block;">
        <div class="awardBoxTitleWarp">
            <div class="awardBoxTitle">                     
                <div class="awardNums commBg">
                    <span class="topAwardExplain text">请设置活动需要派发的奖项</span>
                    <div class="comfortCheckbox">
                        <input type="checkbox" id="comfortSetting" :disabled="editData.bizData.giftInfo.length >= 6" v-model="isConsolation" class="ng-untouched ng-valid ng-dirty ng-valid-parse">
                        <label for="comfortSetting" style="margin: 0px;">设置安慰奖</label>
                    </div>
                </div>
                <div class="awardLevelBox">
                    <div class="commTabBox">
                        <div class="commTab awardLevelItem norLevelItem" v-for="(item, index) in editData.bizData.giftInfo" :key="index" :class="{'checked': index == currentIndex}" @click="currentIndex = index">
                            <span class="commTabName awardItemName">{{tabName(item, index)}}</span>
                        </div>
                        
                    </div>
                    <div class="awardNumOptBox">
                        <button  class="awardNumOpt pointer delAwardNum" :class="{'disabled': isConsolation ? (editData.bizData.giftInfo.length < 3) : (editData.bizData.giftInfo.length < 2)}" :disabled="isConsolation ? editData.bizData.giftInfo.length < 3 : editData.bizData.giftInfo.length < 2"  @click="del(false)"></button>
                        <button  class="awardNumOpt pointer addAwardNum" :class="{'disabled': editData.bizData.giftInfo.length >= 6}"  :disabled="editData.bizData.giftInfo.length >= 6" @click="add(false)" ></button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 奖项 -->
        <div class="scrollBox awardBox relative">
            <div class="awardBoxTitle_holder"></div>
             <div class="awardDetail" style="overflow: visible;">
                 <!-- 奖项一 -->
                <div class="awardSettingBox ng-scope" style="left: 0px; display: block;">
                    <p class="underLineWay">
                        <span class="fontWeight ng-binding">基本选项 · 奖项一</span>
                    </p>

                    <div class="settingLine ng-scope">
                        <div class="leftTitle">
                            <span class="name">奖项等级名称：</span>
                        </div>
                        <div class="content flex-1">
                            <div class="main">
                                <input v-model="editData.bizData.giftInfo[currentIndex].levelName" class="awardStyle input mainInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>
                        </div>
                        <div class="flag">*</div>
                    </div>

                    <div class="awardDescribeBox settingLine">
                        <div class="leftTitle">
                            <span class="name ng-binding">奖项名称：</span>
                        </div>
                        <div class="content flex-1">
                           <div class="main ng-scope">
                               <input v-model="editData.bizData.giftInfo[currentIndex].name" class="awardDescribe input mainInput ng-pristine ng-untouched ng-valid" type="text">
                               <div class="tipsColor ERR_lock ERR_lock_strict" style="display: block;">
                                   已生成订单的商品名称不会受修改的影响
                                </div>
                            </div>
                        </div>
                        <div class="flag">*</div>
                    </div>

                    <div class="awardDescribeBox settingLine">
                        <div class="leftTitle">
                            <span class="name ng-binding">奖项数量：</span>
                        </div>
                        <div class="content flex-1">
                           <div class="main ng-scope">
                               <input v-model.number="editData.bizData.giftInfo[currentIndex].count" class="awardDescribe input mainInput ng-pristine ng-untouched ng-valid" type="text">
                            </div>
                        </div>
                        <div class="flag">*</div>
                    </div>
                </div>
                
                <div class="awardSettingBox ng-scope" style="left: 0px; display: block;">
                    <p class="underLineWay">
                        <span class="fontWeight ng-binding">兑奖选项 · 奖项一</span>
                    </p>

                    <div class="setAwardOptInfoBox settingLine">
                        <div class="leftTitle">
                            <span class="name">操作提示：</span>
                        </div>
                        <div class="content flex-1">
                            <div class="main">
                                <input  v-model="editData.bizData.giftInfo[currentIndex].operationNotify" class="awardOptInfo input mainInput" type="text">
                            </div>
                        </div>
                        <div class="flag">*</div>
                    </div>

                    <div class="setAwardOptInfoBox settingLine">
                        <div class="leftTitle">
                            <span class="name">兑奖地址：</span>
                        </div>
                        <div class="content flex-1">
                            <div class="main">
                                <input v-model="editData.bizData.giftInfo[currentIndex].address" class="awardOptInfo input mainInput" type="text">
                            </div>
                        </div>
                        <div class="flag">*</div>
                    </div>

                    <div class="setAwardOptInfoBox settingLine">
                        <div class="leftTitle">
                            <span class="name">联系电话：</span>
                        </div>
                        <div class="content flex-1">
                            <div class="main">
                                <input  v-model.number="editData.bizData.giftInfo[currentIndex].telphone" class="awardOptInfo input mainInput" type="text">
                            </div>
                        </div>
                        <div class="flag">*</div>
                    </div>

                     <div class="setCodeTimeBox settingLine" ed-hide="award.$type.isJZcoupon">
                    <div class="leftTitle">
                        <span class="name ng-binding">兑奖期限：</span>
                    </div>

                    <div class="content flex-1">
                        <div class="codeTimeBox">
                            <div class="timeRangeBox flex">
                                <el-date-picker
                                    class="input flex-1"
                                    v-model="editData.bizData.giftInfo[currentIndex].cashStartTime"
                                    type="datetime"
                                     value-format="yyyy-MM-dd HH:mm:ss"
                                    placeholder="开始时间">
                                </el-date-picker>
                                <span class="mid">至</span>
                                <el-date-picker
                                    class="input flex-1"
                                    v-model="editData.bizData.giftInfo[currentIndex].cashEndTime"
                                    type="datetime"
                                     value-format="yyyy-MM-dd HH:mm:ss"
                                    placeholder="结束时间">
                                </el-date-picker>
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
    import tool from 'pcAssets/js/tool.js'
    export default {
        name: 'prizeSet',
        props: {
        },
        data() {
            return {
                editData: window.h5AllData.luckDraw,
                h5AllData: window.h5AllData,
                currentIndex: 0,
                isConsolation: false,
            }
        },
         computed: {
        },
        methods: {
            tabName(item, index) {
                if (item.isConsolation) {
                    return '安慰奖'
                }else {
                    index += 1;
                    switch (index) {
                        case 1:
                            return '奖项一';
                            break;
                        case 2:
                            return '奖项二';
                            break;
                        case 3:
                            return '奖项三';
                            break;
                        case 4:
                            return '奖项四';
                            break;
                        case 5:
                            return '奖项五';
                            break;
                        case 6:
                            return '奖项六';
                            break;
                        default: return '奖项一'
                    }
                }
            },
            cloneEdit() {
            },
            initInfoBase(flag) { // true 代表安慰奖 
                let giftInfoBase = {
                    id: '',  // id 
                    levelName: "", // 奖品等级名称
                    name: '价值5元小礼品', // 奖品名称
                    count: 0, // 奖品数量
                    operationNotify: '凭券联系现场工作人员兑奖', // 操作提示
                    address: '请填写您的兑奖地址或者门店地址', // 兑换地址
                    telphone: '', // 联系电话
                    cashStartTime: app.tool.getNowFormatDate(), // 兑换开始时间
                    cashEndTime: app.filters.formatDatetime(
                        new Date().getTime() + 3600 * 1000 * 24 * 7,
                        "yyyy-MM-dd hh:mm:ss"
                    ), // 兑换结束时间
                    isConsolation: false // 是否是安慰奖
                };
                giftInfoBase.isConsolation = flag;
                if (flag) {
                    giftInfoBase.levelName = '安慰奖'
                }else {     
                    giftInfoBase.levelName = '奖项' + this.transNumber(this.editData.bizData.giftInfo.length + 1);
                }
                console.log(giftInfoBase);
                return giftInfoBase;
            },
            add(flag = false) {
                // let edit = this.cloneEdit();
                let lastList = this.editData.bizData.giftInfo.pop();  // 记录最后一个安慰奖
                if (lastList.isConsolation) {
                     this.editData.bizData.giftInfo.push(this.initInfoBase(flag));
                     this.editData.bizData.giftInfo.push(lastList);
                }else {
                     this.editData.bizData.giftInfo.push(lastList);
                     this.editData.bizData.giftInfo.push(this.initInfoBase(flag));
                }
                // this.set_editData(edit);
                if (flag) {
                    this.currentIndex =  this.editData.bizData.giftInfo.length - 1;
                }else if (lastList.isConsolation) {
                    this.currentIndex =  this.editData.bizData.giftInfo.length - 2;
                }else {
                    this.currentIndex =  this.editData.bizData.giftInfo.length - 1;
                }
            },
            del(flag = false) {
                // let edit = this.cloneEdit();
                let lastList =  this.editData.bizData.giftInfo.pop();  // 记录最后一个安慰奖
                if(lastList.isConsolation) {
                    if (!flag) { // 如果有安慰奖
                         this.editData.bizData.giftInfo.pop();
                         this.editData.bizData.giftInfo.push(lastList)
                    }
                }
                // this.set_editData(edit);
                if (lastList.isConsolation && !flag) {
                    this.currentIndex =  this.editData.bizData.giftInfo.length - 2;
                }else {
                    this.currentIndex =  this.editData.bizData.giftInfo.length - 1;
                }
            }, 
            transNumber(num) {
                switch (num) {
                    case 1:
                        return '一';
                        break;
                    case 2:
                        return '二';
                        break;
                    case 3:
                        return '三';
                        break;
                    case 4:
                        return '四';
                        break;
                    case 5:
                        return '五';
                        break;
                    default: return '一'
                }
            }
        },
        created() {
            this.$nextTick(()=> {
                this.h5AllData.awardDetail = this.editData.bizData.giftInfo[this.currentIndex];
            })
        },
        watch: {
            isConsolation(newVal) {
                if (newVal) {
                    // if (edit.bizData.giftInfo.length  == 5) {return;};
                    this.add(true);
                }else {
                    this.del(true);
                }
            },
            currentIndex(newVal) {
                this.h5AllData.awardDetail = this.editData.bizData.giftInfo[this.currentIndex];
            }
        }
    }
</script>
<style scoped>
@import '../../../assets/css/edit.scss';
</style>
