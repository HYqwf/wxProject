// pages/myApply/myApply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        id: 122,
        tit: "情境式沟通",
        intro: "报名已结束情境式沟通报名已结束情境式沟通报名已结束情境式沟通报名已结束情境式沟通报名已结束情境式沟通报名已结束情境式沟通",
        info: {
            classTime: "2017年12月18日 18: 40",
            classPlace: "B区一楼培训室（食堂边）",
            classTeacher: "陈隆（阿蛮）小游戏事业部 视频高级主管"
        }
    },{
        id: 123,
        tit: "你该知道的页面配色",
        intro: "色彩搭配看似复杂，但并不神秘。既然每种色彩在印象空间中都有自己的位置，那么色彩搭配得到的印象可以用加减法来近似估算。如果每种色彩都是高亮度的，那么它们的叠加，自然会是柔和、明亮的；如果每种色彩都是浓烈的，那么它们叠加，就会是浓烈的。当然在实际设计过程中，设计师还要考虑到乘除法，比如同样亮度和对比度的色彩，在色环上的角度不同，搭配起来就会得到千变万化的感觉",
        info: {
            classTime: "2017年12月13日 18: 40",
            classPlace: "B区一楼培训室（食堂边）",
            classTeacher: "陈隆（阿蛮）小游戏事业部 视频高级主管"
        }
    }, {
        id: 124,
        tit: "你高估的Logo设计",
        intro: "在这样一个高密度的信息轰炸的社会，怎么样能更好的调动消费者，使得很多的公司对品牌设计越来越重视。而鲜明独特的 LOGO 做为一个品牌的形象标志，起到了一个相当大的作用。 那么能够了解并掌握LOGO的一些基础知识和绘制及其设计思路尤为重要。 这节分享课主要说下LOGO的基础知识，还有讲师的设计经验、总结。以及学习如何用软件简单设计LOGO，希望大家能学到一些东西。",
        info: {
            classTime: "2017年12月08日 18: 40",
            classPlace: "B区一楼培训室（食堂边）",
            classTeacher: "陈隆（阿蛮）小游戏事业部 视频高级主管"
        }
    }

    ]
  },
  onLoad: function () {
      wx.setNavigationBarTitle({
          title: "培训信息列表"
      })
  },
  viewDetail: function(e){
      console.log(e)
      var param = e.currentTarget.dataset
      wx.navigateTo({
          url: '/pages/detail/detail?id='+param.id+'&title='+param.title,
      })
  }

  
})