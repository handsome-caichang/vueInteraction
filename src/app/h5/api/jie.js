import axios from "./axios-j";

// 获取我的活动列表
export function getLotteryData(params) {
    return axios.ajaxGet("/api/activity/getLotteryData", params);
}
// 执行抽奖
export function executeLottery(params) {
    return axios.ajax("/api/activity/executeLottery", params);
}
// 获取配置
export function getconfig(params) {
    return axios.ajaxGet("/pages/getconfig", params);
}

// 上报pv
export function upPv(params) {
    return axios.ajaxGet("/api/activityStatistics/pv", params);
}

// 上报行为
export function upAction(params) {
    return axios.ajaxGet("/api/activityStatistics/action", params);
}

// 更新地址
export function updateAddress(params) {
    return axios.ajax("/api/activity/updateAddress", params);
}