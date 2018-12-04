<template>
    <div class="headBar">
        <a href=http://hd.fkw.com target='_blank'><img class='logo' src='//g-hd.faisys.com/version2/image/version3/HDlogo.png?v=666' /></a>
        <div class="headerRight">
            <div id="savePubButon" class="headBtn mbtn main-Button">预览<div id="newSavePubButon" class="headBtn mbtn main-Button"
                    ng-hide="!isSave"><span class="view">预览</span><span class="viewSave hide">预览并保存</span></div>
            </div>
            <div id="saveButon" class="headBtn mbtn main-Button" ng-class="{'disabled':!isSave}">保存</div>
            <div id="cancelButton" class="headBtn mbtn main-Button" title="退出编辑"><span class="cancelIcon"></span></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'editHaeder',
    data() {
        return {
        }
    },
    methods: {
       
    },
}
</script>

<style scoped >
  @import '../../../assets/css/edit.scss';
@import '../../../assets/css/version.scss';

</style>


