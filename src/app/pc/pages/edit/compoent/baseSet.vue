<template>
<div class="settingBox scrollBox" option="0">
    <p class="underLineWay">
        <span class="fontWeight">基本选项</span>
    </p>
    <div class="settingLine actNameSetting">
        <div class="leftTitle">
            <span class="name">活动标题：</span>
        </div>
        <div class="content flex-1">
            <div class="main">
                <input v-model="editData.baseInfo.name" class="activeName input mainInput name" type="text"/>
            </div>
        </div>
        <div class="flag">*</div>
    </div>
    <div class="settingLine">
        <div class="leftTitle">
            <span class="name">活动时间：</span>
        </div>
        <div class="content flex-1">
            <div class="main flex">
                <el-date-picker
                    class="input flex-1"
                    v-model="editData.baseInfo.startTime"
                    type="datetime"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    placeholder="开始时间">
                </el-date-picker>
                <span class="mid">至</span>
                <el-date-picker
                    class="input flex-1"
                    v-model="editData.baseInfo.endTime"
                    type="datetime"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    placeholder="结束时间">
                </el-date-picker>
            </div>
        </div>
        <div class="flag">*</div>
    </div>
    <div>
        <div class="settingLine">
            <div class="leftTitle">
                <span class="name">参与人数：</span>
            </div>
            <div class="content flex-1">
                <div class="main">
                    <input id="hideJoinNum" type="radio" name="isShowJoinNum" v-model="editData.baseInfo.isShowUserCount" :value="false" /><label for="hideJoinNum">隐藏</label>
                    <input id="showJoinNum" type="radio" name="isShowJoinNum" v-model="editData.baseInfo.isShowUserCount" :value="true" /><label for="showJoinNum">展示</label>
                    <span class="afterRadio">
                        <span>并在实际人数上增加 <input type="number" min='0' max="999999" v-model.number="editData.baseInfo.visualUserCount" class="input onlyNum minInput"> 人</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="settingLine verTipsBox">
        <div class="leftTitle">
            <span class="name">参与人数限制：</span>
        </div>
        <div class="content flex-1">
            <div class="main" >
                <input type="radio" id="noLimitNum" v-model="editData.baseInfo.limitCount" :value="-1" name="isLimitNum"/><label for="noLimitNum">不限</label>
                <input type="radio" :class="{'idChecked': test}" id="LimitNum" v-model="editData.baseInfo.limitCount" :value="10000" name="isLimitNum" /><label for="LimitNum">限制</label>
                <span class="afterRadio" v-if="editData.baseInfo.limitCount != -1">
                    <input type="number" min='0' max="999999" v-model.number="editData.baseInfo.limitCount" class="input onlyNum minInput" />人参与
                </span>
            </div>
        </div>
    </div>
    <div class="settingLine">
        <div class="leftTitle">
            <span class="name">活动说明：</span>
        </div>
        <div class="content flex-1">
            <div class="main">
                <textarea v-model="editData.baseInfo.activityInfo" class="input scrollBox commTextarea"></textarea>
            </div>
        </div>
    </div>
    <p class="underLineWay">
        <span class="fontWeight">分享设置</span>
    </p>
    <div class="settingLine verTipsBox">
        <div class="leftTitle">
            <span class="name">分享活动：</span>
        </div>
        <div class="content flex-1">
            <div class="main" >
                <input id="openShard" :checked="editData.advancedSetting.isCanShare" type="radio" name="shar"/><label for="openShard">开启分享</label>
                <input id="offShard" :checked="!editData.advancedSetting.isCanShare" type="radio" name="shar" /><label for="offShard">关闭分享</label>
            </div>
        </div>
    </div>
    <div class="settingLine actNameSetting">
        <div class="leftTitle">
            <span class="name">获奖分享内容：</span>
        </div>
        <div class="content flex-1">
            <div class="main">
                <input v-model="editData.advancedSetting.shareWinContent" class="activeName input mainInput name" type="text"/>
            </div>
        </div>
        <div class="flag">*</div>
    </div>
    <div class="settingLine actNameSetting">
        <div class="leftTitle">
            <span class="name">没获奖分享内容：</span>
        </div>
        <div class="content flex-1">
            <div class="main">
                <input v-model="editData.advancedSetting.shareNowinContent" class="activeName input mainInput name" type="text"/>
            </div>
        </div>
        <div class="flag">*</div>
    </div>
    <div class="settingLine verTipsBox">
        <div class="leftTitle">
            <span class="name">分享图标：</span>
        </div>
        <div class="content flex-1">
           <div class="comUploadWarp menuBox">
                <div class="wxShareImg comUploadImg" style="overflow:hidden;">
                    <img :src="editData.advancedSetting.shareImage" width="60" height="60" style="display: block;">
                </div>
                <div class="comUploadBox">
                    <span class="btn">
                        <input ref="theSpecialDesigan" @change="fileChange($event)" class="selectbtn theSpecialDesigan" type="file" name="fileselect[]" accept="image/jpg,image/png,image/jpeg,image/bmp,image/gif">
                        <a href="javascript:;" @click="selectSpecImg" class="uploadify-button main-Button">
                            <span class="addIcon"></span>选择图片
                        </a>
                    </span>
                    <div class="comUploadExplain">请上传jpg、bmp、png、gif格式的图片</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    import { mapState } from 'vuex'
    import {getUploadToken} from 'pcApi/jie.js'
    import UploadVideoClass from 'pcAssets/js/oss-upload.js'
    import {fileUploadMixin} from 'pcAssets/js/uploadFile.js'
    export default {
        name: 'baseSet',
        mixins: [fileUploadMixin],
        data() {
            return {
                editData: window.h5AllData.luckDraw,
                currentfile: {}
            }
        },
        computed: {
            test() {
                if (this.editData.baseInfo.limitCount != -1) {
                    return true;
                }else {
                    return false;
                }
            }
        },
        methods: {
            fileChange(file) {
                let vf = this.createFileObj(file.target.files[0]);
                this.send(vf, this.editData.advancedSetting, 'shareImage');
            },
            selectSpecImg(files) {
                this.$refs.theSpecialDesigan.click();
            }
        },
        watch: {
        }
    }
</script>
<style scoped>
@import '../../../assets/css/edit.scss';
</style>
