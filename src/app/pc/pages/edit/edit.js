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