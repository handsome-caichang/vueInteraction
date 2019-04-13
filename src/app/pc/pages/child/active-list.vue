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
                            <tr class="queryIngTr odd" v-if="tdList.length == 0"><td class="padding" colspan="10">没有数据</td></tr>
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
                                <td class="textCenter ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">{{item.startTime | formatDatetime('yyyy-MM-dd hh:mm')}}<br>{{item.endTime | formatDatetime('yyyy-MM-dd hh:mm')}}</div>
                                </td>
                                <td class="textCenter ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">
                                        <div :style="{'color': item.isPublish ? (item.isEnd ? '#fe896a' : '#64cea6'): '#999' }">{{item.isPublish ? (item.isEnd ? '已结束' : '进行中'): '未发布'}}</div>
                                    </div>
                                </td>
                                <td class="textCenter ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">{{item.uvCount}}</div>
                                </td>
                                <td class="textCenter ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">{{item.winCount}}</div>
                                </td>
                                <td class="textCenter ellipsis tmpShowHoverTips">
                                    <div class="padding ellipsis tdWrap">{{item.joindCustomerCount}}/{{item.limitCount == -1 ? "不限":item.limitCount}}</div>
                                </td>
                                <td class="textRight ellipsis">
                                    <div class="padding ellipsis tdWrap">
                                        <div class="textRight">
                                            <a href="javascript:;" class="publishStyle" @click="publi(item, 'pub')" v-if="!item.isPublish">发布</a>
                                            <a href="javascript:;" class="publishStyle" @click="publi(item, 'pub')" v-if="item.isPublish && !item.isEnd"> 结束</a>
                                            <a href="javascript:;" @click="toEdit(item.id)">编辑</a>
                                            <a href="javascript:;" class="actLink" @click="preClick(item)">预览</a>
                                            <a href="javascript:;" @click="goGamedata(1,item.id)">传播数据</a>
                                            <a href="javascript:;" @click="goGamedata(2,item.id)">获奖名单</a>
                                             <a href="javascript:;" @click="publi(item, 'del')">删除</a>
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
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="totalCount">
                    </el-pagination>
                </div>
            </div>
            <div>

            </div>
        </div>
        <qr-codevue :opened="showCode" :code="currentUrl" @close="close"></qr-codevue>
    </div>
</div>
</template>

<script>
import { mapMutations } from "vuex";
import { thList } from "./activeList.js";
import axios from "axios";
import { getList, publish, stop, delActiv, getQrCode } from "pcApi/jie.js";
import QrCodevue from "../../components/popup/qrCode.vue";
export default {
  name: "active-list",
  data() {
    return {
      tdList: [],
      thList,
      pageIndex: 1,
      pageSize: 10,
      totalCount: 0,
      showCode: false,
      currentUrl: ""
    };
  },
  methods: {
    ...mapMutations(["set_globalMaskFlag"]),
    handleSizeChange(val) {
      this.pageSize = val;
      this.initList();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.initList();
    },
    preClick(item) {
      let url = "";
      if (item.url.indexOf("?") != -1) {
        url = item.url + encodeURIComponent("&sourceType=3");
      } else {
        url = item.url + encodeURIComponent("?sourceType=3");
      }
      app.store.commit("set_loadingFlag", true);
      axios.post('https://url.xiaogj.com/Url/ToShortUrl', {Url:url}).then(res => {
        app.store.commit("set_loadingFlag", false);
        if (res.status == 200) {
            if (res.data.ErrorCode == 200 || res.data.ErrorCode == 422) {
                url = res.data.Data.shorturl;
                this.currentUrl = url;
                this.showCode = true;
            }else {
                app.alert('二维码生成失败')
            }
        }
      });
    },
    close() {
      this.showCode = false;
    },
    toEdit(id) {
      this.$router.push({
        path: `/edit/${id}`,
        query: {
          name: "edit"
        }
      });
    },
    goGamedata(val, id) {
      this.$emit("toBackGameData", val, id);
      // this.$router.push(`/edit/${id}`)
    },
    initList() {
      this.tdList = [];
      getList({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }).then(res => {
        if (res.errorCode == 0) {
          if (res.data.length > 0) {
            this.totalCount = res.totalCount;
            this.tdList = res.data;
          }
        }
      });
    },
    publi(item, type) {
      let title = type == "del" ? "删除" : item.isPublish ? "结束" : "发布";
      app
        .confirm({
          title: `确认${title} ${item.name} 该活动？`
        })
        .then(res => {
          if (res) {
            if (type == "del") {
              delActiv({
                id: item.id
              }).then(resp => {
                if (resp.errorCode == 0) {
                  this.initList();
                } else {
                  alert(resp.errorMessage);
                }
              });
            } else if (item.isPublish) {
              stop({
                id: item.id
              }).then(resp => {
                if (resp.errorCode == 0) {
                  this.initList();
                } else {
                  alert(resp.errorMessage);
                }
              });
            } else {
              publish({
                id: item.id
              }).then(resp => {
                if (resp.errorCode == 0) {
                  this.initList();
                } else {
                  alert(resp.errorMessage);
                }
              });
            }
          }
        });
    }
  },
  created() {
    this.initList();
  },
  components: {
    QrCodevue
  }
};
</script>

<style scoped>
@import "../../assets/css/activeList.scss";
.dropDownBox {
  width: 70px;
}
.faiTableWrap .bottom {
  display: flex;
  align-items: center;
}
</style>
