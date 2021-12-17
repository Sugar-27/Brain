//welcome.js

var min = 870;
const db = wx.cloud.database()  //获取数据库的引用
const _ = db.command     //获取数据库查询及更新指令

Page({
  onShow: function() {
    if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
  },

  //获取用户输入的用户名
  nameInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },

  //获取用户输入的ID
  idInput: function (e) {
    this.setData({
      id: e.detail.value
    })
  },

  serviceInput: function (e) {
    this.setData({
      service: e.detail.value
    })
  },

  servicetimeInput: function (e) {
    this.setData({
      servicetime: e.detail.value
    })
  },

  contentInput: function (e) {
    this.setData({
      content: e.detail.value
    })
  },

  excitingInput: function (e) {
    this.setData({
      exciting: e.detail.value
    })
  },

  relaxInput: function (e) {
    this.setData({
      relax: e.detail.value
    })
  },

  joyfolInput: function (e) {
    this.setData({
      joyfol: e.detail.value
    })
  },

  immerseInput: function (e) {
    this.setData({
      immerse: e.detail.value
    })
  },

  concentrateInput: function (e) {
    this.setData({
      concentrate: e.detail.value
    })
  },

  pressInput: function (e) {
    this.setData({
      press: e.detail.value
    })
  },

  passWdInput: function (e) {
    this.setData({
      userPwd: e.detail.value
    })
  },
  //获取用户输入的密码
  loginBtnClick: function (e) {
    console.log("用户名：" + this.data.userName + " 密码：" + this.data.userPwd + " 时间： " + this.data.servicetime);
  },

  search: function () {
    var time = new Date();
    this.setData({
      year: time.getFullYear(),
      month: time.getMonth() + 1,
      date: time.getDate(),
      day: time.getDay(),
      hour: time.getHours(),
      minutes: time.getMinutes(),
    });
    db.collection('emotive').add({
      data: {
        name: this.data.name,
        date: this.data.year + "/" +  this.data.month + "/" + this.data.date,
        dateTime: this.data.hour + ":" + this.data.minutes,
        service_name: this.data.service,
        service_time: this.data.servicetime,
        content: this.data.content,
        exciting: this.data.exciting,
        relax: this.data.relax,
        joyfol: this.data.joyfol,
        immerse: this.data.immerse,
        concentrate: this.data.concentrate,
        press: this.data.press,
        id: this.data.id,
      }, 
      success: res=>{
        console.log(res);
      },
      fail: err=>{
        console.log(err);
      }
    })
  },

  JumpTo() {
    this.search()
    wx.redirectTo({
      url: '../index/index?min=' + this.data.servicetime 
      + "&ser=" + this.data.service + "&con=" + this.data.content
      + "&exciting=" + this.data.exciting + "&relax=" + this.data.relax
      + "&joyfol=" + this.data.joyfol + "&immerse=" + this.data.immerse
      + "&concentrate=" + this.data.concentrate + "&press=" + this.data.press,
    })
  },

  onLoad() {
    var isEmpty = wx.getStorageSync('image').isEmpty;
    var imgUrl = wx.getStorageSync('image').imgUrl;
    var textValue = wx.getStorageSync('Text');
    this.setData({
      isEmpty,
      imgUrl,
      textValue,
      min
    });
    wx.setNavigationBarTitle({
      title: '欢迎页面',
    })
  }
})