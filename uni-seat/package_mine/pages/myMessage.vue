<template>
	<view class="main-view">
		<uni-app-nav-bar :mTitle="$t('myMessage')"></uni-app-nav-bar>
		<scroll-view class="list-view list" scroll-y :refresher-enabled="true" refresher-background="transparent"
			:refresher-triggered="isRefresher" @refresherrefresh="onRefresh" @refresherrestore="onRestore"
			@scrolltolower="scrolltolower">
		
			<view class="col message-item" v-for="(item,index) in dataArray" :key="index">
				<view class="row top">
					<text>{{$t('reserveMessage')}}</text>
					<text class="time">{{item.create_time}}</text>
				</view>
				<view class="content">
					{{$t('you')}}<text class="value">{{item.reserve_date
 + timeTypeName(item.date_type)}}</text>{{$t('reserve')}}<text class="value">{{item.seat_code}}</text> {{contentStatusName(item)}}
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
				isRefresher: false, 
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
			
			timeTypeName(dateType){
				if(dateType == 1){
					return this.$t('morning')
				}else if(dateType == 2){
					return this.$t('noon')
				}else{
					return this.$t('allDay')
				}
			},
			
			contentStatusName(e){
				switch(e.reserve_type){
					case 1:
					return this.$t('seat') + this.$t('success')
					case 2:
					return this.$t('seat') + this.$t('start')
					case 3:
					return this.$t('seat') + this.$t('end')
					case 4: 
					return this.$t('seat') + this.$t('canceled')
					default:
					return ''
					break
				}	
			},
			
			getMessageListPetch: async function(reload = true) {
				if (reload) {
					this.pageNumber = 1
					this.dataArray = []
					this.isRefresher = true
				} else {
					this.pageNumber++
					this.loadStatus = 'loading'
				}
				let res = await this.$request('/api/msg_ls',{page : this.pageNumber, limit : 10})
				this.isRefresher = false
				if(res.result == true){
					console.log(res)
					let count = res.data.count
					this.dataArray = this.dataArray.concat(res.data.list)
					this.loadStatus = this.dataArray.length < count ? 'more' : 'no-more'
				}
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