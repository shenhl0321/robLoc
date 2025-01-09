<template>
	<view class="app-nav-bar-view">
		<view class="nav-bar-view">
			<view class="left-back-view" @click="popBack()" v-if="hiddenBackIcon == false">
				<image style="width:22px; height: 22px;" src="../../static/ic_back.png"></image>
			</view>
			<view class="center-title-view">
				<text class="nav-bar-title-txt">{{mTitle}}</text>
			</view>
			<view class="right-slot">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			mTitle: {
				type: String || undefined,
				default: ''
			},

			backApp: {
				type: Boolean,
				default: false,
			},
			 
			 hiddenBackIcon : {
				 type: Boolean,
				 default: false,
			 }
		},
		mounted() {
			console.log(this.mTitle)
		},
		methods: {
			popBack() {
			
				if (this.backApp == true) {
					// #ifdef APP-PLUS
					uni.sendNativeEvent('closed', {
						nativeMsg: '关闭引擎'
					})
					plus.runtime.quit()
					// #endif
				} else {
					uni.navigateBack()
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.app-nav-bar-view {
		display: flex;
		background-color: red;
		flex-direction: column-reverse;
		position: relative;
		width: 100vw;
		/* #ifdef MP-WEIXIN */
		height: calc(64px + var(--status-bar-height));
		/* #endif */
		/* #ifndef MP-WEIXIN */
		height: calc(44px + var(--status-bar-height));
		/* #endif */
		background-color: #FFF;
		padding: 0 4px;

		.nav-bar-view {
			display: flex;
			position: relative;
			height: 44px;
			justify-content: center;
			align-items: center;

			.left-back-view {
				position: absolute;
				display: flex;
				left: 0;
				top: 0;
				width: 44px;
				height: 100%;
				justify-content: center;
				align-items: center;
			}

			.center-title-view {
				display: flex;
				color: $uni-text-color;
				font-size: 16px;
				width: 70%;
				line-height: 16px;
				justify-content: center;

				.nav-bar-title-txt {
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}

			.right-slot {
				display: flex;
				position: absolute;
				align-items: center;
				right: 8px;
				top: 0;
				height: 44px;
			}
		}
	}
</style>