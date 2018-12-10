const tool = {
};
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