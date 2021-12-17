Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/Welcome/welcome",
      iconPath: "/images/iconBar.png",
      selectedIconPath: "/images/iconBar.png",
      text: "数据输入"
    }, {
      pagePath: "/pages/cloud/cloud",
      iconPath: "/images/iconBar.png",
      selectedIconPath: "/images/iconBar.png",
      text: "数据查询"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})