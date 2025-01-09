<template>
	<view class="main-view">
		<uni-app-nav-bar :mTitle="$t('seatReserve')"></uni-app-nav-bar>
		<WeekDateSelector @selectorDate="selectorDate"></WeekDateSelector>
		</scroll-view>
		<SeatStationModeA ref="seat" style="flex: 1; width: 100%;"></SeatStationModeA>
		<view class="col bottom-view">
			<view class="row seat-reserve">
				<view class="row seat-num">
					<text>{{$t('seatNum')}}：</text>
					<text class="num">13号</text>
				</view>
				<view class="row seat-status">
					<text>{{$t('seatStatus')}}：</text>
					<view class="status" :class="statusClass">-</view>
				</view>
			</view>
			<button class="valid-btn">{{$t('seatCertain')}}</button>
		</view>
		<uni-popup ref="popupInfo" type="center">
			<SeatReserveInfo @closed="seatReserveClosed"></SeatReserveInfo>
		</uni-popup>
		
		<uni-popup ref="popupCalendar" type="bottom">
			<SeatReserveCalendar @closed="seatCalendarClosed"></SeatReserveCalendar>
		</uni-popup>
	</view>
</template>

<script>
	import WeekDateSelector from '../components/week-date-selector/week-date-selector.vue'
	import SeatStationModeA from '../components/seat/seat-station-modeA.vue'
	import SeatReserveInfo from '../components/seat-reserve-info/seat-reserve-info.vue'
	import SeatReserveCalendar from '../components/seat-reserve-calendar/seat-reserve-calendar.vue'
	
	export default{
		components:{
			WeekDateSelector,
			SeatStationModeA,
			SeatReserveInfo,
			SeatReserveCalendar
		},
		data(){
			return{
				
			}
		},
		
		computed:{
			statusClass(){
				return ''
			}
		},
		
		onLoad() {
			let that = this
			uni.$on('seatDidChange', res => {
				console.log(res)
				//that.seatReserveShow()
				that.seatCalendarShow()
			})
		},
		
		onUnload() {
			uni.$off('seatDidChange');
		},
		
		methods:{
			selectorDate(e){
				console.log(e)
				this.$refs.seat.date = e
			},
			
			seatReserveShow() {
				this.$refs.popupInfo.open()
			},
			
			seatReserveClosed(val){
				this.$refs.popupInfo.close()
			},
			
			seatCalendarShow() {
				this.$refs.popupCalendar.open()
			},
			
			seatCalendarClosed(val){
				console.log(val)
				this.$refs.popupCalendar.close()
			},
		
		}
	}
</script>

<style lang="scss" scoped>
	
	.bottom-view{
		width: 100%;
		padding: 0 20px;
		box-sizing: border-box;
		margin-bottom: env(safe-area-inset-bottom);
		.seat-reserve{
			width: 100%;
			height: 56px;
			border: 1px solid #F0F2F5;
			justify-content: space-between;
			border-radius: 16px;
			font-size: 16px;
			color: #14202D;
			padding:0 20px;
			margin-bottom: 20px;
			.num{
				font-weight: 500;
			}
			.status{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 70px;
				height: 20px;
				font-size: 12px;
				line-height: 12px;
				border-radius: 2px;
				background-color: #F2F4F7;
				color: #959AA0;
				&.reserved{
					background-color: #FFF0F0;
					color: #E29494;
				}
				&.day{
					background-color: #E5FFE4;
					color: #006D18;
				}
				&.halfday{
					background-color: #E4F8FF;
					color: #083C70;
				}
			}
		}
		.valid-btn{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 50px;
			border-radius: 25px;
			color: #FFF;
			font-size: 16px;
			background-color: $uni-btn-enable-bg-color !important;
			margin-bottom: 10px;
			&.active{
				background-color: $uni-color-primary !important;
			}
		}
	}
	
</style>