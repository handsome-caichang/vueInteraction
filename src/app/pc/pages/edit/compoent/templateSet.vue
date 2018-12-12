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
                    <input v-model="cloneH5Data.awardDetailName" @input="awardDetailChange" class="activeName input mainInput name" type="text"/>
                </div>
            </div>
            <div class="flag">*</div>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
    export default {
        name: 'templateSet',
        props: {
            iframeConentObj: {
                type: Object,
                default() {
                    return {
                        
                    }
                }
            },
            h5Store: {
                type: Object,
                default() {
                    return {
                        
                    }
                }
            }
        },
        computed: {
            ...mapState([
                'h5Data'
            ])
        },
        data() {
            return {
                cloneH5Data: null,
            }
        },
        methods: {
            ...mapMutations([
                'set_h5Data'
            ]),
            awardDetailChange() {
                this.h5Store.commit('set_h5Data', this.cloneH5Data);
            }
        },
        created() {
            this.cloneH5Data = app.tool.clone(this.h5Data);
        },
        beforeDestroy() {
            this.set_h5Data(this.cloneH5Data);
        },
    }
</script>
<style scoped>
@import '../../../assets/css/edit.scss';
</style>
