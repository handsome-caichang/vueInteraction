export const editMixin = {
    data() {
        return {
            leftList: [
                {
                    name: '首页',
                    type: 'home',
                    data: 'luckDraw'
                },
                {
                    name: '奖品详情',
                    type: 'detail',
                    data: 'awardDetail/123',
                },
                {
                    name: '中奖页面',
                    type: "awardYes",
                    data: "1",
                },
                {
                    name: '没中奖页',
                    type: 'awardNo',
                    data: '2'
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