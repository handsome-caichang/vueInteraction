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


// 编辑的时候获取活动详情
export function getEditTemplateDetail(params) {
    return axios.ajaxGet("api/activity/getLotteryActivityByID", params);
}

// 保存编辑的活动
export function updateLotteryActivity(params) {
    return axios.ajaxPut("api/activity/updateLotteryActivity", params);
}


// 创建活动
export function createTemplate(params) {
    return axios.ajax("api/activity/createLotteryActivity", params);
}

// 发布活动
export function publish(params) {
    return axios.ajaxPut("api/activity/publish", params);
}

// 停止活动
export function stop(params) {
    return axios.ajaxPut("api/activity/stop", params);
}

// 停止活动
export function delActiv(params) {
    return axios.ajaxDel("api/activity", params);
}


// 查看活动统计数据
export function getStatistic(params) {
    return axios.ajaxGet("api/activity/getStatistic", params);
}



/*  oss */
export function getUploadToken(params) {
    return axios.ajaxGet("api/user/getUploadToken", params);
}



/*  根据code获取中奖记录 */
export function getWinLotteryRecordByCode(params) {
    return axios.ajaxGet("api/activity/getWinLotteryRecordByCode", params);
}

/*  根据code获取中奖记录 */
export function verificate(params) {
    return axios.ajax("api/activity/verificate", params);
}


/*  获取中奖名单 */
export function getWinLotteryRecord(params) {
    return axios.ajaxGet("api/activity/getWinLotteryRecord", params);
}


/*  获取中奖名单 */
export function getCustomer(params) {
    return axios.ajaxGet("api/activity/getCustomer", params);
}

/*  获取中奖名单 */
export function getQrCode(params) {
    return axios.ajaxGet("api/activity/qrCode ", params);
}