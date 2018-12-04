<template>
<div id="poup_previewCanal" class="poupBox confirmPoupBox previewCanal poup-box-animate loadFinish" style="width: 870px;">
    <div class="poupTitle">
        <div class="tabContent"><span class="tab tab-item check" data-tab="preview"><i class="icon icon-preview"></i>预览</span><span class="tab tab-item" data-tab="poster"><i class="icon icon-poster"></i>宣传海报</span><span class="tab tab-item dropdown"><i class="icon icon-generallize"></i>推广<span class="subTab tab-item" data-tab="canal">渠道管理</span><a class="subTab tab-item" onclick="HdPortal.logDog(1000187, 20);" target="_blank" href="http://i.mp.fkw.com/?openSourceId=301">微信群发推广</a><a class="subTab tab-item" onclick="HdPortal.logDog(1000187, 19);" target="_blank" href="http://i.fkw.com/message/default.jsp?biz=hd">短信群发推广</a><a class="subTab tab-item" onclick="HdPortal.logDog(1000187, 21);" target="_blank" href="//www.fkw.com/wxPro.jsp">公众号推广</a></span></div>
        <div class="closeBtn" @click="closePoup"></div>
    </div>
    <div class="poupContent" style="">
        <div class="previewBox switchBox clearfix">
            <div class="left phoneBox">
                <div class="phone">
                    <div class="wxTitle">
                        <div class="actName">参与活动赢大奖</div>
                    </div>
                    <div class="phoneMask absBg" style="z-index:999"></div>
                    <div class="phoneQrcodeBox">
                        <div class="phoneQrcode"><img src="//i.hd.fkw.com/qrCode.jsp?cmd=qrurl&amp;siteUrl=https%3A%2F%2Fhd.faisco.cn%2F17984259%2Ff8e7cpjsNIXKz85EvL7Bgw%2Fload.html%3Fstyle%3D0%26fromQrcode%3Dtrue" style="width:100%;display:block;"></div>
                            <div class="text">扫二维码体验活动</div>
                        </div><iframe frameborder="0" scrolling="no" src="//yx.hd.fkw.com/zhuanpan.jsp?_preview=1&amp;aid=17984259&amp;_manage=d&amp;style=0&amp;tplId=-1&amp;gameType=0&amp;id=42"></iframe>
                    </div><span class="pointerIcon"></span>
                </div>
                <div class="left contentBox">
                    <div class="item">
                        <div class="content linkPicBox">
                            <div class="linkPic"><img class="qrcodeImage" src="//i.hd.fkw.com/qrCode.jsp?cmd=qrurl&amp;siteUrl=https%3A%2F%2Fhd.faisco.cn%2F17984259%2Ff8e7cpjsNIXKz85EvL7Bgw%2Fload.html%3Fstyle%3D0%26fromQrcode%3Dtrue">
                                <div class="wxScan"><span class="scan">微信扫一扫</span><span class="downCode">下载二维码<span></span></span></div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="title"></div>
                        <div class="content linkSiteBox"><input class="linkSite" readonly="" type="text" value="https://hd.faisco.cn/17984259/f8e7cpjsNIXKz85EvL7Bgw/load.html?style=0">
                            <div class="main-Button-blue copyButton">复制</div>
                            <div class="attentionTip">
                                <div class="tip">您可以将活动链接复制到您的公众号菜单或自定义回复中</div>
                            </div>
                        </div>
                    </div>
                    <div class="button-group"><a href="javascript:;" class="main-Button button button-publish active"><i class="button-icon"></i>马上发布</a><a href="javascript:;" class="main-Button button button-edit"><i class="button-icon"></i>进入编辑</a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    mapMutations
} from 'vuex'
export default {
    name: 'poupPreviewCancal',
    data() {
        return {}
    },
    methods: {
        ...mapMutations([
            'set_globalMaskFlag'
        ]),
        closePoup() {
            this.set_globalMaskFlag(false)
        }
    },
}
</script>

<style scoped>
@import '../assets/css/base.scss';
@import '../assets/css/fai.scss';
@import '../assets/css/header.scss';
@import '../assets/css/index.scss';
@import '../assets/css/previewCanal.scss';
</style>
