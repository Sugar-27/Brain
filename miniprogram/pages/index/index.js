import * as echarts from '../../ec-canvas/echarts';
var util = require('../../utils/util.js');

const app = getApp();
var chart;
var service = "脑电波测量仪";
var content = "状态感知";
var minutes=100;
var exciting=0;
var relax=0;
var joyfol=0;
var immerse=0;
var concentrate=0;
var press=0;
var yizuo = ["全力以赴", "拼搏向上", "晒晒太阳", "来点甜的", "健身房撸铁", "喝杯奶茶", "抱抱宠物", "慢跑五公里", "准点下班", "热水泡脚", "释放自我", "敷片面膜", "快乐购物", "凑单满减", "整理旧物", "大睡特睡", "理性购物", "拥抱取暖", "蒸桑拿", "大声唱歌", "充足睡眠", "添衣防寒", "保持好心态", "煲电视剧", "煲电话粥", "白色t恤", "收纳衣物", "深夜加餐", "叉腰大笑", "随心生活", "跳健身操", "饭后散步", "夸夸自己", "享受独处", "保持清醒", "深夜电影", "咖啡提神", "天台吹风", "晒被子", "葛优躺", "蹦蹦跳跳", "逛花店", "单曲循环", "原地躺平", "心平气和", "快乐减肥", "按摩肩膀", "放松心情", "多喝水", "保持热情"];
var jizuo = ["闷闷不乐", "心烦意乱", "灰心丧气", "唉声叹气", "垂头丧气", "郁郁寡欢", "忧心忡忡", "愁眉不展", "没精打彩", "惘然若失", "惭凫企鹤", "意懒心灰", "黯然无神", "惘然若失", "顾影惭形", "枯体灰心", "嗒焉自丧", "怅然若失", "百感交集", "思绪万千", "六神无主", "愁眉苦脸", "自暴自弃", "心慌意乱", "失魂落魄", "忧心如焚", "悲伤憔悴", "哽咽难鸣", "自怨自艾", "唉声叹气", "颓废自卑", "半途而废", "浅尝辄止", "萎靡不振", "槁形灰心", "悲观消极", "消沉无神", "沮丧烦闷", "失落惆怅", "忧愁萎靡", "不思进取", "悲伤空虚", "哀怨怅惘", "愁闷自馁", "紧张不安", "急躁幽怨", "黯然神伤", "气急败坏", "惊慌失措", "愁容满面", "愤愤不平", "顾虑重重", "焦灼忐忑", "懒惰拖拉", "满脸愁雾", "怒不可遏", "哀怨沮丧"];
function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    // backgroundColor: "#f6f6f6",
    backgroundColor: "white",
    series: [{
      avoidLabelOverlap:false,  //不要重叠标签
    //   right:1,
      label: {
        normal: {
            // show: false,
            fontSize: 10
        },
      },
      type: 'pie',
      color: [
        '#8378EA',
        '#96BFFF',
        '#37A2DA',
        '#32C5E9',
        '#67E0E3',
        '#9FE6B8',
        '#FFDB5C',
        '#ff9f7f',
        '#fb7293',
        '#E062AE',
        '#E690D1',
        '#e7bcf3',
        '#9d96f5',
      ],
      center: ['100%', '100%'],
      radius: ['0%', '165%'],
      roseType: 'area',
      data: [
       {
          value: 0,
          name: ' '
        },
        {
          value: 0,
          name: ' '
        },
        {
          value: 0,
          name: ' '
        },
        {
          value: 0,
          name: ' '
        },
        {
          value: 0,
          name: ' '
        },
        {
          value: 0,
          name: ' '
        },
        {
          value: 0,
          name: ' '
        },
        {
          value: 0,
          name: ' '
        },
        {
          value: 0,
          name: ' '
        },
        {
          value: 0,
          name: ' '
        },
        {
          value: 0,
          name: ' '
        },
        {
          value: 0,
          name: ' '
        },
        {
          value: 0,
          name: ' '
        },
        {
          value: 0,
          name: ' '
        },
        {
          value: 0,
          name: ' '
        },
        {
          value: 0,
          name: ' '
        },
        {
          value: 0,
          name: ' '
        },
        {
          value: 0,
          name: ' '
        }, {
            value: 0,
            name: '专注'
        }, {
            value: 0,
            name: '沉浸'
        }, {
            value: 0,
            name: '放松'
        }, {
            value: 0,
            name: '愉悦'
        }, {
            value: 0,
            name: '兴奋'
        }, {
          
          value: 0,
          name: '压力'
        },
      ]
    }]
  };

  chart.setOption(option);
  return chart;
}

function initData(that) {
  that.setData({
    ser:service
  })
  that.setData({
    con:content
  })
  that.setData({
    min:minutes
  })
  that.setData({
    e:exciting
  })
  that.setData({
    r:relax
  })
  that.setData({
    j:joyfol
  })
  that.setData({
    i:immerse
  })
  that.setData({
    c:concentrate
  })
  that.setData({
    p:press
  })
}

function getDay() {
  var d = new Date();
  var d2 = d.getDay();
  if (d2 == 0) {
    return "星期天"
  } else if (d2 == 1) {
    return "星期一"
  } else if (d2 == 2) {
    return "星期二"
  } else if (d2 == 3) {
    return "星期三"
  } else if (d2 == 4) {
    return "星期四"
  } else if (d2 == 5) {
    return "星期五"
  } else if (d2 == 6) {
    return "星期六"
  }
}

Page({
  data: {
    ec: {
      onInit: initChart
    }
  },
  onLoad: function(options) {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    // var time = util.formatTime(new Date());
    var time = new Date();
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      year: time.getFullYear(),
      month: time.getMonth() + 1,
      date: time.getDate(),
      day: getDay(),
      yi: yizuo[Math.floor((Math.random() * yizuo.length))],
      ji: jizuo[Math.floor((Math.random() * jizuo.length))],
    });
    wx.setNavigationBarTitle({
      title:'信息展示面板',
    }),
    // initData(this),
    exciting=options.exciting,
    relax=options.relax,
    joyfol=options.joyfol,
    immerse=options.immerse,
    concentrate=options.concentrate,
    press=options.press,
    this.setData({//这里必须使用setDate(不懂请查阅api问昂)
      ser: options.ser,
      min: options.min,
      con: options.con,
      e: options.exciting,
      r: options.relax,
      j: options.joyfol,
      i: options.immerse,
      c: options.concentrate,
      p: options.press,
    }),
    setInterval(function(){
      chart.setOption({
        series: [{
          data: [
            {
               value: 0,
               name: ' '
             },
             {
               value: 0,
               name: ' '
             },
             {
               value: 0,
               name: ' '
             },
             {
               value: 0,
               name: ' '
             },
             {
               value: 0,
               name: ' '
             },
             {
               value: 0,
               name: ' '
             },
             {
               value: 0,
               name: ' '
             },
             {
               value: 0,
               name: ' '
             },
             {
               value: 0,
               name: ' '
             },
             {
               value: 0,
               name: ' '
             },
             {
               value: 0,
               name: ' '
             },
             {
               value: 0,
               name: ' '
             },
             {
               value: 0,
               name: ' '
             },
             {
               value: 0,
               name: ' '
             },
             {
               value: 0,
               name: ' '
             },
             {
               value: 0,
               name: ' '
             },
             {
               value: 0,
               name: ' '
             },
             {
               value: 0,
               name: ' '
             }, {
                 value: concentrate,
                 name: '专注'
             }, {
                 value: immerse,
                 name: '沉浸'
             }, {
                 value: relax,
                 name: '放松'
             }, {
                 value: joyfol,
                 name: '愉悦'
             }, {
                 value: exciting,
                 name: '兴奋'
             }, {
               value: press,
               name: '压力'
             },
           ],  // 加上逗号预览可以修改该值
        }]
      });
    }, 1000);
  },
  onReady() {}
});