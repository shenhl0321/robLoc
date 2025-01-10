<template>
	<view class="col seat-left" @click="didTapSeat">
		<view class="col top">
			<view class="line" :class="statusClassName"></view>
			<view class="userIcon" :class="statusClassName"></view>
		</view>
		<view class="col bottom">
			<view class="left" :class="statusClassName"></view>
			<view class="right" :class="statusClassName"></view>
			<view class="seat-number" :class="statusClassName">19</view>
		</view>
	</view>
</template>

<script>
	import seatPositionMx from './seat-position.js'
	
	export default{
		mixins:[seatPositionMx],
		props:{
			state : {
				type : String,
				default : 'normal', //'normal'  'enable'  'ownerSelected'  'otherSelected' 'otherTopSelected' 'otherBottomSelected'
			}
		},
		data(){
			return{
				
			}
		},
	}

</script>

<style lang="scss" scoped>
	.seat-left{
		height: 100%;
		.top{
			align-items: center;
			margin-bottom: 4px;
			.line{
				width: 16px;
				height: 2px;
				border-radius: 1px;
				margin-bottom: 2px;
				&.ownerSelected{
					background-color: #0099FF;
				}
				&.enable{
					background-color: #DADEE6;
				}
				&.selected{
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
					background-color: #0076C4;
					border: 1px solid #0076C4;
				}
				&.enable{
					background-color: #F2F4F7;
					border: 1px solid #DADEE6;
				}
				&.selected{
					background-color: #FFF0F0;
					border: 1px solid #E29494;
				}
				&.normal{
					background-color: #FFF;
					border: 1px solid #DADEE6;
				}
			}
		}
		
		.bottom{
			width: 60px;
			height: 26px;
			position: relative;
			.left{
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
				&.selected{
					background-color: #FFF0F0;
					border: 1px solid #E29494;
					border-bottom: none;
				}
				&.normal{
					border: 1px solid #DADEE6;
					background-color: #FFF;
					border-bottom: none;
				}
			}
			
			.right{
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
				&.selected{
					background-color: #FFF0F0;
					border: 1px solid #E29494;
					border-top: none;
				}
				&.normal{
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
		&.selected{
			color: #E29494;
		}
		&.normal{
			color: #DADEE6;
		}
	}
</style>