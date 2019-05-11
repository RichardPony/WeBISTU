// pages/my/my.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color: "",
    xh: "WeBISTU"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData(
    {
      xh: wx.getStorageSync("user_token")[0],
      name:wx.getStorageSync("name")
    }
    )
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
  bind: function () {
    var type = "jwc"
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  about: function () {
    wx.navigateTo({
      url: '/pages/about/about'
    })
  },
  unbind:function()
  {
    wx.showLoading({
      title: '加载中',
    })
    wx.clearStorageSync() //清除缓存
    wx.hideLoading();
    wx.showToast({
      title: '解绑成功',
    })
  }
})