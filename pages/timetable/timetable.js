var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headers:[{},{},{},{},{},{},{}],
    month:"",
    week_day:"",
    schedules:[
      ['', '', '', '', '',],
      ['', '', '', '', '',],
      ['', '', '', '', '',],
      ['', '', '', '', '',],
      ['', '', '', '', '',],
      ['', '', '', '', '',],
      ['', '', '', '', '',]
    ],
    weeks:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
    times:[
      {
        time:"8:00",
        end:"8:45",
        num:1
      },
      {
        time:"8:50",
        end:"9:35",
        num:2
      },
      {
        time:"9:50",
        end:"10:35",
        num:3
      },
      {
        time:"10:40",
        end:"11:25",
        num:4
      },
      {
        time:"11:30",
        end:"12:15",
        num:5
      },
      {
        time:"13:30",
        end:"14:15",
        num:6
      },
      {
        time:"14:20",
        end:"15:05",
        num:7
      },
      {
        time:"15:20",
        end:"16:05",
        num:8
      },
      {
        time:"16:10",
        end:"16:55",
        num:9
      },
      {
        time: "18:30",
        end: "19:15",
        num: 10
      },
      {
        time: "19:20",
        end: "20:05",
        num: 11
      },
      {
        time: "20:10",
        end: "20:55",
        num: 12
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var timestamp = Date.parse(new Date());
    // var date = new Date(timestamp);
    // //获取年份  
    // var Y = date.getFullYear();
    // //获取月份  
    // var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    // //获取当日日期 
    // var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    // console.log(Y + '年' + M + '月' + D + '日');

    var today = new Date();
    var firstDay = new Date(2019, 6, 1);
    var dayOfWeek = firstDay.getDay();
    var spendDay = 1;
    if (dayOfWeek != 0) {
      spendDay = 7 - dayOfWeek + 1;
    }
    firstDay = new Date(2019, 6, 1 + spendDay);
    var d = Math.ceil((today.valueOf() - firstDay.valueOf()) / 86400000);
    var result = Math.ceil(d / 7);
    this.week = result - 7
    this.stuclass = wx.getStorageSync("timetable")
    this.render_kb()

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

  render_kb:function()
  {
    var stuclass = this.stuclass
    var colors = ["green", "red", "purple", "yellow", "blue"];
    var schedules = 
    [
      [{
          num: 1,
          cls: []
        },
        {
          num: 2,
          cls: []
        },
        {
          num: 1,
          cls: []
        },
        {
          num: 1,
          cls: []
        },
        {
          num: 2,
          cls: []
        },
      ],
      [{
          num: 1,
          cls: []
        },
        {
          num: 2,
          cls: []
        },
        {
          num: 1,
          cls: []
        },
        {
          num: 1,
          cls: []
        },
        {
          num: 2,
          cls: []
        },
      ],
      [{
          num: 1,
          cls: []
        },
        {
          num: 2,
          cls: []
        },
        {
          num: 1,
          cls: []
        },
        {
          num: 1,
          cls: []
        },
        {
          num: 2,
          cls: []
        },
      ],
      [{
          num: 1,
          cls: []
        },
        {
          num: 2,
          cls: []
        },
        {
          num: 1,
          cls: []
        },
        {
          num: 1,
          cls: []
        },
        {
          num: 2,
          cls: []
        },
      ],
      [{
        num: 1,
        cls: []
      },
        {
          num: 2,
          cls: []
        },
        {
          num: 1,
          cls: []
        },
        {
          num: 1,
          cls: []
        },
        {
          num: 2,
          cls: []
        },
      ],
      [{
        num: 1,
        cls: []
      },
        {
          num: 2,
          cls: []
        },
        {
          num: 1,
          cls: []
        },
        {
          num: 1,
          cls: []
        },
        {
          num: 2,
          cls: []
        },
      ],
      [{
          num: 1,
          cls: []
        },
        {
          num: 2,
          cls: []
        },
        {
          num: 1,
          cls: []
        },
        {
          num: 1,
          cls: []
        },
        {
          num: 2,
          cls: []
        },
      ],
    ] 
    var last_color = -1
    var tmp_colors = {}
    console.log(this.week)
    for(var i in stuclass)//第i节的课
    {
      var lessons = stuclass[i]
      for(var j in lessons)//第j天的课
      {
        var temp = lessons[j]
       
        if(Array.isArray(temp))
        {
          
          for(var m = 0;m < temp.length;m++)
          {
            var flag = false
            console.log(temp[m],temp[m].begin,temp[m].end)
            var now = parseInt(this.week)
            if (now >= parseInt(temp[m].begin) && now <= parseInt(temp[m].end)&&(temp[m].isDan==0||(temp[m].isDan==1&&now%2==1)||(temp[m].isDan==2&&now%2==0))) ///////////还需添加对单双周的判断
            {
              console.log(this.week,temp[m])
              if(tmp_colors[temp[m].name])
              {
                var color = tmp_colors[temp[m].name]    //之前这门课已经有颜色了
              }
              else
              {
                var color = Math.floor(Math.random()*10) % 5   //随机颜色
                if(color == last_color)
                  color = (color + 1) % 5
                tmp_colors[temp[m].name] = color
              }
              if (i == 5) {
                i = 4;
              }
              //console.log(temp[m])
              schedules[j][i].num = temp[m].length - 1
              schedules[j][i].cls.push({
                flag:true,
                cls:temp[m],
                color:colors[color]
              })
              last_color = color
              flag = true;
              break;
            }
            if (flag == false) {
              if (i == 5) {
                i = 4;
              }
              schedules[j][i].num = temp[m].length - 1
              schedules[j][i].cls.push({
                flag: false,
                "cls": temp[m],
              })
            }
          }
          
        }
      } 
    }

    var date = new Date(2019, 8, 2) // 获取每学期第一天;
    date = new Date(date.getTime() + 7 * 24 * 3600000 * (this.week - 1)) //获取到某个周的第一天的日期
    this.month = date.getMonth() + 1
    this.headers = []
    for (var _i2 = 0; _i2 < 7; _i2++) {
      this.headers.push({
        day: ["日", "一", "二", "三", "四", "五", "六"][date.getDay()],
        date: date.getDate()
      });
      date.setDate(date.getDate() + 1);
    }
    this.setData(
    {
      month: this.month,
      week: this.week,
      headers:this.headers,
      schedules:schedules
    })
  },

  changeweek: function (e) {
    this.week = e.detail.value
    this.render_kb()
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
    
  }
})