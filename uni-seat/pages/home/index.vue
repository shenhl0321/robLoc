<template>
	<view class="main-view">
		<uni-app-nav-bar :mTitle="$t('homePage')"></uni-app-nav-bar>
		<scroll-view class="list-view" scroll-y>
			<uni-public-left-right></uni-public-left-right>
			<view class="rich-text-view">
				<rich-text id="richtext" :nodes="richText"></rich-text>
			</view>
			<ProductBanner style="margin-top: 10px;"></ProductBanner>
			<view class="col reserve-cell">
				<image class="bg" src="/static/hm_reserve_bg.png" mode="aspectFill"></image>
				<view class="col reserve">
					<text>{{$t('seatReserve')}}</text>
					<view class="row reserve-btn" @click="pushToSeatReserve">
						<text>{{$t('startReserve')}}</text>
						<image class="reserve-push" src="/static/hm_seat_push.png"></image>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>

</template>

<script>
	import ProductBanner from './components/product-banner/product-banner.vue'
	export default {
		components: {
			ProductBanner
		},

		data() {
			return {
				richText: "<h1>hello uni-app x!</h1><br/><h2>uni-app x，终极跨平台方案</h2>"
			}
		},
		
		onShow() {
			uni.setTabBarItem({
			    index: 0,
			    text: this.$t('homePage')
			});
		},
		
		methods:{
			pushToSeatReserve(){
				uni.navigateTo({
					url: '/pages/home/pages/stationReserve'
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.notice-wrapper {
		overflow: hidden;
		white-space: nowrap;
		position: relative;
	}

	.notice-content {
		background-color: red;
		animation: scroll-notice 20s linear infinite;
	}

	@keyframes scroll-notice {
		0% {
			transform: translateX(100%);
		}

		100% {
			transform: translateX(-200%);
		}
	}

	.notice-text {
		font-size: 14px;
	}

	.rich-text-view {
		width: 100%;
		padding: 20px;
		border-radius: 16px;
		background-color: #FFF;
		margin-top: 10px;
	}

	.reserve-cell {
		position: relative;
		width: calc(100% - 20px);
		height: 150px;
		margin: 10px;

		.bg {
			position: absolute;
			width: 100%;
			height: 100%;
			border-radius: 16px;
		}

		.reserve {
			color: #FFF;
			font-size: 24px;
			line-height: 24px;
			margin-top: 40px;
			margin-left: 40px;
			z-index: 999;
			.reserve-btn {
				padding: 0 10px;
				height: 30px;
				width: 90px;
				border-radius: 15px;
				background-color: $uni-color-primary;
				font-size: 14px;
				line-height: 14px;
				margin-top: 20px;
				.reserve-push {
					width: 14px;
					height: 14px;
				}
			}
		}
	}
</style>