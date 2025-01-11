<template>
	<view class="col product-banner">
		<view class="row banner-top-title-view">
			<view class="row left">
				<view class="bottom-line"></view>
				<text>{{$t('productNew')}}</text>
			</view>
			<view class="row right" @click="didToSeeAllProduct">
				<text>{{$t('seeAll')}}</text>
				<image class="push-small" src="/static/ic_push_small.png"></image>
			</view>
		</view>
		<view class="row banner-view">
			<view class="banner-left">
				<image class="left-image"  src="/static/banner_left.png" mode="aspectFit" @click="didBannerLeftAction">
				</image>
			</view>
			<swiper class="swiper-view" circular :current="current">
				<swiper-item class="swiper-item" v-for="(item,index) in list" :key="index">
					<image class="product" :src="item.logo"
						mode="aspectFill"></image>
				</swiper-item>
			</swiper>
			<view class="banner-right">
				<image class="right-image" src="/static/banner_right.png" mode="aspectFit" @click="didBannerRightAction">
			</view>
			</image>
		</view>
	</view>
</template>

<script>
	export default {
		props : {
			list : {
				type : Array,
				default(){
					return []
				}
			}
		},
		
		data() {
			return {
				current: 0,
			}
		},

		methods: {
			didToSeeAllProduct() {
				uni.navigateTo({
					url: '/package_home/pages/productList'
				})
			},

			didBannerLeftAction() {
				if (this.current > 0) {
					this.current = --this.current;
				} else {
					this.current = this.list.length
				}
			},

			didBannerRightAction() {
				if (this.current < this.list.length) {
					this.current = ++this.current;
				} else {
					this.current = 0
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.product-banner {
		width: 100%;
		background-color: #FFF;
		border-radius: 16px;
		padding: 20px 0;
		box-sizing: border-box;
	}

	.banner-top-title-view {
		justify-content: space-between;
		width: 100%;
		height: 20px;
		padding: 0 20px;

		.left {
			position: relative;
			color: $uni-text-color;
			font-weight: 800;
			font-size: 16px;

			.bottom-line {
				position: absolute;
				bottom: 0;
				left: 0;
				height: 6px;
				width: 100%;
				border-radius: 3px;
				background: linear-gradient(to left, #2AACDC, #003E76);
				opacity: 0.5;
			}
		}

		.right {
			font-size: 14px;
			color: #5C6473;

			.push-small {
				width: 14px;
				height: 14px;
			}
		}
	}

	.banner-view {
		position: relative;
		width: 100%;
		height: 150px;
		margin-top: 20px;

		.banner-left {
			display: flex;
			position: absolute;
			justify-content: flex-end;
			width: 40px;
			height: 100%;
			left: 0;
			top: 0;
			z-index: 999;
			.left-image{
				width: 20px;
				height: 100%;
			}
		}

		.banner-right {
			display: flex;
			position: absolute;
			width: 40px;
			height: 100%;
			top: 0;
			right: 0;
			z-index: 999;
			.right-image{
				width: 20px;
				height: 100%;
			}
		}

		.swiper-view {
			width: 100%;
			.swiper-item{
			  border-radius: 16px;
			}
			.product {
				width: 100%;
				height: 100%;
				
			}
		}
	}
</style>