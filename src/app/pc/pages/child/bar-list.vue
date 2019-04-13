<template>
<div class="container">
    <div class="scrollBox hdcontent">
        <div class="hdBannerWrap">
            <img class="swiper-pic" src="https://cdn01.xiaogj.com/file/1fa97d5714cb45e5b6ba690f6e606e09/201812/e2be131891904a3685c13f1d46c9a38a.png">
        </div>
        <div class="activeScrollBox">
            <div class="staticClass">
                <div class="column"  v-for="(item, index) in activeList" :key="index" @click="activeClick(item, index)"  :class="currentIndex == index ? 'littleBlue' : ''">
                    <span>{{item.name}}</span>
                </div>
            </div>
            <div class="new_activeBox">
                <div class="activeContent new_activeContent not_hd_newActive">
                    <div class="active modActive isRecom" v-for="(hdModel, index) in imgList" :key="index" @click="add(hdModel)" >
                        <div class="actPic">
                            <img class="hide showPic" :src="hdModel.image" style="display: inline;">
                            <img class="previewGif" :src="hdModel.hoverImage" >
                        </div>
                        <div class="hotScorePic"></div>
                        <div class="actDescripe">
                            <div class="actName">
                                <span class="ng-binding">{{hdModel.name}}</span>
                            </div>
                            <div class="actCreateImg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapMutations} from 'vuex'
import {getTemplateList} from 'pcApi/jie.js'
export default {
    name: 'bar-list',
    data() {
        return {
            activeList: [
                {
                    type: 1,
                    name: '抽奖活动',
                    id: '2',
                },
            ],
            currentIndex: 0,
            imgList: [
            ],
            pageIndex: 1,
            pageSize: 10,
            totalCount: 40,
        }
    },
    methods: {
        ...mapMutations([
            'set_globalMaskFlag'
        ]),
        activeClick(item, index) {
            this.currentIndex = index;
        },
        add(item){
            // this.set_globalMaskFlag(true)
             this.$router.push({
                 path: `/edit/${item.id}`,
                 query: {
                     name: 'add',
                 }
             })
        },
        initList() {
            getTemplateList({
                pageIndex: this.pageIndex,
                pageSize: this.pageSize,
            }).then(res => {
                if (res.errorCode == 0) {
                    this.totalCount = res.totalCount;
                    this.imgList = res.data;
                }
            })
        }
    },
    created() {
        this.initList();
    }
}
</script>

<style scoped >
@import '../../assets/css/barList.scss';

</style>
