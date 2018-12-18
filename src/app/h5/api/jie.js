import axios from "./axios-j";

// 获取我的活动列表
export function getLotteryData(params) {
    return axios.ajaxGet("/h5api/activity/getLotteryData", params);
}
// 执行抽奖
export function executeLottery(params) {
    return axios.ajax("/h5api/activity/executeLottery", params);
}
// 获取配置
export function getconfig(params) {
    return axios.ajaxGet("/pages/getconfig", params);
}

// 上报pv
export function upPv(params) {
    return axios.ajaxGet("/h5api/activityStatistics/pv", params);
}

// 上报行为
export function upAction(params) {
    return axios.ajaxGet("/h5api/activityStatistics/action", params);
}