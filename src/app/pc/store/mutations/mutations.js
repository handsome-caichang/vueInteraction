/* 数据相关 */
export default {
  set_globalMaskFlag: function(state, params) {
    state.globalMaskFlag = params;
  },
  set_headerType: function(state, params) {
    state.headerType = params;
  },
  set_userInfo: function(state, params) {
    state.userInfo = params;
  },
  set_editData: function(state, params) {
    state.editData = params;
  },
  set_h5Data: function(state, params) {
    state.h5Data = params;
  },
  set_loadingFlag: function(state, params) {
    state.loadingFlag = params;
  }
};