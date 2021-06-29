/**
 * @name: index
 * @author: wangyt
 * @date: 2020-11-19 09:23
 * @description：路由条状方法封装以及参数处理
 * @update: 2020-11-19 09:23
 */

/*
使用如下：
// page home
const router = require('../../router/router.js');
router.push({
  name: 'uc',  或者 'pages/user_center/a/index',  或者 'index',
  data: {
    isActive: true,
}),


// page uc
Page({
  onLoad(options) {
    const json = router.extract(options);
    console.log(json.isActive); // => true
    console.log(typeof json.isActive); // => "boolean"
    console.log(json.isActive === true); // => true
  },
})

* */

const routes = require('./routes.js');

/**
 * @desc 页面路由跳转
 * @param name 参数名称  路由名称
 * @param data 参数名称  路由传参
 */
let push = ({name, data}) => {
    const dataStr = encodeURIComponent(JSON.stringify(data));  // 参数进行处理
    const route = routes[name];
    
    const url = route ? route.path : `pages/${name.replace(/\\./g, '/')}/${name.replace(/\\./g, '')}`;
    console.log(url);
    if (route.type === 'tab') {
        wx.switchTab({
            url: `${url}`, // tab页面是不支持传参的
        });
        return;
    }
    
    wx.navigateTo({
        url: `${url}?encodedData=${dataStr}`,
    })
    
}

/**
 * @desc 处理页面传参
 * @param options 参数名称  options 字符串参数
 * @returns {Object} 参数对象
 */
let extract = (options) => {
    return JSON.parse(decodeURIComponent(options.encodedData));
}


module.exports = {
    push,
    extract,
};
