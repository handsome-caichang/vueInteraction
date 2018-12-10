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
                                            <div class="imgBox"><img :src="item.image" style="width:100%;"></div>
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
                                        <div style="color:#999;">{{item.isPublished}}</div>
                                    </div>
                                </td>
                                <td class="textCenter ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">{{item.joinUserCount}}/{{item.limitCount}}</div>
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
                     <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pageIndex"
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="totalCount"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="totalCount">
                    </el-pagination>
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
import {getList} from 'api/jie.js'
export default {
    name: 'active-list',
    data() {
        return {
            tdList,
            thList: thList,
            pageIndex: 1,
            pageSize: 10,
            totalCount: 59,
        }
    },
    methods: {
        ...mapMutations([
            'set_globalMaskFlag'
        ]),
         handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        preClick() {
            this.set_globalMaskFlag = true;
        },
        toEdit(id) {
            this.$router.push(`/edit/${id}`)
        },
        goGamedata() {
            this.$emit('toBackGameData', 1);
            // this.$router.push(`/edit/${id}`)
        },
        initList() {
            getList({
                pageIndex: this.pageIndex,
                pageSize: this.pageSize,
            }).then(res => {
                if (res.errorCode == 0) {

                }else {

                }
            })
        }
    },
    created() {
        this.initList();
    }
}
</script>

<style scoped>
@import '../../assets/css/activeList.scss';
.dropDownBox {
    width: 70px;
}
.faiTableWrap .bottom {
    display: flex;
    align-items: center;
}
</style>
