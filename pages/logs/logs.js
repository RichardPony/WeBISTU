// pages/more/bind.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: "jwc",
    types: {
      jwc: {
        name: "教务处",
        url: ":8080",
        verify: "jwc_verify",
        password: "jwc_password",
        help: "密码为教务系统的密码,忘记密码可以访问选课系统找回"
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.type = this.data.type;
    // this.setData({
    //   type: this.type
    // })
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
  // get_code: function () {
  //   var that = this;
  //   wx.login({
  //     success: function (res) {
  //       if (res.errMsg == "login:ok") {
  //         that.code = res.code;
  //       }
  //     }
  //   })
  // },
  /**
   *  绑定函数 
   */
  bind: function (e) {
    var params = e.detail.value
    if (params.xh.length < 10 || params.password.length < 4) {
      wx.showModal({
        title: '错误提示',
        content: '账号或密码格式不正确'
      })
      return
    }
    //params.login_code = this.code
    var _this = this
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: app.server + this.data.types[this.data.type].url,
      data: params,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      success: function (res) {
        var data = res.data
        if (data.State_Code == '200') {
          wx.setStorageSync("GPA", data.GPA)
          wx.setStorageSync("grade", data.grade)
          wx.setStorageSync("user_token", data.user_token)
          wx.setStorageSync("timetable",data.timetable)
          wx.setStorageSync("name", data.name)
          wx.setStorageSync("major",data.major)
          wx.showToast({
            title: '绑定成功,跳转中',
            duration: 1500,
            success: function () {
              wx.reLaunch({
                url: '/pages/index/index',
              })
            }
          })
        }
      },
      fail:function()
      {
        wx.hideLoading();
        wx.showModal({
          title: '登录失败',
          content: '密码错误或服务端出错',
          confirmText: '重试',
        })
      }
    });
  }
})