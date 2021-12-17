wx.cloud.init()
const db = wx.cloud.database()  //获取数据库的引用
const _ = db.command     //获取数据库查询及更新指令

Page({
  onShow: function() {
    if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
  },

  data: {
    name: "",
  },
  nameInput: function (name) {
    this.setData({
      name: name.detail.value,
    })
  },
  
  search: function() {
    console.log(this.data.name),
    db.collection('emotive').where({
      name: this.data.name,
    }).get().then(res=>{
      console.log(res.data[0])
      this.setData({
        service: res.data[0]['service_name'],
        servicetime: 10,
        content: res.data[0]['content'],
        e:res.data[0]['exciting'],
        r:res.data[0]['relax'],
        j:res.data[0]['joyfol'],
        i:res.data[0]['immerse'],
        c:res.data[0]['concentrate'],
        p:res.data[0]['press']
      })
    }).catch(err=>{
      console.log(err)
    })
  },

  JumpTo() {
    wx.redirectTo({
      url: '../index/index?min=' + this.data.servicetime 
      + "&ser=" + this.data.service + "&con=" + this.data.content
      + "&exciting=" + this.data.e + "&relax=" + this.data.r
      + "&joyfol=" + this.data.j + "&immerse=" + this.data.i
      + "&concentrate=" + this.data.c + "&press=" + this.data.p,
    })
  },


})