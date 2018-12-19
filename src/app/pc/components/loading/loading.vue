<style lang="scss" scoped>
	.loading-mask {
		display: flex;
		align-items: center;
		justify-content: center;
		.loading {
			width: 40px;
			height: 40px;
			background-repeat: no-repeat;
			background-attachment: scroll;
			background-position: center center;
			background-size: cover;
		}
		&.default {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 2;
		}
		&.bg0 {
			background-color: rgb(255, 255, 255);
		}
		&.bg1 {
			background-color: rgba(0, 0, 0, 0.5);
		}
        &.bg2 {
			background-color: rgba(255, 255, 255, 0);
		}
	}
</style>

<template>
	<div class="loading-mask" :class="[{default: isDefault},`bg${bgType}`]" >
		<div class="loading" :style="'backgroundImage:url('+loadingIcon+')'" v-show="showIcon"></div>
	</div>
</template>

<script>
	import loadingIcon from './loading.gif';
	
	export default {
		name: 'loading',
		props: {
			isDefault: {
				Type: Boolean,
				default: true
			},
			bgType: {
				Type: Number,
				default: 0
			},
            showIcon: {
                Type: Boolean,
				default: true
            }
		},
		data () {
			return {
				loadingIcon
			}
		}
	};
</script>

