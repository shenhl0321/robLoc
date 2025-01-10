<template>
	<view class="station-seat" v-if="dataList.length > 0">
		<!-- top -->
		<view class="row seat-head-hint">
			<view class="row">
				<view class="sign hint-able"></view>
				<text>{{$t('ableReserve')}}</text>
			</view>
			<view class="row">
				<view class="sign hint-reserve"></view>
				<text>{{$t('hadReserved')}}</text>
			</view>
			<view class="row">
				<view class="sign hint-enable"></view>
				<text>{{$t('noReserve')}}</text>
			</view>
		</view>

		<!-- main -->
		<view class="seat-main">
			<movable-area class="vm-area">
				<movable-view class="vm-area" :scale="true" :scale-min="0.8" :scale-max="2" :x="0" :y="0"
					direction="all" @change="onMove" @scale="onScale">
					<view class="row main-content">
						<view class="col">
							<view class="row seat-out">
								<text class="out-text window">{{$t('windows')}}</text>
								<text class="out-text window">{{$t('windows')}}</text>
								<text class="out-text window">{{$t('windows')}}</text>
							</view>
							<view class="col content-left">
								<view class="row">
									<view class="group-col">
										<SeatGroupModeA :list="group1"></SeatGroupModeA>
										<text class="out-text">{{$t('road')}}</text>
									</view>
									<view class="group-col">
										<SeatGroupModeB :list="group2"></SeatGroupModeB>
										<text class="out-text">{{$t('road')}}</text>
									</view>
									<view class="group-col">
										<SeatGroupModeA :list="group3"></SeatGroupModeA>
										<text class="out-text">{{$t('road')}}</text>
									</view>
									<view class="group-col">
										<SeatGroupModeA :list="group4"></SeatGroupModeA>
										<text class="out-text">{{$t('road')}}</text>
									</view>
								</view>
							
								<view class="row">
									<view class="group-col">
										<SeatGroupModeC :list="group7"></SeatGroupModeC>
										<text class="out-text">{{$t('road')}}</text>
									</view>
									<view class="group-col">
										<SeatGroupModeD :list="group8"></SeatGroupModeD>
										<text class="out-text">{{$t('road')}}</text>
									</view>
									<view class="group-col">
										<SeatGroupModeE :list="group9"></SeatGroupModeE>
										<text class="out-text">{{$t('road')}}</text>
									</view>
									<view class="group-col">
										<SeatGroupModeF :list="group10"></SeatGroupModeF>
										<text class="out-text">{{$t('road')}}</text>
									</view>
								</view>
							</view>
						</view>
						
						<view class="col content-right">
							<view class="row top">
								<view class="wall wall-A"></view>
								
								<view class="col wall-door">
									<view class="row wall-list">
										<view class="wall wall-B"></view>
										
										<view class="group-col" style="margin-left: 20px;">
											<SeatGroupModeH :list="group6"></SeatGroupModeH>
										</view>
										
										<view class="door-out"></view> 
									</view>
									
									<view class="group">
										<SeatGroupModeG :list="group5"></SeatGroupModeG>
									</view>
								</view>
							</view>
							<view class="bottom"></view>
						</view>
						
						<view class="col right-door">
							<view class="top"></view>
							<view style="height: 60px;"></view>
							<view class="bottom"></view>
							<view class="door"></view>
							<view class="in">{{$t('income')}}</view>
						</view>
					</view>
				</movable-view>
			</movable-area>
		</view>
		<!-- foot -->
		<view class="seat-foot">

		</view>
	</view>
</template>

<script>
	import SeatGroupModeA from './seat-group-modeA.vue';
	import SeatGroupModeB from './seat-group-modeB.vue';
	import SeatGroupModeC from './seat-group-modeC.vue';
	import SeatGroupModeD from './seat-group-modeD.vue';
	import SeatGroupModeE from './seat-group-modeE.vue';
	import SeatGroupModeF from './seat-group-modeF.vue';
	import SeatGroupModeG from './seat-group-modeG.vue';
	import SeatGroupModeH from './seat-group-modeH.vue';
	
	export default {
		components: {
			SeatGroupModeA,
			SeatGroupModeB,
			SeatGroupModeC,
			SeatGroupModeD,
			SeatGroupModeE,
			SeatGroupModeF,
			SeatGroupModeG,
			SeatGroupModeH
		},
		data() {
			return {
				moveX: 0, //水平移动偏移量
				scale: 1, //放大倍数
				
				date : '',
				dataList : [],
				group1 : [],
				group2 : [],
				group3 : [],
				group4 : [],
				group5 : [],
				group6 : [],
				group7 : [],
				group8 : [],
				group9 : [],
				group10 : [],
				
				seat : null,
			};
		},
		
		watch : {
			date(val){
				console.log(val)
				this.getAllSeatListPetch()
			},
			
			seat(val){
				console.log(val)
			}
		},
		
		methods: {
			//放大缩小事件
			onScale: function(e) {
				let w = this.boxWidth * 0.5
				let s = 1 - e.detail.scale
				this.moveX = w * s
				this.scale = e.detail.scale
			},
			//移动事件
			onMove: function(e) {
				this.moveX = e.detail.x
			},
			
			//获取所有位置信息
			async getAllSeatListPetch(){
				let res = await this.$request('/api/seat_ls', {date : this.date})
				if(res.result == true){
					this.dataList = res.data
					this.group1 = this.dataList.slice(0,6)
					this.group2 = this.dataList.slice(6,11)
					this.group3 = this.dataList.slice(11,17)
					this.group4 = this.dataList.slice(17,23)
					
					this.group5 = this.dataList.slice(23,31)
					this.group6 = this.dataList.slice(31,35)
					
					this.group7 = this.dataList.slice(35,37)
					this.group8 = this.dataList.slice(37,40)
					this.group9 = this.dataList.slice(40,44)
					this.group10 = this.dataList.slice(44,46)
				}
			},

		}

	}
</script>

<style lang="scss">

	.station-seat {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		
		.seat-head-hint {
			width: 100%;
			margin-top: 20px;
			margin-bottom: 20px;
			font-size: 12px;
			justify-content: center;
			.sign {
				width: 14px;
				height: 14px;
				border-radius: 2px;
				margin-left: 20px;
				margin-right: 4px;
		
				&.hint-able {
					border: 1px solid #DADEE6;
				}
		
				&.hint-reserve {
					border: 1px solid #E29494;
					background-color: #FFF0F0;
				}
		
				&.hint-enable {
					border: 1px solid #DADEE6;
					background-color: #F2F4F7;
				}
			}
		}

		.seat-main {
			width: 100%;
			flex: 1;
			position: relative;
		
			.vm-area {
				width: 200%;
				height: 100%;
				position: absolute !important;
				overflow: auto;
				top: 0;
				left: 0;
			}
		}
		
		.seat-out{
			width: 750rpx;
			justify-content: space-around;
		}
		
		.seat-foot {
			margin-top: 20px;
		}
	}
	
	.out-text {
		color: #C7CCD6;
		font-size: 14px;
		margin-bottom: 20px;
		margin-top: 20px;
		&.window{
			margin-top: 0;
		}
	}
	
	.main-content{
		align-items: flex-start;
		flex: 1;
		margin-left: 20px;
	}
	
	.content-left {
		border: 2px solid #DADEE6;
		border-right: none;
		padding: 20px 30px;
		
		.group-col {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-right: 20px;
		}
	}
	
	.content-right{
		width: 400px;
		margin-top: 34px;
		.bottom{
			width: 2px;
			background-color: #DADEE6;
			height: 160px;
		}
		.top{
			align-items: flex-start;
			border: 2px solid #DADEE6;
			border-left: none;
			border-right: none;
			.wall-door{
				flex: 1;
				.wall-list{
					align-items: flex-start;
				}
			}
			.wall{
				border: 2px solid #DADEE6;
				border-top: none;
				background:linear-gradient(45deg, #FFF 25%, #F2F4F7 0,#F2F4F7 50%,#FFF 0%,#FFF 75%,#F2F4F7 0);
				background-size:8px 8px;
				&.wall-A{
					width: 28px;
					height: 200px;
					border-bottom-right-radius: 14px;
					border-bottom-left-radius: 14px;
				}
				&.wall-B{
					width: 100px;
					height: 100px;
					border-bottom-right-radius: 4px;
					border-bottom-left-radius: 4px;
					border-left: none;
				}
				&.wall-C{
					width: 200px;
					height: 50px;
					border-bottom-right-radius: 4px;
					border-bottom-left-radius: 4px;
					border-left: none;
				}
			}
			
			.group{
				margin: 40px 20px;
			}
			
		}
	}
	
	.right-door{
		height: 346px;
		position: relative;
		.top{
			margin-top: 34px;
			width: 2px;
			background-color: #DADEE6;
			flex: 1;
		}
		
		.bottom{
			width: 2px;
			background-color: #DADEE6;
			flex: 1;
		}
		
		.door{
			position: absolute;
			top: 151px;
			left: 21px;
			height: 60px;
			width: 2px;
			background-color: #DADEE6;
			transform: rotate(-45deg);
		}
		
		.in{
			position: absolute;
			color: #DADEE6;
			font-size: 14px;
			top: 170px;
		}
	}

</style>