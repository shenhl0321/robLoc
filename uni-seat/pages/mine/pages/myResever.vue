<template>
	<view class="main-view">
		<uni-app-nav-bar :mTitle="$t('myReserve')"></uni-app-nav-bar>
		<view class="content-view">
			<view class="page-view">
				<uni-tabs :list="navTitleArray" :scroll="false" @tabItemClick="itemClick" :current="currentIndex" marright="25px" activeWeight='600'></uni-tabs>
				<swiper class="content-swiper" :duration="500" :current="currentIndex"  @change="toggle" duration="0">
					<swiper-item class="swiper-item" v-for="(item,index) in navTitleArray" :key="index">
						<ReseverList :type="item.type"></ReseverList>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	import ReseverList from '../components/reseverList.vue'
	export default {
		components: {
			ReseverList
		},
		data() {
			return {
				currentIndex : 0,
				navTitleArray: [{
						type: 1,
						name: this.$t('reserved')
					},
					{
						type: 2,
						name: this.$t('proceed')
					},
					{
						type: 3,
						name: this.$t('end')
					},
					{
						type: 4,
						name: this.$t('canceled')
					},
				],
			}
		},

		onLoad(option) {

		},

		methods: {
			itemClick(item, index) {
				this.currentIndex = index
			},
			
			toggle(e){
				this.currentIndex = e.detail.current
			},
		}
	}
</script>

<style lang="scss">
	.content-view {
		flex: 1;
		width: 100%;
		
		.page-view{
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			
			.content-swiper {
				flex: 1;
				position: relative;
				.swiper-item{
					width: 100%;
					height: 100%;
					background-color: red;
				}
			}
		}
		
	}
</style>