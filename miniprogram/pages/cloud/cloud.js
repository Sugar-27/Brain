const db = wx.cloud.database() //获取数据库的引用
const _ = db.command //获取数据库查询及更新指令

Page({
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },

  data: {
    name: "",
    emotiveData: [],
    array: [""],
  },
  nameInput: function (name) {
    this.setData({
      name: name.detail.value,
    }),
    this.search()
  },

  bindPickerChange: function (e) {
    this.search()
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    this.setData({
      service: this.data.emotiveData[this.data.index]['service_name'],
      servicetime: this.data.emotiveData[this.data.index]['service_time'],
      content: this.data.emotiveData[this.data.index]['content'],
      e: this.data.emotiveData[this.data.index]['exciting'],
      r: this.data.emotiveData[this.data.index]['relax'],
      j: this.data.emotiveData[this.data.index]['joyful'],
      i: this.data.emotiveData[this.data.index]['immerse'],
      c: this.data.emotiveData[this.data.index]['concentrate'],
      p: this.data.emotiveData[this.data.index]['press']
    })
  },

  search: function () {
    console.log(this.data.name),
      // 数据查询
      db.collection('emotive').where({
        name: this.data.name,
      }).get().then(res => {
        console.log(res.data)
        this.setData({
          emotiveData: res.data,
        })
        this.data.array.splice(0, this.data.array.length)
        for (let index = 0; index < this.data.emotiveData.length; index++) {
          this.data.array.push(this.data.emotiveData[index]['date'] + "    " + this.data.emotiveData[index]['dateTime'])
        }
        this.data.array = Array.from(this.data.array)
        this.setData({
          array: this.data.array
        })
        console.log(this.data.array)
        // this.setData({
        //   service: res.data[0]['service_name'],
        //   servicetime: res.data[0]['service_time'],
        //   content: res.data[0]['content'],
        //   e: res.data[0]['exciting'],
        //   r: res.data[0]['relax'],
        //   j: res.data[0]['joyful'],
        //   i: res.data[0]['immerse'],
        //   c: res.data[0]['concentrate'],
        //   p: res.data[0]['press']
        // })
      }).catch(err => {
        console.log(err)
      }),
      console.log(this.data.array)
    this.onShow()
  },

  JumpTo() {
    wx.redirectTo({
      url: '../index/index?min=' + this.data.servicetime +
        "&ser=" + this.data.service + "&con=" + this.data.content +
        "&exciting=" + this.data.e + "&relax=" + this.data.r +
        "&joyful=" + this.data.j + "&immerse=" + this.data.i +
        "&concentrate=" + this.data.c + "&press=" + this.data.p,
    })
  },

  onLoad() {
    wx.setNavigationBarTitle({
      title: '数据查询',
    })
  }
})