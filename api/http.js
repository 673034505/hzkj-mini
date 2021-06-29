const app = getApp()
let router = require("../router/router")

const request = (url, options) => {
    return new Promise((resolve, reject) => {
        wx.showLoading({
            title: '加载中',
        })

        wx.request({
            url: `${app.globalData.host}${url}`,
            method: options.method,
            data: options.method === 'GET' ? options.data : JSON.stringify(options.data),
            header: {
                'Content-Type': 'application/json; charset=UTF-8',
                // 根据需求添加token和cookie验证
                'Authorization-WeChat': wx.getStorageSync("token") || '',  // 看自己是否需要
                //'cookie': wx.getStorageSync("JSESSION") || '',//读取cookie
            },
            success(response) {
                wx.hideLoading();
                if (response.statusCode === 200) {
                    // 每一个判断体中必须加入resolve(request.data)释放请求
                    if (response.data.code === 601 || response.data.message == 'token不能为空') {
                        wx.clearStorageSync()
                        response.data.message = "登录失效！"
                        resolve(response.data)
                        console.log('==========')
                        setTimeout(function () {
                            router.push({
                                name: 'account'
                            })
                        }, 500)
                    } else {
                        resolve(response.data)
                    }

                } else {
                    reject(response.data)
                }
            },
            fail(error) {
                wx.hideLoading();

                wx.showToast({
                    icon: "none",
                    title: "网络连接错误，请刷新或稍后重试！"
                })

                reject(error.data)
            },
            complete(error) {
                reject(error)
            }
        })
    })
}

/*const requestFormUrlEncoded = (url, options) => {
    return new Promise((resolve, reject) => {
        wx.showLoading({
            title: '加载中',
        })

        wx.request({
            url: `${app.globalData.host}${url}`,
            method: options.method,
            data: options.method === 'GET' ? options.data : options.data,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                // 根据需求添加token和cookie验证
                'token': wx.getStorageSync("token") || '',  // 看自己是否需要
                // 'cookie': wx.getStorageSync("JSESSION") || '',//读取cookie
            },
            success(request) {
                wx.hideLoading();

                if (request.statusCode === 200) {
                    resolve(request.data)
                } else {
                    reject(request.data)
                }
            },
            fail(error) {
                wx.hideLoading();

                wx.showToast({
                    icon: "none",
                    title: "网络连接错误，请刷新或稍后重试！"
                })

                reject(error.data)
            },
            complete(error) {
                reject(error)
            }
        })
    })
}

const requestUpload = (url, file, options) => {
    return new Promise((resolve, reject) => {
        wx.showLoading({
            title: '加载中',
        })

        wx.uploadFile({
            url: `${app.globalData.host}${url}`,
            filePath: file,
            name: 'file',
            formData: options,
            header: {
                'Content-Type': 'multipart/form-data',
                // 根据需求添加token和cookie验证
                'token': wx.getStorageSync("token") || '',  // 看自己是否需要
                // 'cookie': wx.getStorageSync("JSESSION") || '',//读取cookie
            },
            success(request) {
                wx.hideLoading();

                if (request.statusCode === 200) {
                    resolve(request.data)
                } else {
                    reject(request.data)
                }
            },
            fail(error) {
                wx.hideLoading();

                wx.showToast({
                    icon: "none",
                    title: "网络连接错误，请刷新或稍后重试！"
                })

                reject(error.data)
            },
            complete(error) {
                reject(error)
            }
        })
    })
}*/

const get = (url, options = {}) => {
    return request(url, {method: 'GET', data: options})
}

const post = (url, options) => {
    return request(url, {method: 'POST', data: options})
}

/*const postParams = (url, params, options) => {
    return request(url + "/" + params, {method: 'POST', data: options})
}

const postFormUrlEncoded = (url, options) => {
    return requestFormUrlEncoded(url, {method: 'POST', data: options})
}

const uploadFile = (url, file, options = {}) => {
    return requestUpload(url, file, options)
}

const put = (url, options) => {
    return request(url, {method: 'PUT', data: options})
}

// 不能声明DELETE（关键字）
const remove = (url, options) => {
    return request(url, {method: 'DELETE', data: options})
}*/

module.exports = {
    get,
    post,
    // postParams,
    // postFormUrlEncoded,
    // uploadFile,
    // put,
    // remove
}
