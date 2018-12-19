<style lang="scss" scoped>

.actionsheet-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .as-mask {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.6);
    }

    .as-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #FFF;
        border-radius: 10px;
        .container-box {
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 0px 15px 0px rgba(143, 156, 180, 0.65);
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            color: #333;
            position: relative;

            .close {
                position: absolute;
                right: 5px;
                top: 5px;
                width: 30px;
                height: 30px;
                padding: 10px;
            }

            .title {
                text-align: center;
                font-size: 16px;
                font-weight: 500;
                color: rgba(245, 162, 6, 1);
                margin-top: 25px;
                margin-bottom: 20px;

                .icon {
                    width: 16px;
                    height: 16px;
                    margin-left: 8px;
                }
            }

            .user-box {
                width: 90%;
                height: 64px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                background: rgba(238, 238, 238, 1);
                border-radius: 35px;

                .loginName {
                    padding: 0px 4px;
                    font-size: 14px;
                    font-weight: 600;
                    color: rgba(51, 51, 51, 1);
                }
            }

            .code-img {
                width: 300px;
                height: 300px;
                margin-top: 20px;
                margin-bottom: 12px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .point {
                font-size: 11px;
                margin-bottom: 5px;
            }

            .footer {
                font-size: 13px;
                margin-bottom: 40px;
            }
            .footers {
                 font-size: 13px;
                margin-bottom: 20px;
            }
        }
    }
}

// 动画
.as-anim-enter-active,
.as-anim-leave-active {
    transition: all 0.3s ease;

    .as-mask {
        opacity: 1;
        transition: all 0.3s ease;
    }

    .as-box {
        transition: all 0.3s ease;
    }

    .as-box.middle.center {
        // transform: translate(0, -50%) scale(1);
        transform-origin: center bottom;
    }
}

.as-anim-enter,
.as-anim-leave-active {
    .as-mask {
        opacity: 0;
    }

    .as-box.middle.center {
        transform: translate(0, -50%) scale(0.1);
    }
}
.closeicon {
    position: absolute;
    z-index: 9;
    right: 0;
    top: 0;
    width: 15px;
    height: 15px;
    padding: 20px;
    text-align: center;
}
</style>

<template>
    <transition name="as-anim">
        <div class="actionsheet" v-show="opened">
            <div class="actionsheet-wrap">
            <div class="as-mask"></div>
                <div class="as-box center middle">
                    <div class="container-box">
                        <img class="closeicon" @click="close" :src="closeImg"/>
                        <div class="code-img" ref="qrcode"></div>
                        <p class="footer" >请使用微信扫描二维码</p>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
 import QRCode from 'pcAssets/js/qrcode.min.js'
 import closeImg from '../../assets/images/close.png'
export default {
    name: "QrCodevue",
    props: {
        opened: {
            type: Boolean,
            default: false
        },
        code: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            closeImg,
            qrcode: null
        };
    },
    computed: {
    },
    methods: {
        close() {
            this.$emit('close');
        }
    },
    components: {
    },
    watch: {
        code(val){
            if (val) {
                this.$nextTick(() => {
                    let text = '';
                    text = decodeURIComponent(val);
                    if (this.qrcode) {
                        this.qrcode.makeCode(text);
                    }else {
                        this.qrcode = new QRCode(this.$refs.qrcode, {
                            text: text,
                            width: 200,
                            height: 200,
                            colorDark : '#000000',
                            colorLight : '#ffffff',
                        });
                    }
                })
            }
        }
    },
};
</script>
