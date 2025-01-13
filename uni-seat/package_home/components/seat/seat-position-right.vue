<template>
	<view class="row seat-right" v-if="val != null">
		<view class="col left" @click="didDeskTapSeat">
			<view class="top" :class="statusClassName"></view>
			<view class="bottom" :class="statusClassName"></view>
			<view class="seat-number" :class="statusClassName">{{val.seat_code}}</view>
		</view>
		<view class="row right" @click="didUserHeaderIcon">
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
	.seat-right{
		height: 60px;
		.right{
			margin-left: 4px;
			.line{
				width: 2px;
				height: 16px;
				border-radius: 1px;
				margin-left: 2px;
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
		
		.left{
			width: 26px;
			height: 100%;
			position: relative;
			.top{
				flex: 1;
				border-top-left-radius: 3px;
				border-top-right-radius: 3px;
				&.ownerSelected{
					background-color: #0099FF;
					border: 1px solid #0076C4;
					border-bottom: none;
				}
				&.enable{
					background-color: #F2F4F7;
					border: 1px solid #DADEE6;
					border-bottom: none;
				}
				&.selected,&.upSelected{
					background-color: #FFF0F0;
					border: 1px solid #E29494;
					border-bottom: none;
				}
				&.normal,&.downSelected{
					border: 1px solid #DADEE6;
					background-color: #FFF;
					border-bottom: none;
				}
			}
			
			.bottom{
				flex: 1;
				border-bottom-left-radius: 3px;
				border-bottom-right-radius: 3px;
				&.ownerSelected{
					background-color: #0099FF;
					border: 1px solid #0076C4;
					border-top: none;
				}
				&.enable{
					background-color: #F2F4F7;
					border: 1px solid #DADEE6;
					border-top: none;
				}
				&.selected,&.downSelected{
					background-color: #FFF0F0;
					border: 1px solid #E29494;
					border-top: none;
				}
				&.normal,&.upSelected{
					border: 1px solid #DADEE6;
					background-color: #FFF;
					border-top: none;
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