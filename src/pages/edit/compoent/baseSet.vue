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
                <input class="activeName input mainInput name" type="text"/>
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
                    v-model="startTime"
                    type="datetime"
                    placeholder="开始时间">
                </el-date-picker>
                <span class="mid">至</span>
                <el-date-picker
                    class="input flex-1"
                    v-model="endTime"
                    type="datetime"
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
                    <input id="hideJoinNum" type="radio"
                        name="isShowJoinNum" /><label for="hideJoinNum">隐藏</label>
                    <input id="showJoinNum" type="radio"
                        name="isShowJoinNum" /><label for="showJoinNum">展示</label>
                    <span id="limitNumBox" class="afterRadio" ed-show="game._flag.f2">
                        <span>并在实际人数上增加 <input type="text" id="virtualJoinNum" ng-model="game._setting.vjn" model-format="int" maxlength="6" class="input onlyNum minInput ng-pristine ng-untouched ng-valid ng-valid-maxlength"> 人</span>
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
                <input  id="noLimitNum" type="radio" name="isLimitNum"/><label for="noLimitNum">不限</label>
                <input id="LimitNum" type="radio" name="isLimitNum" /><label for="LimitNum">限制</label>
                <span id="limitNumBox" class="afterRadio">
                    <input type="text" id="theLimitNum" maxlength="6" class="input onlyNum minInput" />人参与
                </span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'baseSet',
        data() {
            return {
                startTime: '',
                endTime: ''
            }
        }
    }
</script>
<style scoped>
@import '../../../assets/css/edit.scss';
</style>
