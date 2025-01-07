<template>
	<view class="main-view">
		<uni-app-nav-bar :mTitle="$t('myMessage')"></uni-app-nav-bar>
		<scroll-view class="list-view list" scroll-y :refresher-enabled="true" refresher-background="transparent"
			:refresher-triggered="isRefresher" @refresherrefresh="onRefresh" @refresherrestore="onRestore"
			@scrolltolower="scrolltolower">
		
			<view class="col message-item" v-for="(item,index) in dataArray" :key="index">
				<view class="row top">
					<text>{{$t('reserveMessage')}}</text>
					<text class="time">2024-09-11 19:29</text>
				</view>
				<view class="content">
					{{$t('you')}}<text class="value">2024年12月26日上午</text>{{$t('reserve')}}<text class="value">8号</text> {{$t('seatSuccess')}}
				</view>
			</view>
			
			<uni-load-more :status="loadStatus" v-if="loadStatus != null && dataArray.length > 0"></uni-load-more>
			<uni-mescroll-empty v-if="dataArray.length == 0"></uni-mescroll-empty>
		</scroll-view>
	</view>
	
</template>

<script>
	export default {
		props: {
			type: Number
		},

		data() {
			return {
				isRefresher: true, 
				loadStatus: null,
				dataArray: [],
				pageNumber: 1,
			}
		},
		
		onLoad() {
			this.getMessageListPetch()
		},

		methods: {
			onRefresh() {
				this.getMessageListPetch()
			},

			//上拉加载
			scrolltolower() {
				if (this.loadStatus != 'no-more') {
					this.getMessageListPetch(false)
				}
			},

			onRestore() {
				this.isRefresher = 'restore'; // 需要重置
			},
			
			getMessageListPetch: async function(reload = true) {
				if (reload) {
					this.pageNumber = 1
					this.dataArray = []
				} else {
					this.pageNumber++
					this.loadStatus = 'loading'
				}
				let that = this
				setTimeout(function() {
					that.isRefresher = false
					that.loadStatus = 'no-more'
					that.dataArray = [1,2]
				}, 2000)
				// let response = await this.$request('cba/awardAccount/list',param)
				// this.isRefresher = false
				// if(response.result == true){
				// 	let res = response.res
				// 	let total = res.total
				// 	this.dataArray = this.dataArray.concat(res.records)
				// 	let hasNext = this.dataArray.length < total
				// 	this.loadStatus = hasNext ? 'more' : 'no-more'
				// }
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list {
		height: 100%;
		background-color: #F5F5F5;

		.message-item {
			margin: 16px 16px 0px 16px;
			padding: 20px;
			width: calc(100% - 32px);
			background-color: #FFF;
			border-radius: 16px;
			font-size: 14px;
			.top{
				justify-content: space-between;
				color: #141D28;
				.time{
					color: #959AA0;
				}
			}
			
			.content{
				margin-top: 20px;
				color: #959AA0;
				.value{
					color: #141D28;
				}
			}
		}

	}

</style>