var temp = {
    bindUserCenterOnClick: function (event) {
        var index = event.currentTarget.dataset.index;
        switch (index) {
            case 0:
                wx.showToast({
                	title:"0"
                })
                break;
            case 1:
                wx.showToast({
                	title:"1"
                })
                break;
            case 2:
               wx.showToast({
               	title:"2"
               })
                break;
            case 3:
               wx.showToast({
               	title:"3"
               })
                break;
            case 4:
                wx.showToast({
                	title:"4"
                })
                break;
            case 5:
               wx.showToast({
               	title:"5"
               })
                break;
            case 6:
                wx.showToast({
                	title:"6"
                })
                break;
            case 7:
                wx.showToast({
                	title:"7"
                })
                break;
        }
    }
}
export default temp;
