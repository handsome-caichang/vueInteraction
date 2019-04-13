// 个人版微信环境

// 封装微信JS-SDK相关操作功能, 依赖微信JS-SDK;
import base from './base.js'
import BaseClass from './baseClass.js'

var wxsdk, u = new BaseClass();

if (base.env === 'wx'  || base.env === 'wxwork' || base.env === 'browser') {

    u.jssdkApiList = ["chooseImage", "uploadImage", "previewImage", "getLocalImgData",
        "startRecord", "stopRecord", "onVoiceRecordEnd",
        "playVoice", "pauseVoice", "stopVoice", "onVoicePlayEnd", "uploadVoice",
        "showOptionMenu", "hideOptionMenu", "downloadVoice", "closeWindow", 'onMenuShareTimeline',  'onMenuShareAppMessage',"updateTimelineShareData" ,"updateAppMessageShareData","onMenuShareWeibo", "onMenuShareQZone",
        "showAllNonBaseMenuItem", "hideAllNonBaseMenuItem", 'getNetworkType', "showMenuItems"
    ]

    // 微信JS-SDK是否就绪
    u.wxReadyPromise = new Promise((resolve, reject) => {
        u.event.on("wxconfig", function (e, opt) {

            // alert("wx promise config")
            wx.ready(function(res) {
                console.log('wx ready ...');
                // alert('wx ready ...');
                resolve({
                    errCode: 200
                })
            });

            wx.error(function(error) {
                console.warn('微信配置失败... ', error);
                if (opt.customParams.alertError) {
                    alert('微信接口不稳定，暂时不能发送图片、录制语音。')
                }
                // 调用发布错误事件的方法
                u.emitError({
                    type: "wxconfigFail",
                    params: opt.params,
                    error: error
                })

                reject({
                    errCode: 400,
                    errMsg: error.errMsg
                })
            });
        })
    });

    // WeixinJSBridge是否就绪
    u.wxJSBridgePromise = new Promise(resolve => {
        function ready() {
            resolve('WeixinJSBridge ready ...')
        }
        if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', ready, false);
            } else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', ready);
                document.attachEvent('onWeixinJSBridgeReady', ready);
            }
        } else {
            ready();
        }
    })

    // 通过config接口注入权限验证配置
    u.setConfig = function(opts) {
        let config = {
            debug: false,
            appId: "wx507dbff2a0ac7aae00",
            timestamp: 1513254847,
            nonceStr: "WX_config_nonceStr",
            signature: "98260ffca01823d0bc7ddbbcce14d14f99a32df0",
            jsApiList: u.jssdkApiList,
            customParams: {
                alertError: true  // 在微信SDK配置失败时，是否给出提示
            }
        }
        Object.assign(config, opts)
        wx.config(config);
        u.event.emit("wxconfig", {
            params: opts,
            customParams: config.customParams
        })
    }

    // // 在'WeixinJSBridgeReady'就绪时, 隐藏或显示微信所有非基础按钮接口, 需要在每次切换路由时调用;
    // u.triggerWXOptMenu = function(bool) {
    //     u.wxJSBridgePromise.then(res => {
    //         console.log(res);
    //         WeixinJSBridge.call(bool ? 'showOptionMenu' : 'hideOptionMenu');
    //     })
    // }

    // // 只有在'wxready'的状态下并且页面启用了显示非基础按钮接口, 才打开相应非基础按钮;
    // u.triggerMenu = function(bool = false) {
    //     u.wxReadyPromise.then((res) => {
    //         if (res.errCode === 200 && bool) {
    //             // 显示所有功能按钮接口
    //             wx.showAllNonBaseMenuItem();
    //         } else {
    //             // 隐藏所有非基础按钮接口
    //             wx.hideAllNonBaseMenuItem();
    //         }
    //     }).catch(res => {
    //         WeixinJSBridge && u.triggerWXOptMenu(false);
    //     })
    // }

    // // 通过微信菜单分享
    // u.onWXMenuShare = function(opt) {
    //     /*opt = {
    //             title: '', // 分享标题
    //             desc: '', // 分享描述
    //             link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //             imgUrl: '', // 分享图标
    //             type: '', // 分享类型,music、video或link，不填默认为link
    //             dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    //             success: function () { 
    //                 // 用户确认分享后执行的回调函数
    //             },
    //             cancel: function () { 
    //                 // 用户取消分享后执行的回调函数
    //             }
    //         }*/

    //     u.wxReadyPromise.then(res => {
    //         if (res.errCode === 200) {
    //             // 分享到朋友圈
    //             wx.onMenuShareTimeline(opt);
    //             // 分享给朋友
    //             wx.onMenuShareAppMessage(opt);
    //             // 分享到QQ
    //             // wx.onMenuShareQQ(opt);
    //             // 分享到腾讯微博
    //             // wx.onMenuShareWeibo();
    //             // 分享到QQ空间
    //             // wx.onMenuShareQZone(opt);
    //         }
    //     })
    // }

    // // 关闭当前窗口
    // u.closeWindow = function () {
    //     wx.closeWindow();
    // }

    // // 分享
    // u.share = function (opt) {
    //     /*opt = {
    //         title: '', // 分享标题
    //         desc: '', // 分享描述
    //         link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //         imgUrl: '', // 分享图标
    //         type: '', // 分享类型,music、video或link，不填默认为link
    //         dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    //     }*/
    //     u.triggerMenu(true)
    //     u.onWXMenuShare(opt)
    // }

    // 调用微信接口的通用包装
    u.exec = function(active, args) {
        return new Promise((resolve, reject) => {
            try {
                wx[active]({
                    ...args,
                    success: res => {
                        resolve(res);
                    },
                    fail: error => {
                        reject(error)
                    }
                })
            } catch (e) {
                alert(e);
            }
        })
    }
}

wxsdk = u;

export default wxsdk