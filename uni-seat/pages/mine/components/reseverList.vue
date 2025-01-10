<template>
	<scroll-view class="list-view list" scroll-y :refresher-enabled="true" refresher-background="transparent"
		:refresher-triggered="isRefresher" @refresherrefresh="onRefresh" @refresherrestore="onRestore"
		@scrolltolower="scrolltolower">

		<view class="col reserve-item" v-for="(item,index) in dataArray" :key="index">
			<view class="row num-row">
				<view class="row">
					<text>{{$t('seatNum')}}：</text>
					<text class="num">13号</text>
				</view>
				<text class="status-text" :class="statusClassName">{{statusName}}</text>
			</view>
			<view class="row time-row">
				<text>{{$t('reserveTime')}}：</text>
				<text class="date">2024年02月24日</text>
				<view class="time" :class="dateTimeClassName">上午</view>
			</view>
			
			<view class="row bottom-view" v-if="type == 1">
				<button class="cancel-btn" @click="cancelReseverAction">{{$t('reserveCancel')}}</button>
			</view>
		</view>
		
		<uni-load-more :status="loadStatus" v-if="loadStatus != null && dataArray.length > 0"></uni-load-more>
		<uni-mescroll-empty v-if="dataArray.length == 0"></uni-mescroll-empty>
	</scroll-view>
</template>

<script>
	export default {
		props: {
			type: Number
		},

		data() {
			return {
				isRefresher: true, //下拉刷新状态
				loadStatus: null,
				dataArray: [],
				pageNumber: 1,
				statusName : ''
			}
		},

		mounted() {
			console.log(this.type)
			switch (this.type) {
				case 1:
					this.statusName  = this.$t('reserved')
					break;
				case 2:
					this.statusName  = this.$t('proceed')
					break;
				case 3:
					this.statusName  = this.$t('end')
					break;
				case 4:
					this.statusName  = this.$t('canceled')
					break;
				default:
					break;
			}
			this.getReseverListPetch()
		},

		computed: {
			statusClassName() {
				switch (this.type) {
					case 1:
						return 'reseverd'
					case 2:
						return 'proceed'
					case 3:
						return 'end'
					case 4:
						return 'cancel'
					default:
						return ''
				}
			},

			dateTimeClassName() {
				return  'morning'   //'morning'  'noon'  'allDay'
			}
		},

		methods: {
			onRefresh() {
				this.getReseverListPetch()
			},

			//上拉加载
			scrolltolower() {
				if (this.loadStatus != 'no-more') {
					this.getReseverListPetch(false)
				}
			},

			onRestore() {
				this.isRefresher = 'restore'; // 需要重置
			},
			
			cancelReseverAction(){
				
			},

			getReseverListPetch: async function(reload = true) {
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

		.reserve-item {
			margin: 16px 16px 0px 16px;
			padding: 20px;
			width: calc(100% - 32px);
			background-color: #FFF;
			border-radius: 16px;
			font-size: 16px;
			color: $uni-text-color;

			.num-row {
				justify-content: space-between;

				.num {
					font-weight: 500;
				}

				.status-text {
					font-size: 14px;
					&.reseverd {
						color: #00B91C;
					}
					&.proceed {
						color: #0099FF;
					}
					&.end {
						color: #141D28;
					}
					&.cancel {
						color: #959AA0;
					}
				}
			}

			.time-row {
				margin-top: 20px;

				.date {
					font-weight: 500;
				}

				.time {
					display: flex;
					width: 34px;
					height: 20px;
					border-radius: 2px;
					align-items: center;
					justify-content: center;
					font-size: 12px;
					margin-left: 4px;
					&.morning{
						background-color: #FFF2D1;
						color: #795502;
					}
					&.noon{
						background-color: #E4F8FF;
						color: #083C70;
					}
					&.allDay{
						background-color: #E5FFE4;
						color: #006D18;
					}
				}
			}
			
			.bottom-view{
				width: 100%;
				border-top: 1px solid #EFF4FE;
				justify-content: flex-end;
				margin-top: 20px;
				.cancel-btn{
					display: flex;
					align-items: center;
					justify-content: center;
					width: 84px;
					height: 30px;
					border-radius: 15px;
					border-width: 1px;
					border: 1px solid #E9E9EA;
					font-size: 14px;
					margin-top: 20px;
				}
			}
		
		}
	}

</style>