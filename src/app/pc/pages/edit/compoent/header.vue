<template>
    <div class="headBar">
        <a href=http://www.xiaogj.com target='_blank'><img class='logo' :src='logonImg' /></a>
        <div class="headerRight">
            <div id="savePubButon" class="headBtn mbtn main-Button" @click="$emit('saveView')">预览并保存</div>
            <div id="saveButon" class="headBtn mbtn main-Button disabled">保存</div>
            <div id="cancelButton" class="headBtn mbtn main-Button" title="退出编辑" @click="$emit('close')"><span class="cancelIcon"></span></div>
        </div>
    </div>
</template>
<script>
import logonImg from 'pcAssets/images/logo.png'
export default {
    name: 'editHaeder',
    data() {
        return {
            logonImg
        }
    },
    methods: {
       
    },
}
</script>

<style scoped >
@import '../../../assets/css/edit.scss';
.headBar {
    position: absolute;
    top: 0;
    left: 0;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    width: 100%;
    min-width: 1270px;
    border-bottom: solid 1px #dadada;
    z-index: 200;
    box-shadow: 0 1px 6px rgba(0,0,0,0.1);
}
 .headBar .headerRight {
    position: absolute;
    top: 0;
    right: 16px;
    height: 100%;
    font-size: 0;
}
.version3 .main-Button {
    background: #4381fd;
    border: 1px solid #4381fd;
    color: #fff;
        border-radius: 4px;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
}
.version3 .main-Button.disabled{
    transition: none;
    cursor: not-allowed;
    background: #acc8ff;
    border-color: #acc8ff;
    color: #fff;
}
</style>


