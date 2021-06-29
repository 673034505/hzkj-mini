import {post, get, postParams, postFormUrlEncoded, uploadFile} from './http.js'

module.exports = {  //暴露接口
    // 登录
    login(params) {
        // return get('/api/gggaxk/login/check/wxLogin', params)
        return get('/auth/loginWeChatApp', params)
    },

    // 获取手机号
    getPhoneNumber(params) {
        // return post('/api/gggaxk/login/check/resolveInfo', params)
        return post('/auth/resolveInfo', params)
    },

    // 第一次登录
    registerWeChatApp(params) {
        // return get('/api/gggaxk/login/check/wxLogin', params)
        return post('/auth/registerWeChatApp', params)
    },

    // 用户信息
    userInfo(params) {
        return get('/api/app/rest/fzxk/course/learn/myInfo', params)
    },

    // 居委会字典
    dictionary(params) {
        return get('/api/dictionary/dataLists', params)
    },

    // 登录验证
    check(params) {
        return post('/api/app/rest/fzxk/login/check/checkUserInfo', params)
    },

    // 切换手机号
    changePhone(params) {
        return post('/auth/switch/phone', params)
    },

}
