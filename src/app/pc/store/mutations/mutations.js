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
  set_editData: function (state, params) {
    state.editData = params;
  },
  // set_editDataGiftInfo: function (state, params) {
  //   state.editData.giftInfo = params;
  // },
};