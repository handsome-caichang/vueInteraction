<template>
<div id="newActContainer" class="container">
    <div id="hdcontent" class="scrollBox">
        <div class="hdBannerWrap ng-scope">
            <div class="swiper-container ng-scope">
                <div class="swiper-wrap clearfix" ng-style="swiperWrapStyle" style="width: 300%; transform: translateX(-66.6667%);">
                    <div class="swiper-slide ng-scope" ng-style="{ 'width': '33.33333333333333%' }" ng-repeat="slide in swiperSlides" ng-if="$index < swiperNumber" style="width: 33.3333%;">
                        <div class="swiper-mask">
                            <img class="swiper-pic" ng-src="https://1.h40.faiusr.com/2/1/ACgIABACGAAg_6ej3wUor8GN_gYw0A84yAE.jpg" src="https://1.h40.faiusr.com/2/1/ACgIABACGAAg_6ej3wUor8GN_gYw0A84yAE.jpg">
                            <a class="swiper-btn ng-scope" ng-if="slide.btnSrc" ng-style="{ 'left': '1164px', 'top': '80px' }" ng-click="handleBtnClick(slide.clickSrcid, slide.isLink, slide.link, slide.innerLink)" style="left: 1164px; top: 80px;">
                                <img class="static" ng-src="https://1.h40.faiusr.com/4/1/ACgIABAEGAAg9aej3wUozYDA1AYw3gI4UA.png" src="https://1.h40.faiusr.com/4/1/ACgIABAEGAAg9aej3wUozYDA1AYw3gI4UA.png">
                                <img class="hover" ng-src="https://1.h40.faiusr.com/4/1/ACgIABAEGAAggqij3wUovP2KiAMw3gI4UA.png" src="https://1.h40.faiusr.com/4/1/ACgIABAEGAAggqij3wUovP2KiAMw3gI4UA.png">
                            </a>
                        </div>
                    </div>
                    <div class="swiper-slide ng-scope" ng-style="{ 'width': '33.33333333333333%' }" ng-repeat="slide in swiperSlides" ng-if="$index < swiperNumber" style="width: 33.3333%;">
                        <div class="swiper-mask">
                            <img class="swiper-pic" ng-src="//g-hd.faisys.com/version2/image/newActive/banner/partner_banner.jpg?v=201811061510" src="//g-hd.faisys.com/version2/image/newActive/banner/partner_banner.jpg?v=201811061510">
                            <a class="swiper-btn ng-scope" ng-if="slide.btnSrc" ng-style="{ 'left': '1195px', 'top': '117px' }" ng-click="handleBtnClick(slide.clickSrcid, slide.isLink, slide.link, slide.innerLink)" style="left: 1195px; top: 117px;">
                                <img class="static" ng-src="//g-hd.faisys.com/version2/image/newActive/banner/partner_btn.png?v=201811061510" src="//g-hd.faisys.com/version2/image/newActive/banner/partner_btn.png?v=201811061510">
                                <img class="hover" ng-src="//g-hd.faisys.com/version2/image/newActive/banner/partner_btn_hover.png?v=201811061510" src="//g-hd.faisys.com/version2/image/newActive/banner/partner_btn_hover.png?v=201811061510">
                            </a>
                        </div>
                    </div>
                    <div class="swiper-slide ng-scope" ng-style="{ 'width': '33.33333333333333%' }" ng-repeat="slide in swiperSlides" ng-if="$index < swiperNumber" style="width: 33.3333%;">
                        <div class="swiper-mask">
                            <img class="swiper-pic" ng-src="https://1.h40.faiusr.com/4/1/ACgIABAEGAAg2szF3gUosLmimwUw0A84yAE.png" src="https://1.h40.faiusr.com/4/1/ACgIABAEGAAg2szF3gUosLmimwUw0A84yAE.png">
                            <a class="swiper-btn ng-scope" ng-if="slide.btnSrc" ng-style="{ 'left': '1238px', 'top': '112px' }" ng-click="handleBtnClick(slide.clickSrcid, slide.isLink, slide.link, slide.innerLink)" style="left: 1238px; top: 112px;">
                                <img class="static" ng-src="https://1.h40.faiusr.com/4/1/ACgIABAEGAAghfHq3QUo2Pfs_wEwoAE4Ng.png" src="https://1.h40.faiusr.com/4/1/ACgIABAEGAAghfHq3QUo2Pfs_wEwoAE4Ng.png">
                                <img class="hover" ng-src="https://1.h40.faiusr.com/4/1/ACgIABAEGAAgiPHq3QUogMfsqgQwoAE4Ng.png" src="https://1.h40.faiusr.com/4/1/ACgIABAEGAAgiPHq3QUogMfsqgQwoAE4Ng.png">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hdBannerController is-left">
                <div class="btn"></div>
            </div>
            <div class="hdBannerController is-right ng-hide">
                <div class="btn"></div>
            </div>
        </div>
        <div id="activeScrollBox">
            <div id="activityTwo" class="staticClass" style="width: 1157px;">
                <div class="activityGroup">
                    <div id="newCategoryBox2" class="clearfix">
                        <div class="newCategoryItem">
                            <div v-for="(item, index) in activeList" :key="index" @click="activeClick(item, index)" class="column other newItemBox tradeType_0" :class="currentIndex == index ? 'littleBlue' : ''">
                                <span class="ng-binding ng-scope">{{item.name}}</span>
                                <div class="SelectImg ng-scope" v-if="item.type == 2" :class="currentIndex == index ? 'rotateImg' : ''"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="subCategoryBox hide" id="subCategoryBox1">
                </div>
            </div>
            <div id="activityTwo_holder" class="hide" style="height: 50px;"></div>
            <div id="ActiveBox2" class="ActiveBox new_activeBox" style="margin-top: 0">
                <div class="activeContent new_activeContent not_hd_newActive" ng-show="watcher_1 != 999">
                    <div v-for="(hdModel, index) in imgList" :key="index" @click="add(hdModel)" class="active modActive isRecom">
                        <div class="actPic">
                            <img class="hide showPic" :src="hdModel.bgcImg" style="display: inline;">
                            <img class="previewGif" :src="hdModel.src" >
                        </div>
                        <div v-if="hdModel.isHot" class="hotScorePic ng-scope"></div>
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
            activeList: [{
                    type: 2,
                    name: '节日',
                    id: '1',
                    list: [{
                            type: 1,
                            name: '全部节日',
                            id: '1-1',
                        },
                        {
                            type: 1,
                            name: '全部节日',
                            id: '1-2',
                        },
                        {
                            type: 1,
                            name: '全部节日',
                            id: '1-3',
                        },
                        {
                            type: 2,
                            name: '全部节日',
                            id: '1-4',
                            list: [{
                                    type: 1,
                                    name: '全部节日',
                                    id: '1-1',
                                },
                                {
                                    type: 1,
                                    name: '全部节日',
                                    id: '1-2',
                                }
                            ]
                        }

                    ]
                },
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
                 {
                    name: '幸运大转盘',
                    bgcImg: '//d1.faiusr.com/2/AAEIABACGAAgjJnK1wUogNjluQQwwgM4_gE.jpg',
                    src: '//d1.faiusr.com/3/AAEIABADGAAgj5nK1wUosMG9-gEw4QE4fQ.gif?v=12',
                    isHot: true,
                    id: '2'
                }, {
                    name: '幸运大转盘',
                    bgcImg: '//d1.faiusr.com/2/AAEIABACGAAgjJnK1wUogNjluQQwwgM4_gE.jpg',
                    src: '//d1.faiusr.com/3/AAEIABADGAAgj5nK1wUosMG9-gEw4QE4fQ.gif?v=12',
                    isHot: false,
                    id: '3'
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
  @import '../../assets/css/fai.scss';
  @import '../../assets/css/header.scss';
  @import '../../assets/css/index.scss';
@import '../../assets/css/newactive.scss';
#newActContainer .active .actPic .previewGif {
    display: none;
}
#newActContainer .active:hover .actPic .previewGif {
    display: block;
}
</style>
