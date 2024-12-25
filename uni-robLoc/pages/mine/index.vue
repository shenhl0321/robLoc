<template>
	<view class="main-view">
		<uni-app-nav-bar mTitle="个人中心"></uni-app-nav-bar>
		<view class="content-view">
			<uni-page-view :scroll="true" :tabList="navTitleArray">
				<swiper-item class="swiper-item" v-for="(item,index) in navTitleArray" :key="index">
					<view style="background-color: red;">11111</view>
				</swiper-item>
			</uni-page-view>
		</view>
	</view>
</template>

<script>
	
	export default {
		components: {

		},
		data() {
			return {
				navTitleArray: [{
						id: 1,
						name: '预约信息'
					},
					{
						id: 2,
						name: '订单信息'
					},
					{
						id: 3,
						name: '施工检测'
					},

				],
			}
		},

		onLoad(option) {

		},

		methods: {
			
		}
	}
</script>

<style lang="scss">

	.content-view {
		flex: 1;
		background-color: yellow;
	}

</style>