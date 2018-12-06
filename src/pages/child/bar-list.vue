<template>
<div class="container">
    <div class="scrollBox hdcontent">
        <div class="hdBannerWrap">
            <img class="swiper-pic" src="https://1.h40.faiusr.com/4/1/ACgIABAEGAAg2szF3gUosLmimwUw0A84yAE.png">
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
                            <img class="hide showPic" :src="hdModel.bgcImg" style="display: inline;">
                            <img class="previewGif" :src="hdModel.src" >
                        </div>
                        <div v-if="hdModel.isHot" class="hotScorePic"></div>
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
                {
                    name: '游戏营销',
                    id: '3',
                    type: 1,
                }
            ],
            currentIndex: 1,
            imgList: [
                {
                    name: '幸运大转盘',
                    bgcImg: '//d1.faiusr.com/2/AAEIABACGAAgjJnK1wUogNjluQQwwgM4_gE.jpg',
                    src: '//d1.faiusr.com/3/AAEIABADGAAgj5nK1wUosMG9-gEw4QE4fQ.gif?v=12',
                    isHot: true,
                    id: '1'
                },
            ]
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
            console.log(item)
            this.set_globalMaskFlag(true)
        }
    },
}
</script>

<style scoped >
@import '../../assets/css/barList.scss';

</style>
