<template>
	<view class="col seat-calendar">
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
			<view class="day" v-for="(item,index) in 30" :key="index" @click="didSelectorDate(item)">
				<view class="day-block">
					<view class="left" :class="dayBlockClassName"></view>
					<view class="right" :class="dayBlockClassName"></view>
					<text style="z-index: 999;">{{item}}</text>
				</view>
			</view>  
		</view>
		<view class="row bottom-view">
			<button class="btn morning" @click="didBottomBtnAction(1)">{{$t('reserveMorning')}}</button>
			<button class="btn noon" @click="didBottomBtnAction(2)">{{$t('reserveNoon')}}</button>
			<button class="btn day" @click="didBottomBtnAction(3)">{{$t('reserveDay')}}</button>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				weakDays : []
			}
		},

		computed: {
			dayBlockClassName(){
				return 'normal' //'enable'  selected  topSelected bottomSelected  ownerSelected
			}
		},

		mounted() {
			this.setBaseDateData()
		},

		methods: {
			setBaseDateData: function() {
				this.weakDays = [this.$t('Sunday'),this.$t('Monday'),this.$t('Tuesday'),this.$t('Wednesday'),
				this.$t('Thursday'),this.$t('Friday'),this.$t('Saturday')]
			},

			didSelectorDate: function(e) {
				let model = e.currentTarget.dataset.model
				if (model.enabled == true) {
					this.currentSelecteDate = model
					this.$emit("selectorDate", this.currentSelecteDate)
					this.closedPopup()
				}
			},
			
			didBottomBtnAction(tag){
				switch(tag){
					case 1:
					break;
					
					case 2:
					break;
					
					case 3:
					break;
				}
			},
			
			cancel : function(){
				this.$emit('closed',{result : false})
			},
			
			certain : function(){
				this.$emit('closed',{result : true})
			}
		}
	}
</script>
<style lang="scss">
	.seat-calendar{
		width: 100vw;
		background-color: #FFF;
		border-top-left-radius: 16px;
		border-top-right-radius: 16px;
		box-sizing: border-box;
	}
	
	.top{
		width: 100%;
		padding: 0 20px;
		margin-top: 20px;
		justify-content: space-between;
		align-items: center;
		.title{
			color: #141D28;
			font-size: 16px;
			font-weight: bold;
		}
		.btn{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 56px;
			height: 34px;
			font-size: 14px;
			border-radius: 17px;
			&.cancel{
				color: #141D28;
				border: 1px solid #E9E9EA;
			}
			&.certain{
				color: #FFF;
				background-color: #0099FF !important;
			}
		}
	}
	
	.weekdays-view, .day-list {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(7, 1fr);
		grid-row-gap: 10px;
		grid-column-gap: 16px;
		padding: 0 7px;
		margin-top: 10px;
		.week-day, .day{
			display: flex;
			position: relative;
			padding-bottom: 100%;
			height: 0;
			overflow: hidden;
			.week-day-block{
				display: flex;
				position: absolute;
				width: 100%;
				height: 100%;
				justify-content: center;
				align-items: center;
				font-size: 12px;
				color: #656673;
			}
			.day-block{
				display: flex;
				position: absolute;
				width: 100%;
				height: 100%;
				justify-content: center;
				align-items: center;
				font-size: 14px;
				color: #242D34;
				.left{
					position: absolute;
					width: 50%;
					height: 100%;
					left: 0;
					top: 0;
					border-top-left-radius: 6px;
					border-bottom-left-radius: 6px;
					&.normal, &.bottomSelected{
						border: 1px solid #DADEE6;
						background-color: #FFF;
						border-right: 0;
					}
					
					&.selected, &.topSelected{
						border: 1px solid #E29494;
						background-color: #FFF0F0;
						border-right: 0;
					}
					
					&.ownerSelected{
						border: 1px solid #0076C4;
						background-color: #0099FF;
						border-right: 0;
					}
					
				}
				.right{
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
					&.normal, &.topSelected{
						border: 1px solid #DADEE6;
						background-color: #FFF;
						border-left: 0;
					}
					
					&.selected, &.bottomSelected{
						border: 1px solid #E29494;
						background-color: #FFF0F0;
						border-left: 0;
					}
					
					&.ownerSelected{
						border: 1px solid #0076C4;
						background-color: #0099FF;
						border-left: 0;
					}
				}
			}
		}
	}

	.bottom-view{
		width: 100%;
		padding: 20px;
		justify-content: space-between;
		margin-bottom: env(safe-area-inset-bottom);
		
		.btn{
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: 500;
			font-size: 14px;
			line-height: 14px;
			flex: 1;
			height: 50px;
			border-radius: 25px;
			&.morning{
				border: 1px solid #E9E9EA;
				color: #14202D;
			}
			
			&.noon{
				border: 1px solid #E9E9EA;
				color: #14202D;
				margin: 0 10px;
			}
			&.day{
				background-color: #0099FF !important;
				color: #FFF;
			}
			&.noAble{
				border: 1px solid #DADEE6;
				color: #DADEE6;
				background-color: #F2F4F7;
			}
		}
		
	}
</style>