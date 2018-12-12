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
