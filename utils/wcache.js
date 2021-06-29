/**
 * @name: wcache
 * @author: wangyt
 * @date: 2020-11-23 10:05
 * @description：wcache
 * @update: 2020-11-23 10:05
 */

let dtime = '_deadtime';

/**
 * @desc 存储数据  调用put('key', '123', 1)方法；若永久存储调用put('k', '123') 永久保存json：put('key', {"a":"1"})，数组、boolean等同理。
 * @param key 参数名称  key 键名
 * @param value 参数名称  value 具体内容（支持字符串、json、数组、boolean等等
 * @param effectiveTime 参数名称  effectiveTime为可选参数表示有效时间（单位：秒）
 */
function put(key, value, effectiveTime) {
    wx.setStorageSync(key, value)
    let seconds = parseInt(effectiveTime);
    if (seconds > 0) {
        let timestamp = Date.parse(new Date());
        timestamp = timestamp / 1000 + seconds;
        wx.setStorageSync(key + dtime, timestamp + "")
    } else {
        wx.removeStorageSync(key + dtime)
    }
}

/**
 * @desc 读取缓存  调用get('key')；若想要无缓存时，返回默认值则get('k','默认值')，支持各个数据类型。
 * @param key 参数名称  key 键名
 * @param def 参数名称  def 为可选参数，表示无缓存数据时返回值（支持字符串、json、数组、boolean等等）
 * @returns  def 或者 数据
 */
function get(key,def) {
    let deadtime = parseInt(wx.getStorageSync(key + dtime))
    if (deadtime) {
        if (parseInt(deadtime) < Date.parse(new Date()) / 1000) {
            if (def) { return def; } else { return; }
        }
    }
    let res = wx.getStorageSync(key);
    if (res) {
        return res;
    } else {
        return def;
    }
}

/**
 * @desc 移除某个缓存
 * @param key 参数名称  key 键名
 */
function remove(key) {
    wx.removeStorageSync(key);
    wx.removeStorageSync(key + dtime);
}

/**
 * @desc 清除所有缓存
 */
function clear() {
    wx.clearStorageSync();
}

module.exports = {
    put,
    get,
    remove,
    clear,
}
