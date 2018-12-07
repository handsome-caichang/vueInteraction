<template>
<div class="container">
    <div class="tableContent">
        <div class="myActContainTitle">
            <div>我的活动</div>
        </div>
        <div class="showActiveTable" style="min-width: 1000px;">
            <div class="faiTableWrap">
                <div class="center">
                    <table class="faiTable" cellpadding="0" cellspacing="0">
                        <thead>
                            <tr>
                                <th v-for="(item, index) in thList" :key="index" :class="['column'+(index+1), item.text]">
                                    <div>{{item.name}}</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in tdList" :key="index">
                                <td class="textLeft active_activeName ellipsis">
                                    <div class="padding ellipsis tdWrap">
                                        <div>
                                            <div class="imgBox"><img :src="item.img" style="width:100%;"></div>
                                                <div class="textBox">
                                                    <div @click="toEdit(item.id)">{{item.name}}</div>
                                                </div>
                                            </div>
                                        </div>
                                </td>
                                <!-- <td class="textCenter ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">
                                        <div class="textCenter">{{item.id}}</div>
                                    </div>
                                </td> -->
                                <td class="textCenter ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">{{item.startTime}}<br>{{item.endTime}}</div>
                                </td>
                                <td class="textCenter ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">
                                        <div style="color:#999;">{{item.state}}</div>
                                    </div>
                                </td>
                                <td class="textCenter ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">{{item.maxNumber}}</div>
                                </td>
                                <td class="textRight ellipsis">
                                    <div class="padding ellipsis tdWrap">
                                        <div class="textRight">
                                            <a href="javascript:;" class="publishStyle" >发布</a>
                                            <a href="javascript:;" class="actLink" @click="preClick">预览</a>
                                            <a href="javascript:;" @click="goGamedata">传播数据</a>
                                            <a href="javascript:;" >编辑</a>
                                            <a href="javascript:;" >结束</a>
                                             <a href="javascript:;" >删除</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
                <div class="bottom">
                    <div class="total"><span class="allTotal">共有 46 条记录 ，每页显示</span>
                        <div class="dropDownBox">
                            <div class="dropDownArea">10</div>
                            <div class="faiTable_poupBox optionsBox hide" style="display: none;">
                                <div class="options">10</div>
                                <div class="options">50</div>
                                <div class="options">100</div>
                                <div class="options">500</div>
                            </div>
                        </div>
                    </div>
                    <div class="pageBox">
                        <div class="page">
                            <a href="javascript:;" hidefocus="true" class="prevPage disabledBtn"></a>
                            <span class="currentPage">1 / 5</span>
                            <a href="javascript:;" hidefocus="true" class="nextPage pointer"></a>
                        </div>
                        <span class="pageJump">
                            <input maxlength="1" class="jumpInput" type="text">
                            <div class="jumpSubmit pointer">跳转</div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapMutations
} from 'vuex'
import {
    tdList,
    thList
} from './activeList.js'
export default {
    name: 'active-list',
    data() {
        return {
            tdList,
            thList: thList,
        }
    },
    methods: {
        ...mapMutations([
            'set_globalMaskFlag'
        ]),
        preClick() {
            this.set_globalMaskFlag = true;
        },
        toEdit(id) {
            this.$router.push(`/edit/${id}`)
        },
        goGamedata() {
            this.$emit('toBackGameData', 1);
            // this.$router.push(`/edit/${id}`)
        }
    },
}
</script>

<style scoped>
@import '../../assets/css/activeList.scss';

</style>
