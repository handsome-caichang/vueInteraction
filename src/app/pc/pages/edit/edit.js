import shardImg from '../../assets/images/l_xydzp.jpg'
export const editMixin = {
    data() {
        return {
            leftList: [
                {
                    name: '首页',
                    type: 'baseSet',
                    data: 'luckDraw'
                },
                {
                    name: '奖品详情',
                    type: 'prizeSet',
                    data: 'awardDetail/test',
                },
                {
                    name: '中奖页面',
                    type: "awardYes",
                    data: "2",
                },
                {
                    name: '没中奖页',
                    type: 'awardNo',
                    data: '1'
                },
            ],
            editData: {
                h5Data: {
                    awardDetailName: "长沙市校管家教育科技有限公司",
                    awardDetaiInfo: "兑换券详情"
                },
                id: "",
                bizData: {
                    giftInfo: [
                        {
                            giftId: "1",
                            id: "", // id
                            levelName: "一等奖", // 奖品等级名称
                            name: "价值100元礼品", // 奖品名称
                            count: 0, // 奖品数量
                            operationNotify: "凭券联系现场工作人员兑奖", // 操作提示
                            address: "请填写您的兑奖地址或者门店地址", // 兑换地址
                            telphone: "", // 联系电话
                            cashStartTime: app.tool.getNowFormatDate(), // 兑换开始时间
                            cashEndTime: new Date().getTime() + 3600 * 1000 * 24 * 7, // 兑换结束时间
                            isConsolation: false // 是否是安慰奖
                        },
                        {
                            giftId: "2",
                            id: "", // id
                            levelName: "二等奖", // 奖品等级名称
                            name: "价值50元礼品", // 奖品名称
                            count: 0, // 奖品数量
                            operationNotify: "凭券联系现场工作人员兑奖", // 操作提示
                            address: "请填写您的兑奖地址或者门店地址", // 兑换地址
                            telphone: "", // 联系电话
                            cashStartTime: app.tool.getNowFormatDate(), // 兑换开始时间
                            cashEndTime: new Date().getTime() + 3600 * 1000 * 24 * 7, // 兑换结束时间
                            isConsolation: false // 是否是安慰奖
                        },
                        {
                            giftId: "3",
                            id: "", // id
                            levelName: "一等奖", // 奖品等级名称
                            name: "价值10元礼品", // 奖品名称
                            count: 0, // 奖品数量
                            operationNotify: "凭券联系现场工作人员兑奖", // 操作提示
                            address: "请填写您的兑奖地址或者门店地址", // 兑换地址
                            telphone: "", // 联系电话
                            cashStartTime: app.tool.getNowFormatDate(), // 兑换开始时间
                            cashEndTime: new Date().getTime() + 3600 * 1000 * 24 * 7, // 兑换结束时间
                            isConsolation: false // 是否是安慰奖
                        }
                    ],
                    baseInfo: {
                        activeInfo: "点击“开始”转盘开始转动，最终指针指着的即为您所中的奖品。",
                        name: "参与活动赢大奖", // 活动名称
                        startTime: app.tool.getNowFormatDate(), // 开始时间
                        endTime: new Date().getTime() + 3600 * 1000 * 24 * 7, // 结束时间
                        limitCount: 10000, // 限制人数，-1表示不限制
                        isShowUserCount: true, // 是否显示参与人数
                        visualUserCount: 0, // 虚拟参与人数
                        userCount: 0 // 当前参与人数
                    },
                    lotteryInfo: {
                        totalLimit: -1, // 总抽奖次数 -1表示不限制
                        dailyLimit: 3, // 每日抽奖限制
                        winLimit: 1, // 每人中奖次数
                        totalWinLimit: 10, // 总中奖率
                        nogiftNotify: "奖品已经派完" // 奖品派发完提示
                    },
                    advancedSetting: {
                        isCanShare: true, // 是否能够分享
                        shareImage: shardImg, //  必须
                        shareWinContent: "​轻轻松松就能抽到大奖，积攒多年的人品终于有用了，你也赶紧来抽奖吧！！", //   中奖分享文案
                        shareNowinContent: "​我已经在活动中抽到了奖品，你也快来抽大奖吧！" //    没中奖分享文案
                    }
                }
            },
        }
    },
    computed: {
       
    },
    methods: {
       
    },
    watch: {
       
    },
    created() {
    },
};