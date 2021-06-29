// app.js
App({
  onLaunch() {
   // 获取用户信息
    wx.getSetting({
        success: res => {
            if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                console.log(res,'用户信息')
                wx.getUserInfo({
                    success: res => {
                        // 可以将 res 发送给后台解码出 unionId
                        this.globalData.userInfo = res.userInfo

                        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                        // 所以此处加入 callback 以防止这种情况
                        if (this.userInfoReadyCallback) {
                            this.userInfoReadyCallback(res)
                        }
                    }
                })
            }
        }
    })

    // 获取状态栏高
    const res = wx.getSystemInfoSync()
    console.log(res);
    console.log(this.globalData)
    this.globalData.statusBarHeight += res.statusBarHeight
  },
  globalData: {
    userInfo: null,
    // 测试环境
    // baseUrl: "http://xinmeiti.natapp1.cc/gggaxk-mini",
    host: "https://ggga.wehdz.gov.cn",
    // host: "http://192.168.1.211:8000",
    // 生产环境
    baseUrl: "https://ggga.wehdz.gov.cn/gggaxk-mini",
    // host: "https://ggga.wehdz.gov.cn/webspider-gggaxk",
    statusBarHeight: 46,
    list: [
        {
            "pagePath": "/pages/home/home",
            "iconPath": "/assets/tabIcons/icon1.png",
            "selectedIconPath": "/assets/tabIcons/icon1_active.png",
            "text": "首页"
          },
          {
            "pagePath": "/pages/myInfo/myInfo",
            "iconPath": "/assets/tabIcons/icon4.png",
            "selectedIconPath": "/assets/tabIcons/icon4_active.png",
            "text": "我的"
          }
    ]
}
})
