/**
 * @name: routes
 * @author: wangyt
 * @date: 2020-11-19 09:17
 * @description：路由页面统一封装
 * @update: 2020-11-19 09:17
 */

module.exports = {
    // 登录
    checkUserInfo: {
        path: '/packageB/pages/checkUserInfo/checkUserInfo'
    },

    // 我的
    account: {
        type: 'tab',
        path: '/pages/account/account',
    },

    // 考试
    exam: {
        type: 'tab',
        path: '/pages/exam/exam',
    },

    // 学习
    study: {
        type: 'tab',
        path: '/pages/study/study',
    },

    // pdf课程
    coursePdf: {
        path: '/packageA/pages/coursePdf/coursePdf'
    },

    // video课程
    courseVideo: {
        path: '/packageA/pages/courseVideo/courseVideo'
    },

    // pdf课程详情
    pdfDetail: {
        path: '/packageC/pages/pdfDetail/pdfDetail'
    },

    // 搜索
    search: {
        path: '/packageB/pages/search/search'
    },

    // 课程测试
    courseTest: {
        path: '/packageC/pages/courseTest/courseTest'
    },

    // 兑换
    exchange: {
        path: '/pages/exchange/exchange'
    },

    // 预警
    warning: {
        path: '/pages/warning/warning'
    },

    // 预警详情
    warningDetail: {
        path: '/packageB/pages/warningDetail/warningDetail'
    },

    // 在线签订告知书
    signNotification: {
        path: '/packageC/pages/signature/signature'
    },
}


