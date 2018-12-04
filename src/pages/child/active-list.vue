<template>
<div id="myActContainer" class="container" style="padding:15px 28px 0 28px;">
    <div id="tableContent" class="tableContent">
        <div class="myActContainTitle">
            <div class="tableTitleName">我的活动</div>
            <div id="recycleBinTitle" class="main-Button"><span class="icon"></span>活动回收站(<span class="actNum">0</span>)</div>
            <div id="clearRecycleBox" class="main-Button hide"><span class="icon"></span>清空回收站</div>
        </div>
        <div id="showActiveTable" class="showActiveTable" style="min-width: 880px;">
            <div class="faiTableWrap">
                <div class="center">
                    <table class="faiTable" cellpadding="0" cellspacing="0">
                        <thead>
                            <tr class="scrollFixedTr">
                                <th v-for="(item, index) in thList" :key="index" :class="['column'+(index+1), item.text]">
                                    <div class="padding">{{item.name}}</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in tdList" :key="index">
                                <td class="textLeft active_activeName ellipsis">
                                    <div class="padding ellipsis tdWrap">
                                        <div>
                                            <div class="qrcodeIcon" _index="56"></div>
                                            <div class="imgBox"><img :src="item.img" style="width:100%;"></div>
                                                <div class="textBox">
                                                    <div @click="toEdit(item.id)">{{item.name}}</div>
                                                </div>
                                            </div>
                                        </div>
                                </td>
                                <td class="textCenter ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">
                                        <div class="textCenter">{{item.id}}</div>
                                    </div>
                                </td>
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
                                <td class="textCenter ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap"></div>
                                </td>
                                <td class="textRight ellipsis">
                                    <div class="padding ellipsis tdWrap">
                                        <div class="textRight">
                                            <span style="">
                                                <a href="#" class="publishStyle" id="publishBtn">发布</a>
                                            </span>
                                            <span style="display:none">
                                                <a href="#" >结束</a>
                                            </span>
                                            <a href="#" >编辑</a>
                                            <a href="#" class="actLink" @click="preClick">预览</a>
                                            <a class="moreMenuBtn" @click="item.moreFlag = !item.moreFlag">更多<span class="icon"></span></a>
                                            <div class="moreOptionBox" :class="{'hide':item.moreFlag}">
                                                <div class="tipsBoxArrow">
                                                </div>
                                                <a href="#" class="copyActiveBtn" rstyle="66" >复制</a>
                                                <a href="#" >渠道管理</a>
                                                <a href="#" >删除</a>
                                                <a href="#" >传播数据</a>
                                                <a href="#" >获奖名单</a>
                                                <a href="#" class="hd_set_vertifiers">配置核销员</a>
                                            </div>
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
        <!-- 活动回收站div-->
        <div id="showRecycleTable" class="showRecycleTable" style="min-width: 880px;"></div>
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
            this.$router.replace(`/edit/${id}`)
        }
    },
}
</script>

<style scoped>
@import '../../assets/css/base.scss';
@import '../../assets/css/myActive.scss';

.faiTableWrap .center table.faiTable tbody tr td .tdWrap>div {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
