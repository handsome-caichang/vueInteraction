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
export function logout(params) {
    return axios.ajaxGet("api/user/logout", params);
}

// 获取我的活动列表
export function getList(params) {
    return axios.ajaxGet("api/activity", params);
}


// 获取活动模板列表
export function getTemplateList(params) {
    return axios.ajaxGet("api/activityTemplate", params);
}

// 获取活动模板详情（只在pc调用）
export function getTemplateDetail(params) {
    return axios.ajaxGet("api/activityTemplate/getLotteryActivityTemplate", params);
}

// 创建活动
export function createTemplate(params) {
    return axios.ajax("api/activity/createLotteryActivity", params);
}


// 更新活动
export function updateLotteryActivity(params) {
    return axios.ajax("api/activity/updateLotteryActivity", params);
}