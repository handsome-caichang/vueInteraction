
/* 抽奖活动状态 */
import luckDraw from './luckDraw.js'

/* 数据状态 */
export default {
  ...luckDraw,
  isEdit: false, // 是否编辑
  loadingEnd: false, // 加载loading是否结束
  isFristIn: true, // 是否第一次进入
  autoStartLuckDraw: false, // 是否自动开启抽奖
};