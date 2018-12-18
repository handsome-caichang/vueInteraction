import base from './base'
const tool = {
};
tool.getNowFormatDate = function() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}

// 设置标题,设置微信web的title,主要为兼容IOS微信端
tool.setDocTitle = (function () {
    if (base.env === 'wx') {
        // iOS微信6.5.3及其之后的版本 window.__wxjs_is_wkwebview 为true时是使用WKWebview，为 false或者 “undefine”时是 UIWebview 。
        if ((base.isIDevice || base.isTouchPad) && !window.__wxjs_is_wkwebview) {
            return setDocTitleToIOS;
        } else {
            return setDocTitleToOther;
        }
    } else if (base.env === 'dd') {
        return setDocTitleToDingTalk
    } else {
        return setDocTitleToOther
    }

    //  微信环境下并且 'UIWebview'的苹果设备设置title
    function setDocTitleToIOS(titleStr) {
        var doc = document;
        doc.title = titleStr;
        var iframe = doc.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = "/favicon1.ico";

        // iframe.src = "http://www.xiaogj.com/favicon.ico";
        // iframe.src = "/abc/abc";
        iframe.addEventListener("load", function () {
            setTimeout(function () {
                doc.body.removeChild(iframe);
            }, 0);
        });
        doc.body.appendChild(iframe);
    }

    // 其它设备设置title
    function setDocTitleToOther(titleStr) {
        document.title = titleStr;
    }

    // 钉钉环环境下设置title
    function setDocTitleToDingTalk(titleStr) {
        dd.biz.navigation.setTitle({
            title: titleStr // 控制标题文本，空字符串表示显示默认文本
        });
    }
})();

tool.parseQuery = function (str = location.search) {
    let qs = str.indexOf("?") === -1 ? str : str.split('?')[1];
    if (qs.length > 0) {
        let s, q = {}, arr = [];
        arr = qs.split("&");
        for (let i = 0; i < arr.length; i++) {
            if (!arr[i]) continue;
            s = arr[i].split('=');
            q[s[0]] = s[1];
        }
        return q;
    } else {
        return {};
    }
}; 
tool.clone = function (obj) {
    var o;
    if (typeof obj == "object") {
        if (obj === null) {
            o = null;
        } else {
            if (obj instanceof Array) {
                o = [];
                for (var i = 0, len = obj.length; i < len; i++) {
                    o.push(this.clone(obj[i]));
                }
            } else {
                o = {};
                for (var j in obj) {
                    o[j] = this.clone(obj[j]);
                }
            }
        }
    } else {
        o = obj;
    }
    return o;
}

tool.telReg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|147)\d{8}/;

export default tool;