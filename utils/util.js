/**
 * 默认时间处理
 * @param date
 * @returns {*}
 */
const formatTime = date => {
    date = date ? date : new Date();
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    return [year, month, day].map(formatNumber).join('-')
}

/**
 * 日期时间小于10拼接0
 * @param n
 * @returns {*}
 */
const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

/**
 * @desc 获取给定地址参数
 * @param name 参数名称  url 地址
 * @returns {string} 参数值
 */
const getQueryParams = (name, url) => {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = url.substring(url.indexOf('?'));
    if (url) {
        let params = r.substr(1).match(reg);
        if (params != null) {
            return decodeURI(params[2]);
        } else {
            return null;
        }
    } else {
        return null;
    }
}

/**
 * @desc 获取当前页面路径及参数
 * @returns {string} 页面路径及参数
 */
const getCurrentPageUrlWithArgs = () => {
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    const url = currentPage.route
    const options = currentPage.options
    let urlWithArgs = `/${url}?`
    for (let key in options) {
        const value = options[key]
        urlWithArgs += `${key}=${value}&`
    }
    urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)
    return urlWithArgs
}


module.exports = {
    formatTime,
    formatNumber,
    getQueryParams,
    getCurrentPageUrlWithArgs
}
