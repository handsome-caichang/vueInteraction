<template>
    <div id="content" style="overflow: hidden;">
        <div class="hd-shoTheActBar" style="position:absolute;top:68px;bottom:0px;left:0px;right:0px;">
            <div id="hdManageLeft">
                <div id="newActiveTab" v-for="(item,index) in list" :key="index" class="leftUtil" :class="currentIndex == index ? 'hoverChecked checked' : ''">
                    <div class="iconHolder" :class="item.ico"></div>
                    <div class="leftUtildescr" @click="tabClick(item, index)">{{item.name}}</div>
                </div>
            </div>
            <div id="manageFrame" class="scrollBox">
                <div class="manageFrameWarp checked" >
                    <!-- <bar-list></bar-list> -->
                    <component class="component" :is="currentTabComponent" >
                    </component>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import BarList from './bar-list'
import ActiveList from './active-list'
import Destruction from './destruction'
export default {
  name: 'bar',
  data () {
    return {
        list: [
            {
                ico: '',
                name: '创建活动',
                component: 'BarList'
            },
            {
                ico: 'iconActList',
                name: '我的活动',
                component: 'ActiveList'
            },
            {
                ico: 'iconHexiao',
                name: '核销管理',
                component: 'destruction'
            },
            // {
            //     ico: 'iconMyinfo',
            //     name: '个人中心',
            //     path: ''
            // }
        ],
        currentIndex: 0,
        currentTab: 'BarList'
    }
  },
  computed: {
    currentTabComponent() {
        return this.currentTab
    }
  },
  methods: {
      tabClick(item, index) {
          this.currentIndex = index;
          this.currentTab = item.component;
      }
  },
  components: {
      BarList,
      ActiveList,
      Destruction
  }
}
</script>
<style scoped>
    @import '../../assets/css/fai.scss';
    @import '../../assets/css/header.scss';
    @import '../../assets/css/index.scss';
    .leftUtildescr {
        font-size: 14px;
    }
    .hd-shoTheActBar {
        display: flex;
    }
    #hdContainer #manageFrame{
        position: fixed;
        flex: 1;
        width: auto;
    }
</style>
