// pages/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "swiper_height": 200,
    "notices": [{
      
      pic: "/images/slide.png"
    }],
    "navs":[
    {
      key:"timetable",
      desc:"课表"
    },
    {
      key:"score",
      desc:"成绩"
    },
    {
      key:"room",
      desc:"教室"
    },
    {
      key:"test",
      desc:"考试"
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  noticeTo:function(e)
  {
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },

  submit:function(e)
  {
    if(!wx.getStorageSync("user_token"))
      wx.showModal({
        title: '绑定提示',
        content: '请先绑定教务处',
        confirmText:'去绑定',
        success(res){
          if(res.confirm)
            wx.navigateTo({
              url: '/pages/logs/logs',
            })
        }
      })
    else
    {
      var key = e.detail.target.dataset.key
      if(key=='score'||key=='timetable')
      wx.navigateTo({
        url: '/pages/' + key + '/' + key,
      })
      else
        wx.showModal({
          title: '提示',
          content: '功能开发中，敬请期待',
        })
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
})
