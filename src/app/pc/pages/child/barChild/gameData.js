exports.option = {
  title: {
    text: ""
  },
  tooltip: {
    trigger: "axis"
  },
  color: ["#5d9cec", "#62c87f", "#fb6556", "#ffb847"],
  legend: {
    data: ["浏览人数", "参与人数", "获奖人数"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: {
    type: "time",
  },
  yAxis: {
    type: "value"
  },
  series: [
  ]
};

exports.shareStatisticOption = {
  color: ["rgb(93, 156, 236)", "rgb(113, 213, 141)", "rgb(255, 184, 71)"],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  legend: {
    data: ["浏览人数", "参与人数"],
    top: "20px"
  },
  toolbox: {
    show: false
  },
  xAxis: [
    {
      type: "category",
      axisTick: { show: false },
      data: ["2012", "2013", "2014", "2015", "2016"]
    }
  ],
  yAxis: [
    {
      type: "value"
    }
  ],
  series: [
  
  ]
};

exports.sourceStatDagramOption = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    x: "right",
    textStyle: {
      fontSize: 12
    },
    data: ["朋友圈", "好友及群聊", "二维码"]
  },
  series: [
    {
      color: ["#5d9cec", "#62c87f", "#ffb847"],
      name: "访问来源",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: "center"
        },
        emphasis: {
          show: false
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
      ]
    }
  ]
};


exports.shareEndDagramOption = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    x: "right",
    textStyle: {
      fontSize: 12
    },
    data: ["朋友圈", "好友及群聊"]
  },
  series: [
    {
      color: ["#5d9cec", "#62c87f"],
      name: "访问来源",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: "center"
        },
        emphasis: {
          show: false
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        
      ]
    }
  ]
};

exports.sexStatDiagramOption = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    textStyle: {
      fontSize: 12
    },
    right: "20px",
    top: "20px",
    data: ["男", "女", "未知"]
  },
  series: [
    {
      color: ["#5d9cec", "#fc6f6d", "#73d68f"],
      name: "性别",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: "center"
        },
        emphasis: {
          show: false
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
      ]
    }
  ]
};

exports.backStatDiagramOption = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    textStyle: {
      fontSize: 12
    },
    right: "20px",
    top: "20px",
    data: ["WIFI", "运营商"]
  },
  series: [
    {
      color: ["#73d68f", "#ffb847"],
      name: "网络类型",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: "center"
        },
        emphasis: {
          show: false
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: []
    }
  ]
};