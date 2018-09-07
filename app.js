//app.js
App({
    onLaunch: function () {},
    globalData: {
        userInfo: null,
        defaultCity: 'A市',
        defaultCounty: 'B区'
    },
    /**
     * 获取用户信息
     */
    getUserInfo: function (fn) {
        var that = this;
        if (this.globalData.userInfo) {
            typeof fn == "function" && fn(this.globalData.userInfo);
        } else {
            wx.login({
                success: function () {
                    wx.getUserInfo({
                        success: function (res) {
                            that.globalData.userInfo = res.userInfo;
							typeof fn == "function" && fn(that.globalData.userInfo);

                        }
                    })
                }
            })
        }
    }
})
