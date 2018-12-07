import axios from "./axios-j";


// 发送短信验证码
export function sendsms(params) {
    return axios.ajax("api/user/sendSMSCode", params);
}

// 发送短信验证码
export function register(params) {
    return axios.ajax("api/user/register", params);
}

// 发送短信验证码
export function login(params) {
    return axios.ajax("api/user/login", params);
}
// 发送短信验证码
export function getUser(params) {
    return axios.ajaxGet("api/user/whoami", params);
}