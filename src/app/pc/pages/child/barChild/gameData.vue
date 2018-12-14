<template>
    <div id="gameDataContainer" class="gameDataContainer">
        <div class="activityListTitle">
            <span class="icon"></span><a href="javascript:;" @click="goBack">我的活动</a>/<span class="name">传播数据（HD47）</span>
        </div>
        <div class="activeTabMenu">
            <div class="menu checked" data-page="gameData">传播分析</div>
            <div class="menu" data-page="gameAnlyse">玩家分析</div>
        </div>
        <div class="gameInfoBox">
            <div class="columnTitle">活动详细</div>
			<div class="gameInfo info">
				<div class="line">活动名称：参与活动赢大奖11</div>					
				<div class="line">活动类型：按几率派奖游戏</div>					
				<div class="line">活动模板：幸运大转盘</div>					
				<div class="line">活动时间：2018-12-03 14:49:00&nbsp;到&nbsp;2018-12-10 14:49:00</div>				
				<div class="line">活动状态：<span class="status">进行中</span></div>					
			</div>
			<div class="awardInfo info">
				<div  class="line mainColor">奖项明细：</div>
				<div class='line'><span style='display:inline-block;'>一等奖</span><span class='amountInfo'><span style='margin-left:15px;display:inline-block;'>已领：0份&nbsp;</span><span style='display:inline-block;'>剩余：0份；</span><span style='display:inline-block;'>已核销：0份；</span></span></div>
                <div class='line'><span style='display:inline-block;'>二等奖</span><span class='amountInfo'><span style='margin-left:15px;display:inline-block;'>已领：0份&nbsp;</span><span style='display:inline-block;'>剩余：0份；</span><span style='display:inline-block;'>已核销：0份；</span></span></div>
                <div class='line'><span style='display:inline-block;'>三等奖</span><span class='amountInfo'><span style='margin-left:15px;display:inline-block;'>已领：0份&nbsp;</span><span style='display:inline-block;'>剩余：0份；</span><span style='display:inline-block;'>已核销：0份；</span></span></div>
                <div class='line'><span style='display:inline-block;'>安慰奖</span><span class='amountInfo'><span style='display:inline-block;'></span><span style='margin-left:15px;;display:inline-block;'>已领：1份&nbsp;</span><span id='surplusComfor' class='hide'>剩余：-1份；</span><span style='display:inline-block;'>已核销：0份；</span></span></div>
			</div>
		</div>
        <div class="page_gameData pageBox">
    		<div class="gameStatDataBox">
    			<div class="gameStatDataPanel">
                    <!-- 整体趋势 -->
                    <div class="statistical">
        				<div class="toolBar columnTitle">
        					<div class="title">
        						整体趋势
        					</div>
                            <div class="" style="float: right;">
            					<div class="selectButtonList">
            						<div class="J_selectButton J_activeSelectButton selectButton" _selectType=7>时间</div>
            					</div>
            					<div class="cusSelect">
									 <el-date-picker
										v-model="timeValue"
										type="daterange"
										align="right"
										unlink-panels
										range-separator="至"
										start-placeholder="开始日期"
										end-placeholder="结束日期"
										:picker-options="pickerOptions2">
									</el-date-picker>
            						<div class="J_selectButton cusSelectButton"><span class="icon"></span>查询</div>
            					</div>
                            </div>
        				</div>
        				<div class="statData">
        					<div class="column other">
        						<div class="box">
        							浏览人数：<div id="pv" class="count">0</div>
        						</div>	
        					</div>
        					<div class="column other">
        						<div class="box">
        							参与人数：<div id="ptcp" class="count">0</div>
        						</div>	
        					</div>
        													
        					<div class="column other">
        						<div class="box">
        							获奖人数：<div id="price" class="count">0</div>
        						</div>
        					</div>
        					<div class="column other">
        					<div class="box" style="border: none;">
        						分享人数：<div id="share" class="count">0</div>
        					</div>
        				</div>	
        				</div>
        				<div class="statDiagram" style="margin: 0; padding-right: 16px;">
        					<!--<div class="columnTitle statDiagramTitleBar">
        						趋势图
        						<span class="right J_statDesc mainColor statDesc">注释？
        							<div class="J_statDescPanel statDescPanel">
        								<div class="panelAllow"></div>
        								<ul class="panelList">
        									<li class="panelItem">浏览人数：进入活动页面的人数；</li>
        									<li class="panelItem">参与人数：成功参与活动的人数；</li>
        																	
        									<li class="panelItem">获奖人数：获得奖项的人数；</li>
        									<li class="panelItem">核销人数：已经兑奖的人数；</li>
        									<li class="panelItem">分享人数：把页面分享到朋友圈或朋友的人数；</li>
        								</ul>
        							</div>
        						</span>
        					</div>-->
        					<div class="statDiagramPanel">
                                <!-- <span id="ztqs" class="right J_statDesc mainColor statDesc ztqsTips">注释？</span> -->
        						<div class='statDiagramContent' style="padding:50px 20px;">
        							<!-- <div class='statDiagramToolBar'>
        								<div class='J_statType item' _statType='1'><span class='icon bros'></span>浏览人数</div>
        								<div class='J_statType item' _statType='2'><span class='icon part'></span>参与人数</div>
        																			
        								<div class='J_statType item' _statType='3'><span class='icon price'></span>获奖人数</div>
        								<div class='J_statType item' _statType='4'><span class='icon share'></span>分享人数</div>
        							</div> -->
        							<div id="statDagram" style="width: 100%;min-height: 300px"></div>
        						</div>
                                <div class="statDiagramTips" style="padding-top: 30px;">注：趋势图数据并非实时更新，5分钟统计一次，会有一定误差，以活动累计数据为准</div>
        					</div>
        				</div>
                    </div>
                    <!-- 传播层级 -->
                    <div class="statDiagram">
    					<div class="columnTitle ">
    						传播层级
    						<span id="cbcj" class="right J_statDesc mainColor statDesc">注释？</span>
    					</div>
    					<div class="statDiagramPanel">
    						<div class='statDiagramContent'>
    							<div id="statSpreadDagram"></div>
    						</div>
                            <div class="statDiagramTips">注：传播层级数据并非实时更新，5分钟统计一次，会有一定误差</div>
    					</div>
    				</div>
                    <!-- 进入来源 -->
                    <div class="sourceBlock sourceStat left">
						<div class="statDiagramTitleBar bottomBoder">
							<div class="lineTitle left">
	    						<div class="titleIcon left"></div>
	    						<div class="left info">进入来源</div>
	    					</div>
	    					<span id="jrly" class="right J_statDesc mainColor statDesc">注释？
								<div class="J_statDescPanel statDescPanel">
									<div class="panelAllow"></div>
									<ul class="panelList">
										<li class="panelItem">好友及群聊：通过好友及群聊对话参与活动的次数</li>
										<li class="panelItem">朋友圈：通过朋友圈参与活动的次数</li>
										<li class="panelItem">图文信息：通过公众号图文信息参与活动的次数</li>
										<li class="panelItem">二维码：通过扫二维码参与活动的次数</li>
										
										<li class="panelItem">券宝小程序：通过券宝小程序参与活动的次数</li>
										
										<li class="panelItem">其他：通过其他渠道参与活动的次数</li>
									</ul>
								</div>
							</span>
						</div>
						<div class="statDiagramPanel">
							<div id="sourceStatDagram"></div>
                            <div class="statDiagramTips" style="padding-top: 0">注：进入来源数据并非实时更新，5分钟统计一次，会有一定误差</div>
						</div>
					</div>
                    <!-- 分享去向 -->
                    <div class="sourceBlock shareEnd left">
						<div class="statDiagramTitleBar bottomBoder">
							<div class="lineTitle left">
	    						<div class="titleIcon left"></div>
	    						<div class="left info">分享去向</div>
	    					</div>
	    					<span id="fxqx" class="right J_statDesc mainColor statDesc">注释？
    							<div class="J_statDescPanel statDescPanel">
    								<div class="panelAllow"></div>
    								<ul class="panelList">
    									<li class="panelItem">微信好友：把活动分享给微信好友的次数</li>
    									<li class="panelItem">朋友圈：把活动分享给朋友圈的次数</li>
    								</ul>
    							</div>
    						</span>
						</div>
						<div class="statDiagramPanel">
							<div id="shareEndDagram"></div>
                            <div class="statDiagramTips" style="padding-top: 0">注：分享去向数据并非实时更新，5分钟统计一次，会有一定误差</div>
						</div>
					</div>
                    <div style="clear: both"></div>
                    
    			</div>
    		</div>
        </div>
    </div>
</template>
<script>
// import Highcharts from "highcharts";
// Load the exporting module.
// import Exporting from "highcharts/modules/exporting";
// Initialize exporting module.
// Exporting(Highcharts);
var echarts = require('echarts');
import {options,chartDemo,option} from './gameData.js'
export default {
  name: "gameData",
  data() {
	  return {
		  statDagram: null,
		  timeValue: '',
		   pickerOptions2: {
          shortcuts: [
			  {
					text: '今天',
					onClick(picker) {
						const start = new Date();
						picker.$emit('pick', [start, start]);
					}
				},
				{
					text: '昨天',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24);
						picker.$emit('pick', [start, end]);
					}
				},
			   {
					text: '最近一周',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
						picker.$emit('pick', [start, end]);
					}
				}, {
					text: '最近一个月',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
						picker.$emit('pick', [start, end]);
					}
				}]
			},
	  }
  },
  methods: {
	  goBack() {
		  this.$emit('toBackGameData', -1)
	  }
  },
  created() {
      this.$nextTick(() => {
		  this.statDagram = echarts.init(document.getElementById('statDagram'));
		  console.log(this.statDagram)
		  this.statDagram.setOption(option);
        //    Highcharts.chart("statDagram", chartDemo)
      })
  }
};
</script>
<style scoped>
@import "./gameData.scss";
.gameDataContainer {
  background: none repeat scroll 0 0 #f5f5f5;
  margin-bottom: 68px;
}
.activityListTitle {
  font-size: 16px;
  line-height: 16px;
  padding: 10px 0 20px 15px;
  color: #949494;
}
.activityListTitle a {
  text-decoration: underline;
  color: #585858;
  display: inline-block;
  margin-right: 8px;
}
.activityListTitle .icon {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-top: solid 1px #585858;
  border-left: solid 1px #585858;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  margin-top: -3px;
  vertical-align: middle;
  margin-right: 4px;
}
.activityListTitle .name {
  display: inline-block;
  margin-left: 8px;
}
.columnTitle:before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 4px;
  height: 19px;
  background: #329fea;
  margin-right: 8px;
  margin-top: -2px;
}
</style>
