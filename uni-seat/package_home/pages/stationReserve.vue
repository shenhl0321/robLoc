<template>
	<view class="main-view">
		<uni-app-nav-bar :mTitle="$t('seatReserve')"></uni-app-nav-bar>
		<WeekDateSelector @selectorDate="selectorDate"></WeekDateSelector>
		</scroll-view>
		<SeatStationModeA ref="seatStation" style="flex: 1; width: 100%;"></SeatStationModeA>
		<view class="col bottom-view">
			<view class="row seat-reserve">
				<view class="row seat-num">
					<text>{{$t('seatNum')}}：</text>
					<text class="num">{{seatNumCode}}</text>
				</view>
				<view class="row seat-status">
					<text>{{$t('seatStatus')}}：</text>
					<view class="status" :class="seatStatusClass">{{seatStatusName}}</view>
				</view>
			</view>
			<button class="valid-btn" @click="didSelectedSeat">{{$t('seatCertain')}}</button>
		</view>
		<uni-popup ref="popupInfo" type="center">
			<SeatReserveInfo :userInfo="userInfo" @closed="seatReserveClosed"></SeatReserveInfo>
		</uni-popup>
		
		<uni-popup ref="popupCalendar" type="bottom" v-if="selectedSeat != null">
			<SeatReserveCalendar :seat='selectedSeat' :date="date" @closed="seatCalendarClosed"></SeatReserveCalendar>
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
				date : null,
				userInfo : null,
			}
		},
		
		computed:{
			selectedSeat(){
				return this.$store.state.seat
			},
			
			seatNumCode(){
				if(this.selectedSeat.seat_code == null){
					return '未选择'
				}else{
					return this.selectedSeat.seat_code
				}
			},
			
			seatStatusName(){
				if(this.selectedSeat.seat_code == null){
					return '-'
				}else{
					if(this.selectedSeat.date_type == 1){
						return this.$t('reserveNoon')
					}else if(this.selectedSeat.date_type == 2){
						return this.$t('reserveMorning')
					}else if(this.selectedSeat.date_type == 3){
						return this.$t('reserveFull')
					}else{
						return this.$t('reserveDay')
					}
				}
			},
			
			seatStatusClass(){
				if(this.selectedSeat.seat_code == null){
					return 'reserve-unselected'
				}else{
					if(this.selectedSeat.date_type == 1){
						return 'reserve-noon'
					}else if(this.selectedSeat.date_type == 2){
						return 'reserve-morning'
					}else if(this.selectedSeat.date_type == 3){
						return 'reserve-no'
					}else{
						return 'reserve-day'
					}
				}
			}
		},
		
		onLoad() {
			let that = this
			uni.$on('seatDidChange', res => {
				console.log(res)
				if(res.status != 2){
					that.$store.state.seat = res
				}	
			})
			
			uni.$on('userInfo', res => {
				console.log(res)
				that.userInfo = res
				that.seatReserveShow()
			})
		},
		
		onUnload() {
			this.$store.state.seat = {}
			uni.$off('seatDidChange')
			uni.$off('userInfo')
		},
		
		methods:{
			selectorDate(e){
				this.date = e
				this.$refs.seatStation.date = e
			},
			
			didSelectedSeat(){
				if(this.selectedSeat == null || this.selectedSeat.id == null){
					this.$toast(this.$t('seatSelected'))
				}else{
					this.seatCalendarShow()	
				}
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
				this.$refs.popupCalendar.close()
				if(val.result == true){
					this.$store.state.seat = {}
					this.$refs.seatStation.getAllSeatListPetch()
				}
			},
		
		}
	}
</script>

<style lang="scss" scoped>
	
	.bottom-view{
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
		background-color: #FFF;
		z-index: 99;
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
				&.reserve-no{
					background-color: #FFF0F0;
					color: #E29494;
				}
				&.reserve-day{
					background-color: #E5FFE4;
					color: #006D18;
				}
				&.reserve-noon,&.reserve-noon{
					background-color: #E4F8FF;
					color: #083C70;
				}
				&.reserve-unselected{
					color: $uni-text-color;
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
			background-color: $uni-color-primary !important;
		}
	}
	
</style>