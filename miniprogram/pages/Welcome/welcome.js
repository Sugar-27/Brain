//welcome.js

var min = 870;
const db = wx.cloud.database() //获取数据库的引用
const _ = db.command //获取数据库查询及更新指令

Page({
  initData: function () {
    this.setData({
      name: "abv",
      id: "",
      servicetime: "",
      service: "",
      relax: "",
      content: "",
      content: "",
      exciting: "",
      joyfol: "",
      immerse: "",
      concentrate: "",
      press: ""
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
    this.initData();
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

  // 获取设备名称
  serviceInput: function (e) {
    this.setData({
      service: e.detail.value
    })
  },

  // 获取服务时长
  servicetimeInput: function (e) {
    this.setData({
      servicetime: e.detail.value
    })
  },

  // 获取体验内容
  contentInput: function (e) {
    this.setData({
      content: e.detail.value
    })
  },

  // 获取兴奋值
  excitingInput: function (e) {
    this.setData({
      exciting: e.detail.value
    })
  },

  // 获取放松值
  relaxInput: function (e) {
    this.setData({
      relax: e.detail.value
    })
  },

  // 获取愉悦值
  joyfolInput: function (e) {
    this.setData({
      joyfol: e.detail.value
    })
  },

  // 获取沉浸值
  immerseInput: function (e) {
    this.setData({
      immerse: e.detail.value
    })
  },

  // 获取专注值
  concentrateInput: function (e) {
    this.setData({
      concentrate: e.detail.value
    })
  },

  // 获取压力值
  pressInput: function (e) {
    this.setData({
      press: e.detail.value
    })
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
        date: this.data.year + "/" + this.data.month + "/" + this.data.date,
        dateTime: this.data.hour + ":" + this.data.minutes,
        service_name: this.data.service,
        service_time: Number(this.data.servicetime),
        content: this.data.content,
        exciting: Number(this.data.exciting),
        relax: Number(this.data.relax),
        joyfol: Number(this.data.joyfol),
        immerse: Number(this.data.immerse),
        concentrate: Number(this.data.concentrate),
        press: Number(this.data.press),
        id: Number(this.data.id),
      },
      success: res => {
        console.log(res);
      },
      fail: err => {
        console.log(err);
      }
    })
  },
  check: function () {
    console.log(this.data.name.length)
    console.log(this.data.id.length)
    console.log(this.data.servicetime.length)
    console.log(this.data.service.length)
    console.log(this.data.relax.length)
    console.log(this.data.content.length)
    console.log(this.data.exciting.length)
    console.log(this.data.joyfol.length)
    console.log(this.data.immerse.length)
    console.log(this.data.concentrate.length)
    console.log(this.data.press.length)
    if (this.data.name.length == 0 || this.data.id.length == 0 || this.data.servicetime.length == 0 || this.data.service.length == 0 ||
      this.data.relax.length == 0 || this.data.content.length == 0 || this.data.exciting.length == 0 ||
      this.data.joyfol.length == 0 || this.data.immerse.length == 0 || this.data.concentrate.length == 0 || this.data.press.length == 0) {
      return false;
    } else {
      return true;
    }
  },

  JumpTo() {
    if (!this.check()) {
      wx.showToast({
        title: '请输入全部数据',
        icon: 'none',
        duration: 1500
      })
      this.initData
    } else {
      this.search()
      wx.redirectTo({
        url: '../index/index?min=' + this.data.servicetime +
          "&ser=" + this.data.service + "&con=" + this.data.content +
          "&exciting=" + this.data.exciting + "&relax=" + this.data.relax +
          "&joyfol=" + this.data.joyfol + "&immerse=" + this.data.immerse +
          "&concentrate=" + this.data.concentrate + "&press=" + this.data.press,
      })
    }
  },

  onLoad() {
    this.setData({
      min
    });
    wx.setNavigationBarTitle({
      title: '数据输入',
    })
  }
})