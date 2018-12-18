import qs from "qs";
import tool from '../assets/js/tool'
import axios from "axios";
// 给axios扩展一个'ajaxGet'方法,用于代理'get'请求;
axios.ajaxGet = function (url, args) {
  // 用于解决后端NodeJS识别代理哪个后端；
  // const URL =  'http://wone.xiaogj.com/'
  let serverQuery = tool.parseQuery();
  // let qUrl = URL +  (serverQuery.ip ? `${serverQuery.ip}/${url}` : url);
  let qUrl = serverQuery.ip
    ? url.startsWith("/")
      ? `${serverQuery.ip}${url}`
      : `${serverQuery.ip}/${url}`
    : url;

  return axios
    .get(qUrl, {
      params: { _t_: new Date().getTime(), ...args, UsePlatform: 1 }
    })
    .then(res => {
      let errorcode = res.data.errorCode,
        errormsg = res.data.errorMessage;
      if (errorcode !== 0) {
        // 服务端返回的状态码不是200时
        console.error(
          `ErrorCode: ${errorcode}, ErrorMsg: ${errormsg}, Api:${url}`
        );
      }
      return res.data;
    })
    .catch(res => {
      // http请求本身出错时
      if (res == "Error: Network Error") {
        alert("网络错误，请检查网络连接。");
      } else {
        // console.error(`http请求出错: Api:${url}  ${res}`);
        return {
          errorCode: 1000,
          errorMessag: res
        };
      }
    });
};

// 给axios扩展一个'ajax'方法,用于代理'post'请求;
axios.ajax = function (url, args) {
  console.log(args);
  // 用于解决后端NodeJS识别代理哪个后端；
  let serverQuery = tool.parseQuery();
  let qUrl = serverQuery.ip
    ? url.startsWith("/")
      ? `${serverQuery.ip}${url}`
      : `${serverQuery.ip}/${url}`
    : url;
  return axios
    .post(qUrl, qs.stringify({ ...args, UsePlatform: 1 }))
    .then(res => {
      let errorcode = res.data.errorCode,
        errormsg = res.data.errorMessage;
      if (errorcode !== 0) {
        // 服务端返回的状态码不是200时
        console.error(`ErrorCode: ${errorcode}, ErrorMsg: ${errormsg}, Api:${url}`);
      }
      return res.data;
    }
    ).catch(res => {
      // http请求本身出错时
      if (res == "Error: Network Error") {
        alert("网络错误，请检查网络连接。");
      } else {
        // console.error(`http请求出错: Api:${url}  ${res}`);
        return {
          errorCode: 1000,
          errorMessag: res
        };
      }
    });
};


// 给axios扩展一个'ajax'方法,用于代理'put'请求;
axios.ajaxPut = function (url, args) {
  // 用于解决后端NodeJS识别代理哪个后端；
  let serverQuery = tool.parseQuery();
  let qUrl = serverQuery.ip
    ? url.startsWith("/")
      ? `${serverQuery.ip}${url}`
      : `${serverQuery.ip}/${url}`
    : url;
  return axios
    .put(qUrl, qs.stringify({ ...args, UsePlatform: 1 }))
    .then(res => {
      let errorcode = res.data.errorCode,
        errormsg = res.data.errorMessage;
      if (errorcode !== 0) {
        // 服务端返回的状态码不是200时
        console.error(`ErrorCode: ${errorcode}, ErrorMsg: ${errormsg}, Api:${url}`);
      }
      return res.data;
    }
    ).catch(res => {
      // http请求本身出错时
      if (res == "Error: Network Error") {
        alert("网络错误，请检查网络连接。");
      } else {
        // console.error(`http请求出错: Api:${url}  ${res}`);
        return {
          errorCode: 1000,
          errorMessag: res
        };
      }
    });
};

// 给axios扩展一个'ajax'方法,用于代理'delete'请求;
axios.ajaxDel = function (url, args) {
  // 用于解决后端NodeJS识别代理哪个后端；
  // const URL =  'http://wone.xiaogj.com/'
  let serverQuery = tool.parseQuery();
  // let qUrl = URL +  (serverQuery.ip ? `${serverQuery.ip}/${url}` : url);
  let qUrl = serverQuery.ip
    ? url.startsWith("/")
      ? `${serverQuery.ip}${url}`
      : `${serverQuery.ip}/${url}`
    : url;

  return axios
    .delete(qUrl, {
      params: { _t_: new Date().getTime(), ...args, UsePlatform: 1 }
    })
    .then(res => {
      let errorcode = res.data.errorCode,
        errormsg = res.data.errorMessage;
      if (errorcode !== 0) {
        // 服务端返回的状态码不是200时
        console.error(`ErrorCode: ${errorcode}, ErrorMsg: ${errormsg}, Api:${url}`);
      }
      return res.data;
    })
    .catch(res => {
      // http请求本身出错时
      if (res == "Error: Network Error") {
        alert("网络错误，请检查网络连接。");
      } else {
        // console.error(`http请求出错: Api:${url}  ${res}`);
        return { errorCode: 1000, errorMessag: res };
      }
    });
};

export default axios;
