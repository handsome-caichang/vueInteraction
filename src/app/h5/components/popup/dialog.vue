<style lang="scss" scoped>
    $duration: 0.3s;
    $timing: ease;
    .dialog {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 9999999;
        .dialog-mask {
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.6);
        }
        @at-root .dialog-box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%,-50%,0);
            background-color: #FFF;
            border-radius: 8px;
            overflow: hidden;
            .content-box {
                padding: 20px 0 10px;
                .dialog-title {
                    padding-bottom: 10px;
                    color: #333;
                    font-size: 15px;
                    text-align: center;
                }
                @at-root .dialog-body {
                    position: relative;
                    padding: 0 14px;
                    max-height: 260px;
                    overflow: hidden;
                    .scroll-wrapper {
                        padding: 10px 0;
                    }
                    .text-body {
                        font-size: 14px;
                        padding-right: 14px;
                        line-height: 20px;
                        color: #666;
                        text-align: left;
                    }
                }
            }
            .btn-box {
                display: flex;
                position: relative;
                &:before {
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    border-top: 1px solid #D5D5D5;
                    content: '';
                    @media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2) {
                        transform: scale(1, 0.5);
                    }
                    @media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3) {
                        transform: scale(1, 0.33);
                    }
                }
                .btn-item {
                    flex: 1;
                    height: 44px;
                    line-height: 44px;
                    text-align: center;
                    color: #333;
                    font-size: 16px;
                    &.boder-left {
                        position: relative;
                        &:before {
                            display: block;
                            position: absolute;
                            left: 0;
                            top: 0;
                            bottom: 0;
                            height: 100%;
                            border-left: 1px solid #D5D5D5;
                            content: '';
                            @media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2) {
                                transform: translate(0, 0.5px) scale( 0.5, 1);
                            }
                            @media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3) {
                                transform:translate(0, 0.5px) scale(0.33, 1);
                            }
                        }
                    }
                }
            }
        }
    }
    
    // 动画
    .fade-dialog-enter-active, .fade-dialog-leave-active {
        transition: all $duration $timing;
        .dialog-mask {
            opacity: 1;  
            transition: all $duration $timing;
        }
        .dialog-box {
           transform: translate3d(-50%,-50%,0) scale(1);
           transition: all $duration $timing;
        }
    }
    .fade-dialog-enter, .fade-dialog-leave-active {
        .dialog-mask {
            opacity: 0;
        }
        .dialog-box {
            transform: translate3d(-50%,-50%,0) scale(0.1);
        }
    }

</style>

<template>
    <transition name='fade-dialog'>
        <div class="dialog"  v-if="opened">
            <div class="dialog-mask" @click="_clickMaskToClose"></div>
            <div class="dialog-box" :style="boxStyle">
                <div class="content-box">
                    <div class="dialog-title" v-if='title' :style='titleStyle'>{{title}}</div>
                    <div  class="dialog-body">
                        <div class="scroll-wrapper">
                            <div class="html-body" v-if='html' v-html='html'></div>
                            <p class="text-body" style="padding:0px 14px;" v-if='text'  :style='textStyle'>{{text}}</p>
                        </div>
                    </div>
                </div>
                <div class="btn-box">
                    <div class="btn-item" 
                        v-for="(btn, index) in buttons" :key=index
                        :class='{"boder-left": index > 0}'
                        :style='btn.style'
                        @click='_triggerBtn(index)'
                    >{{btn.text}}</div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'j-dialog',
        props: {
            type: {
                type: String,
                default: 'alert',
                validator: function (val) {
                    return ['alert', 'confirm'].indexOf(val) > -1
                }
            },
            boxStyle: {
                type: Object,
                default() {
                    return {
                        width: '320px'
                    }
                }
            },
            title: {
                default: '提示'
            },
            titleStyle: {
                type: Object
            },
            text: {
                default: ''
            },
            textStyle: {
                type: Object
            },
            html: {
                type: String
            },
            // 由路由变化引起的取消,resolve出去的值
            cancelAction: {
                default: false
            },
            btn: {
                type: Object,
                default() {
                    return {
                        text: '确定',
                        style: {
                            color: '#1E88F5'
                        },
                        action: true
                    }
                }
            },
            btns: {
                type: Array,
                default() {
                    return [
                        {
                            text: '取消',
                            style: {},
                            action: false
                        },{
                            text: '确定',
                            style: {
                                color: '#1E88F5'
                            },
                            action: true
                        }
                    ]
                }
            },
            clickMask2close: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                opened: false
            };
        },
        computed: {
            buttons(){
                if (this.type !== 'confirm') {
                    return [this.btn]
                }
                return this.btns
            }
        },
        methods: {
            beforeClose: function () {
                this.opened = false;
            },
            _triggerBtn(index) {
                this.buttons[index].fn();
                this.close();
            },
            _clickMaskToClose() {
                // 防止在关闭动画时多次点击,造成路由多次回退;
                if (this.maskClicked) {
                    return;
                }
                this.maskClicked = true;

                if (this.clickMask2close) {
                    this._cancel();
                    this.close();
                }
            },
            cancel() {
                this._cancel();
                this.beforeClose();
            },
            close() {
                this.beforeClose();
            },
            then(callback) {
                return this.promiser.then(val => {
                    return callback && callback(val);
                })
            }
        },
        created() {
            this.promiser = new Promise((resolve) => {
                this.buttons.forEach((btn, index) => {
                    btn.fn = () => resolve(btn.action)
                })
                this._cancel = () => resolve(this.cancelAction)
            });
        },
        mounted() {
            this.opened = true;
        },
        beforeDestroy () {
            // console.log('dialog 将要销毁了...');
        },
        destroyed () {
            // console.log('dialog 销毁了...');
        },
        components: {
        },
        watch: {
            opened(newVal, oldVal){
                this.$nextTick(() => {
                    newVal === false && this.$destroy();
                })
            }
        }
    };
</script>
