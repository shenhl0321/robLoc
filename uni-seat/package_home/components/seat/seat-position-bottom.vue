<template>
	<view class="col seat-left" v-if="val != null">
		<view class="row top" @click="didDeskTapSeat">
			<view class="left" :class="statusClassName"></view>
			<view class="right" :class="statusClassName"></view>
			<view class="seat-number" :class="statusClassName">{{val.seat_code}}</view>
		</view>
		<view class="col bottom" @click="didUserHeaderIcon">
			<view class="userIcon" :class="statusClassName">
				<image class="icon" :src="iconPath"></image>
			</view>
			<view class="line" :class="statusClassName"></view>
		</view>
	</view>
</template>

<script>
	import seatPositionMx from './seat-position.js'
	
	export default{
		mixins:[seatPositionMx],
		data(){
			return{
				
			}
		},
	}

</script>

<style lang="scss" scoped>
	.seat-left{
		height: 100%;
		.bottom{
			align-items: center;
			margin-bottom: 4px;
			.line{
				width: 16px;
				height: 2px;
				border-radius: 1px;
				margin-top: 2px;
				&.ownerSelected{
					background-color: #0076C4;
				}
				&.enable{
					background-color: #DADEE6;
				}
				&.selected, &.upSelected, &.downSelected{
					background-color: #E29494;
				}
				&.normal{
					background-color: #DADEE6;
				}
			}
			.userIcon{
				border-radius: 3px;
				width: 20px;
				height: 20px;
				margin-top: 4px;
				.icon{
					width: 100%;
					height: 100%;
				}
				&.ownerSelected{
					background-color: #0099FF;
					border: 1px solid #0076C4;
				}
				&.enable{
					background-color: #F2F4F7;
					border: 1px solid #DADEE6;
				}
				&.selected, &.upSelected, &.downSelected{
					background-color: #FFF0F0;
					border: 1px solid #E29494;
				}
				&.normal{
					background-color: #FFF;
					border: 1px solid #DADEE6;
				}
			}
		}
		
		.top{
			width: 60px;
			height: 26px;
			position: relative;
			.left{
				flex: 1;
				height: 100%;
				border-top-left-radius: 3px;
				border-bottom-left-radius: 3px;
				&.ownerSelected{
					background-color: #0099FF;
					border: 1px solid #0076C4;
					border-right: none;
				}
				&.enable{
					background-color: #F2F4F7;
					border: 1px solid #DADEE6;
					border-right: none;
				}
				&.selected, &.upSelected{
					background-color: #FFF0F0;
					border: 1px solid #E29494;
					border-right: none;
				}
				&.normal,&.downSelected{
					border: 1px solid #DADEE6;
					background-color: #FFF;
					border-right: none;
				}
			}
			
			.right{
				flex: 1;
				height: 100%;
				border-top-right-radius: 3px;
				border-bottom-right-radius: 3px;
				&.ownerSelected{
					background-color: #0099FF;
					border: 1px solid #0076C4;
					border-left: none;
				}
				&.enable{
					background-color: #F2F4F7;
					border: 1px solid #DADEE6;
					border-left: none;
				}
				&.selected,&.downSelected{
					background-color: #FFF0F0;
					border: 1px solid #E29494;
					border-left: none;
				}
				&.normal, &.upSelected{
					border: 1px solid #DADEE6;
					background-color: #FFF;
					border-left: none;
				}
			}
		}
	}

	.seat-number{
		position: absolute;
		font-size: 12px;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 999;
		&.ownerSelected{
			color: #FFF;
		}
		&.enable{
			color: #DADEE6;
		}
		&.selected, &.upSelected, &.downSelected{
			color: #E29494;
		}
		&.normal{
			color: #DADEE6;
		}
	}
</style>