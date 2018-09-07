//个人中心
import userCenterOnClick from '../common/personal/personal'
const app = getApp()
Page({
    data: {
        userInfo: {},
        menu: [{
                rowIconPath: '../../images/discovery_focus.png',
                rowRightTitle: '使用说明',
                subtitle: '',
            },
            {
                rowIconPath: '../../images/discovery_focus.png',
                rowRightTitle: '商家优惠推广案例',
                subtitle: '',

            },
            {
                rowIconPath: '../../images/discovery_focus.png',
                rowRightTitle: '系统消息',
                subtitle: '',

            },
            {
                rowIconPath: '../../images/discovery_focus.png',
                rowRightTitle: '聊天消息',
                subtitle: '',

            },
            {
                rowIconPath: '../../images/discovery_focus.png',
                rowRightTitle: '推荐给朋友',
                subtitle: '',

            },
            {
                rowIconPath: '../../images/discovery_focus.png',
                rowRightTitle: '意见反馈',
                subtitle: '',

            },
            {
                rowIconPath: '../../images/discovery_focus.png',
                rowRightTitle: '在线客服',
                subtitle: '',

            },
            {
                rowIconPath: '../../images/discovery_focus.png',
                rowRightTitle: '设置',
                subtitle: '',

            },
        ]
    },
    onLoad: function () {
        var _this = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            //更新数据
            _this.setData({
                userInfo
            })
        })
    },
    //个人中心 item点击事件
    itemclick: function (event) {
        userCenterOnClick.bindUserCenterOnClick(event);
    },
    //进入个人资料
    toPersonalData: function (e) {
		console.log("=====")

    },
    onGotUserInfo: function (e) {
        console.log(e.detail.userInfo)
    }
})
