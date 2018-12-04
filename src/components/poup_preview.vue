<template>
<div id="poup_previewActive" class="poupBox confirmPoupBox previewActive poup-box-animate" style="width: 660px;height: 518px;">
    <div class="poupContent" style="">
        <div class="showQrcodeBtn hide" style="display: block;">
            <div class="qrcodeIcon"></div>
            <div class="qrcodeText">扫码</div>
        </div>
        <div class="closeBtn" @click="closePoup"></div>
        <div class="floatBlock leftBox">
            <div class="leftImgCont" style="display: none;"><img src="//d1.faiusr.com/2/AAEIABACGAAgjM3s3QUoiLSNMDCABTjwCA.jpg"></div>
                <div class="waitImgCont hide" style="display: none;"><img style="position:absolute; width:20px; height:20px; margin-left:125px; margin-top:210px;" src="//g-hd.faisys.com/image/loading.gif"></div>
        <div class="gameframe" style="position: absolute; z-index: 5000;">
            <iframe style="margin-right:1rem;" class="gameiframe" width="272" height="470" scrolling="auto" src="//hd.faisco.cn/7020498/XW6aET6Twahg0ZpnG2EX5w/load.html?style=75&amp;testPlayAid=17984259&amp;testPlaySign=d6db6e043e85908490cafe01f315047f&amp;_preview=true"></iframe>
        </div>
        <div class="maskBg_B maskBg hide">
            <div class="showQrCodeBox">
                <div class="qrCodeImg"><img class="qrcodeImage" src="https://i.hd.fkw.com/qrCode.jsp?cmd=qrurl&amp;siteUrl=https%3A%2F%2Fhd.faisco.cn%2F7020498%2FXW6aET6Twahg0ZpnG2EX5w%2Fload.html%3Fstyle%3D75%26fromePreviewCode%3D17984259"></div>
                    <div class="qrCodeTxt">微信扫一扫体验活动</div>
                </div>
            </div>
        </div>
        <div class="floatBlock rightBox rightBox_B">
            <div class="actName_New">情暖冬日送好礼</div>
            <div class="actExpTitle_New">玩法介绍</div>
            <div class="actExp_New">点击“开始”转盘开始转动，最终指针指着的即为您所中的奖品。</div>
            <div class="marketingTitle_New">营销功能</div>
            <div class="marketing_New">
                <div class="marketing">病毒营销</div>
                <div class="marketing">吸粉</div>
                <div class="marketing">联系信息</div>
                <div class="marketing">线下引流</div>
                <div class="marketing">抽奖</div>
            </div>
            <div id="preview_createBtn" class="main-Button createBtn">创建</div>
        </div>
    </div>
</div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name: 'poupPreview',
    data() {
        return {
        }
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

<style scoped >

  @import '../assets/css/base.scss';
  @import '../assets/css/fai.scss';
  @import '../assets/css/header.scss';
  @import '../assets/css/index.scss';
  @import '../assets/css/activePreView.scss';

</style>

