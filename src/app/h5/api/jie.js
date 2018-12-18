import axios from "./axios-j";

// 获取我的活动列表
export function getLotteryData(params) {
    return axios.ajaxGet("/h5api/activity/getLotteryData", params);
}
// 执行抽奖
export function executeLottery(params) {
    return axios.ajaxGet("/h5api/activity/executeLottery", params);
}