exports.options = {
  credits: {
    enabled: false
  },
  title: {
    text: ""
  },
  xAxis: {
    allowDecimals: true
  },
yAxis: {
    drawLineDash: true,
    tickOptions: { fontSize: "10px", fontFamily: "微软雅黑" }
},
    animate: true,
};
let data = {
  title: { show: false },
  animate: true,
  seriesDefaults: {
    shadow: false,
    markerOptions: { show: true, style: "filledCircle", size: 8, shadow: false }
  },
  axesDefaults: {
    pad: 1,
    tickOptions: { angle: -30, enableFontSupport: true, fontSize: "9pt" }
  },
  axes: {
    xaxis: {
      min: 1543507200000,
      max: 1544025600000,
      tickOptions: {
        formatString: "%m-%d",
        fontSize: "10px",
        fontFamily: "微软雅黑",
        showGridline: false
      },
      numberTicks: 7
    },
    yaxis: {
      drawLineDash: true,
      tickOptions: { fontSize: "10px", fontFamily: "微软雅黑" }
    }
  },
  grid: {
    drawGridLines: true,
    gridLineColor: "#dbdbdb",
    drawBorder: false,
    background: "#fff",
    shadow: false
  },
  cursor: {
    style: "pointer",
    show: true,
    showTooltip: false,
    showCursorLegend: false,
    useAxesFormatters: true,
    showVerticalLine: true,
    showCustomCursorLegend: true,
    customCursorLegendFollowMouse: true,
    customCursorLegendLocation: "e",
    customCursorLegendOffset: 15
  },
  seriesColors: ["#6a9dec", "#62c87f", "#f15755", "#ffbc51"],
  series: [
    { label: "浏览人数" },
    { label: "参与人数" },
    { label: "获奖人数" },
    { label: "分享人数" }
  ]
};

exports.chartDemo = {
  title: {
    text: ""
  },
  subtitle: {
    text: ""
  },
  yAxis: {
    title: {
      text: ""
    },
    lineWidth: 1
  },
  legend: {
    layout: "horizontal",
    align: "center",
    verticalAlign: "top"
  },
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },
  series: [
    {
      name: "安装，实施人员",
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    },
    {
      name: "工人",
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    },
    {
      name: "销售",
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    },
    {
      name: "项目开发",
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    },
    {
      name: "其他",
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }
  ],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom"
          }
        }
      }
    ]
  }
};

exports.option = {
  title: {
    text: ""
  },
  tooltip: {
    trigger: "axis"
  },
  legend: {
    data: ["浏览人数", "参与人数", "获奖人数", "分享人数"]
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      name: "浏览人数",
      type: "line",
      stack: "总量",
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: "参与人数",
      type: "line",
      stack: "总量",
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: "获奖人数",
      type: "line",
      stack: "总量",
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: "分享人数",
      type: "line",
      stack: "总量",
      data: [320, 332, 301, 334, 390, 330, 320]
    }
  ]
};