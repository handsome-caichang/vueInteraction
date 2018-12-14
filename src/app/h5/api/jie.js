import axios from "./axios-j";

// 获取我的活动列表
export function getTemplateDetail(params) {
    return axios.ajaxGet("api/activity/getLotteryData", params);
}
