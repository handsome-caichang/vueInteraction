import qs from 'qs'

var http = {}
import axios from "axios";


/*opts: {    
    formData: true || false
    method: "get || post"
    url: "/url"
    data: {},
    timeout: 100000
}*/
http.ajax = function (opts) {
    let cancel, xhr, extOpt,
        method = opts.method || 'post',
        data = {_t_: new Date().getTime(), ...opts.data},
        option = {
            method: method,
            url: opts.url,
            cancelToken: new axios.CancelToken(c => cancel = c),
            timeout: opts.timeout || null
        }

    if (method === 'get') {
        extOpt = {
            params: data,
            paramsSerializer: obj => qs.stringify(obj)
        }
    } else if (method === 'post') {
        extOpt = {
            data: (opts.formData ? qs.stringify(data) : data)
        }
    }

    Object.assign(option, extOpt)

    xhr = axios(option)
    xhr.cancel = cancel

    return xhr
}

export default http