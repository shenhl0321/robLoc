<template>
	<view class="row notice-wrapper">
		<view class="public-view">
			<image class="pub-icon" src="/static/ic_public.png"></image>
		</view>
		<view class="row notice-content">
			
			<text class="notice-text">{{notice}}</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				notice: '这是滚动的公告文字这是滚动的公告这是滚动的公告文字这是滚动的公告'
			}
		}
	}
</script>

<style scoped lang="scss">
	
	.notice-wrapper {
		overflow: hidden;
		white-space: nowrap;
		position: relative;
		height: 40px;
		align-items: center;
		background-color: #FFF;
	}
	
	.public-view{
		background-color: #FFF;
		z-index: 999;
		
		.pub-icon{
			width: 54px;
			height: 18px;
			margin-left: 20px;
			margin-right: 10px;
		}
	}
	.notice-content {
		height: 100%;
		flex: 1;
		overflow: hidden;
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
</style>