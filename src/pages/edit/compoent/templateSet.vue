<template>
    <div class="settingBox scrollBox" option="0">
        <p class="underLineWay">
            <span class="fontWeight">基本选项</span>
        </p>
        <div class="settingLine actNameSetting">
            <div class="leftTitle">
                <span class="name">奖品详情页面显示名称：</span>
            </div>
            <div class="content flex-1">
                <div class="main">
                    <input class="activeName input mainInput name" type="text"/>
                </div>
            </div>
            <div class="flag">*</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'templateSet',
        created() {
            
        }
    }
</script>
<style scoped>
@import '../../../assets/css/edit.scss';
</style>
