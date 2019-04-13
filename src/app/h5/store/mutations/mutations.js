/* 数据相关 */
export default {
  //配置项相关
  set_bottomTab: function(state, params) {
    state.bottomTab = params;
  },
  set_luckDrawPopupAwardFalg: function(state, params) {
    state.luckDrawPopupAwardFalg = params;
  },
  set_luckDrawPopupAwardType: function(state, params) {
    state.luckDrawPopupAwardType = params;
  },
  set_luckDrawPopupAwarddDetail: function(state, params) {
    state.luckDrawPopupAwarddDetail = params;
  },
  set_h5Data: function(state, params) {
    state.h5Data = params;
  },
  set_isEdit: function(state, params) {
    state.isEdit = params;
  },
  set_loadingEnd: function(state, params) {
    state.loadingEnd = params;
  },
  set_isFristIn: function(state, params) {
    state.isFristIn = params;
  },
  set_autoStartLuckDraw: function (state, params) {
    state.autoStartLuckDraw = params;
  }
};