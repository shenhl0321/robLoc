<template>
	<view class="main-view" v-if="detail != null">
		<uni-app-nav-bar :mTitle="$t('productDetail')"></uni-app-nav-bar>
		<scroll-view class="list-view" scroll-x>
			<swiper class="swiper-view" circular autoplay indicator-dots>
				<swiper-item class="swiper-item" v-for="(item,index) in detail.images" :key="index">
					<image class="productImage" :src="item" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
			
			<view class="web-rich">
				<rich-text id="richtext" :nodes="detail.describe"></rich-text>
			</view>
			<!-- <web-view class="web-view" :webview-styles="webviewStyles" src="https://uniapp.dcloud.net.cn/component/web-view.html#web-view"></web-view> -->
		</scroll-view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#0099FF'
					}
				},
				detail: null
			}
		},

		onLoad(option) {
			this.getProductDetailPetch(option.id)
		},

		methods: {
			async getProductDetailPetch(id) {
				let res = await this.$request('/api/pro_info', {
					id: id
				})
				if (res.result == true) {
					this.detail = res.data
					console.log(this.detail)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	// .content {
	// 	display: flex;
	// 	flex: 1;
	// 	width: 100%;

		

	// 	// .web-view{
	// 	//  margin-top: 100px;
	// 	//  /* #ifdef MP-WEIXIN */
	// 	//  margin-top: calc(64px + var(--status-bar-height));
	// 	//  /* #endif */
	// 	//  /* #ifndef MP-WEIXIN */
	// 	//  margin-top: calc(44px + var(--status-bar-height));
	// 	//  /* #endif */
	// 	// }
	// }
	
	.swiper-view {
		width: 100%;
		height: 300px;
		
		.productImage {
			width: 100%;
			height: 100%;
			border-bottom-left-radius: 16px;
			border-bottom-right-radius: 16px;
		}
	}
	
	.web-rich {
		display: flex;
		padding: 20px;
		background-color: #FFF;
		box-sizing: border-box;
		margin-top: 10px;
		border-radius: 16px;
		.richtext {
			width: 100%;
		}
	}
</style>