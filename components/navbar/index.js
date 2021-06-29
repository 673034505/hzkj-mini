// components/navbar/index.js
let router = require('../../router/router');

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            value: '',
            observer: function (newv, oldv, path) {
                this.setData({
                    title: newv
                })
            }
        },
        search: {
            type: Boolean,
            value: false,
            observer: function (newv, oldv, path) {
                this.setData({
                    search: newv
                })
            }
        },
        canBack: {
            type: Boolean,
            value: true,
            observer: function (newv, oldv, path) {
                this.setData({
                    canBack: newv
                })
            }
        },
        course: {
            type: Boolean,
            value: false,
            observer: function (newv, oldv, path) {
                this.setData({
                    canBack: newv
                })
            }
        }
    },
    
    data: {
        title: "",
        search: false,
        canBack: true,
        course: false
    },
    
    methods: {
        // click-left
        handleClickLeft: function () {
            if (this.data.search) {
                router.push({
                    name: 'search'
                })
            } else {
                if (this.data.course) {// 课程详情页
                    let flag = true;
                    this.triggerEvent("handleToStopStudy", flag);// 触发结束学习
                } else {
                    wx.navigateBack({
                        delta: 1
                    })
                }
            }
        }
    }
})
