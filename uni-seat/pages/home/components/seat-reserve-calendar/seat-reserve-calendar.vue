<template>
	<view class="col seat-calendar" v-if="dateSeatInfo">
		<view class="row top">
			<button class="btn cancel" @click="cancel">{{$t('cancel')}}</button>
			<text class="title">{{$t('seatReserve')}}</text>
			<button class="btn certain" @click="certain">{{$t('certain')}}</button>
		</view>
		<view class="weekdays-view">
			<view class="week-day" v-for="(item,index) in weakDays" :key="index">
				<view class="week-day-block">
					{{item}}
				</view>
			</view>
		</view>

		<view class="day-list">
			<view class="day" v-for="(item,index) in list" :key="index">
				<view v-if="item == 'block'"></view>
				<view class="day-block" @click="didSelectorDate(item)" v-else>
					<view class="left" :class="dayBlockClassName(item)"></view>
					<view class="right" :class="dayBlockClassName(item)"></view>
					<text class="day-text" :class="dayBlockClassName(item)">{{item.day}}</text>
				</view>
			</view>
		</view>
		<view class="row bottom-view">
			<button class="btn morning" :class="{'enable' : morningEnAbleSelected, 'active' : selectedDateType == 1}"
				@click="didBottomBtnAction(1)">{{$t('reserveMorning')}}</button>
			<button class="btn noon" :class="{'enable' : noonEnAbleSelected, 'active' : selectedDateType == 2}"
				@click="didBottomBtnAction(2)">{{$t('reserveNoon')}}</button>
			<button class="btn day" :class="{'enable' : dayEnAbleSelected, 'active' : selectedDateType == 3}"
				@click="didBottomBtnAction(3)">{{$t('reserveDay')}}</button>


		</view>
	</view>
</template>
<script>
	//date_type 0：没有预定 1:预定了上午,2:预定了下午,3:预定了全天 
	export default {
		props: {
			id: {
				type: Number,
				default: 0
			},

			date: {
				type: String,
				default: ''
			}
		},

		data() {
			return {
				weakDays: [],
				list: [],
				selectedDate: this.date,

				dateSeatInfo: null,

				selectedDateType: null
			}
		},

		computed: {
			morningEnAbleSelected() {
				return this.dateSeatInfo.date_type == 1 || this.dateSeatInfo.date_type == 3
			},

			noonEnAbleSelected() {
				return this.dateSeatInfo.date_type == 2 || this.dateSeatInfo.date_type == 3
			},

			dayEnAbleSelected() {
				return this.dateSeatInfo.date_type != 0
			},
		},

		mounted() {
			this.setBaseDateData()
		},

		methods: {
			setBaseDateData: async function() {
				this.weakDays = [this.$t('Sunday'), this.$t('Monday'), this.$t('Tuesday'), this.$t('Wednesday'),
					this.$t('Thursday'), this.$t('Friday'), this.$t('Saturday')
				]

				const blockDays = []
				const todayDt = new Date()
				let preCount = todayDt.getDay()
				for (var index = 0; index < preCount; index++) {
					blockDays.push('block')
				}
				let res = await this.$request('/api/seat', {
					seat_id: this.id
				})
				if (res.result == true) {
					let that = this
					this.dateSeatInfo = res.data.find(function(e) {
						return e.date = that.selectedDate
					})
					console.log(this.dateSeatInfo)
					this.list = [...blockDays, ...res.data]
				}
			},

			didSelectorDate: function(e) {
				this.selectedDate = e.date
				this.dateSeatInfo = e
			},

			dayBlockClassName(e) {
				if (e.date == this.selectedDate) {
					console.log(e)
					return 'ownerSelected'
				} else if (e.date_type == 1) {
					return 'topSelected'
				} else if (e.date_type == 2) {
					return 'bottomSelected'
				} else if (e.date_type == 3) {
					return 'selected'
				} else {
					return 'normal'
				}
			},

			didBottomBtnAction(tag) {
				switch (tag) {
					case 1:
						if (!this.morningEnAbleSelected) {
							this.selectedDateType = 1
						}
						break;

					case 2:
						if (!this.noonEnAbleSelected) {
							this.selectedDateType = 2
						}
						break;

					case 3:
						if (!this.dayEnAbleSelected) {
							this.selectedDateType = 3
						}
						break;
					default:
						break
				}
			},

			cancel: function() {
				this.$emit('closed', {
					result: false
				})
			},

			certain: async function() {
			
				if(this.selectedDateType == null){
					this.$toast(this.$t('timeSelected'))
				}else{
					let res = await this.$request('/api/reserve', {
						seat_id: this.id,
						select_date: this.selectedDate,
						date_type : this.selectedDateType
					},'加载中...')
					if(res.result == true){
						this.$toast(this.$t('success'))
						this.$emit('closed', {
							result: true
						})
					}
				}
			}
		}
	}
</script>
<style lang="scss">
	.seat-calendar {
		width: 100vw;
		background-color: #FFF;
		border-top-left-radius: 16px;
		border-top-right-radius: 16px;
		box-sizing: border-box;
	}

	.top {
		width: 100%;
		padding: 0 20px;
		margin-top: 20px;
		justify-content: space-between;
		align-items: center;

		.title {
			color: #141D28;
			font-size: 16px;
			font-weight: bold;
		}

		.btn {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 56px;
			height: 34px;
			font-size: 14px;
			border-radius: 17px;

			&.cancel {
				color: #141D28;
				border: 1px solid #E9E9EA;
			}

			&.certain {
				color: #FFF;
				background-color: #0099FF !important;
			}
		}
	}

	.weekdays-view,
	.day-list {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(7, 1fr);
		grid-row-gap: 10px;
		grid-column-gap: 16px;
		padding: 0 7px;
		margin-top: 10px;

		.week-day,
		.day {
			display: flex;
			position: relative;
			padding-bottom: 100%;
			height: 0;
			overflow: hidden;

			.week-day-block {
				display: flex;
				position: absolute;
				width: 100%;
				height: 100%;
				justify-content: center;
				align-items: center;
				font-size: 12px;
				color: #656673;
			}

			.day-block {
				display: flex;
				position: absolute;
				width: 100%;
				height: 100%;
				justify-content: center;
				align-items: center;
				font-size: 14px;
				color: #242D34;

				.left {
					position: absolute;
					width: 50%;
					height: 100%;
					left: 0;
					top: 0;
					border-top-left-radius: 6px;
					border-bottom-left-radius: 6px;

					&.normal,
					&.bottomSelected {
						border: 1px solid #DADEE6;
						background-color: #FFF;
						border-right: 0;
					}

					&.selected,
					&.topSelected {
						border: 1px solid #E29494;
						background-color: #FFF0F0;
						border-right: 0;
					}

					&.ownerSelected {
						border: 1px solid #0076C4;
						background-color: #0099FF;
						border-right: 0;
					}

				}

				.right {
					position: absolute;
					width: 50%;
					height: 100%;
					right: 0;
					top: 0;
					border: 1px solid #DADEE6;

					border-top-right-radius: 6px;
					border-bottom-right-radius: 6px;
					border: 1px solid #DADEE6;
					background-color: #FFF;

					&.normal,
					&.topSelected {
						border: 1px solid #DADEE6;
						background-color: #FFF;
						border-left: 0;
					}

					&.selected,
					&.bottomSelected {
						border: 1px solid #E29494;
						background-color: #FFF0F0;
						border-left: 0;
					}

					&.ownerSelected {
						border: 1px solid #0076C4;
						background-color: #0099FF;
						border-left: 0;
					}
				}

				.day-text {
					z-index: 999;
					color: $uni-text-color;

					&.ownerSelected {
						color: #FFF;
					}
				}
			}
		}
	}

	.bottom-view {
		width: 100%;
		padding: 20px;
		justify-content: space-between;
		margin-bottom: env(safe-area-inset-bottom);

		.btn {
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: 500;
			font-size: 14px;
			line-height: 14px;
			flex: 1;
			height: 50px;
			border-radius: 25px;

			&.morning {
				border: 1px solid #E9E9EA;
				color: #14202D;
			}

			&.noon {
				border: 1px solid #E9E9EA;
				color: #14202D;
				margin: 0 10px;
			}

			&.day {
				border: 1px solid #E9E9EA;
				color: #14202D;
			}

			&.enable {
				border: 1px solid #DADEE6;
				color: #DADEE6;
				background-color: #F2F4F7 !important;
			}
			
			&.active{
				background-color: #0099FF !important;
				color: #FFF;
			}
		}

	}
</style>