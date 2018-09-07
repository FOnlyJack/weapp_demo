//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        imgUrls: [
            'http://img2.imgtn.bdimg.com/it/u=783340072,1312243264&fm=27&gp=0.jpg',
            'http://attachments.gfan.com/forum/attachments2/day_110514/110514014419e664eeb0365e38.jpg',
            'http://img.mp.itc.cn/upload/20170324/663c85eae74f4320a3e382f03af76d52_th.jpg'
        ],
        circular: true,
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        isShow: true,
        currentTab: 0,
        imageWidth: 0,
        location: app.globalData.defaultCity,
        county: app.globalData.defaultCounty,
        caseArrays: [{
                companyTitle: '清香型',
                price: 100,
                num: 1
            },
            {
                companyTitle: '清香型1',
                price: 100,
                num: 2
            },
            {
                companyTitle: '清香型2',
                price: 100,
                num: 3
            },
            {
                companyTitle: '清香型3',
                price: 100,
                num: 4
            },
            {
                companyTitle: '清香型4',
                price: 100,
                num: 5
            },
        ]
    },
    onLoad: function (options) {
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    imageWidth: res.windowWidth,
                    location: app.globalData.defaultCity,
                    county: app.globalData.defaultCounty
                });
            }
        });
    },
    onShow: function (options) {
        var that = this;
        that.setData({
            location: app.globalData.defaultCity,
            county: app.globalData.defaultCounty
        });
    },
    tabNav: function (e) {
        var that = this;
        if (that.data.currentTab === e.target.dataset.current) {
            return false;
        } else {

            var showMode = e.target.dataset.current == 0;

            that.setData({
                currentTab: e.target.dataset.current,
                isShow: showMode
            })
        }
    },
    tabChange: function (e) {
        var that = this;
        var source = e.detail.source;
        if (source == "touch") {
            var showMode = e.detail.current == 0;
            that.setData({
                currentTab: e.detail.current,
                isShow: showMode
            })
        } else {
            return false;
        }
    },
    switchCityOnClickListener: function (e) {
        wx.navigateTo({
            url: '../switchcity/switchcity'
        })
    }
})
