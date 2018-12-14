import axios from "./axios-j";


// 发送短信验证码
export function sendsms(params) {
    return axios.ajax("api/user/sendSMSCode", params);
}

// 注册
export function register(params) {
    return axios.ajax("api/user/register", params);
}

// 登录
export function login(params) {
    return axios.ajax("api/user/login", params);
}
// 获取用户信息
export function getUser(params) {
    return axios.ajaxGet("api/user/whoami", params);
}

// 获取我的活动列表
export function getList(params) {
    return axios.ajaxGet("api/activity", params);
}


// 获取我的活动列表
export function getTemplateList(params) {
    return axios.ajaxGet("api/activity/getTemplate", params);
}