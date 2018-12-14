<template>
    <div class="settingBox scrollBox" option="0">
        <p class="underLineWay">
            <span class="fontWeight">基本选项</span>
        </p>
        <div class="settingLine actNameSetting">
            <div class="leftTitle">
                <span class="name">奖品详情名称：</span>
            </div>
            <div class="content flex-1">
                <div class="main">
                    <input v-model="luckDraw.h5Data.awardDetailName" class="activeName input mainInput name" type="text"/>
                </div>
            </div>
            <div class="flag">*</div>
        </div>
        <div class="settingLine actNameSetting">
            <div class="leftTitle">
                <span class="name">详情显示：</span>
            </div>
            <div class="content flex-1">
                <div class="main">
                    <input v-model="luckDraw.h5Data.awardDetaiInfo" class="activeName input mainInput name" type="text"/>
                </div>
            </div>
            <div class="flag">*</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'templateSet',
        props: {
        },
        computed: {
        },
        data() {
            return window.h5AllData
        },
        methods: {
        },
        created() {
        },
        beforeDestroy() {
        },
    }
</script>
<style scoped>
@import '../../../assets/css/edit.scss';
</style>
