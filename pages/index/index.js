//index.js
//获取应用实例
// const app = getApp()

Page({
    data: {
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        titOne: "活动列表",
        titTwo: "下期预告",
        more: "更多"
    },
    onShareAppMessage: function(){
        return {
            title: "培训精彩瞬间",
            path: "/pages/index/index"
        }
    },
    clickMe: function(e){
        var val = e.currentTarget.dataset.id;
        
        console.log(e);
    }
   

})
