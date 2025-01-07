<template>
	<view class="row seat-left" @click="didTapSeat">
		<view class="row left">
			<view class="line" :class="statusClassName"></view>
			<view class="userIcon" :class="statusClassName"></view>
		</view>
		<view class="col right">
			<view class="top" :class="statusClassName"></view>
			<view class="bottom" :class="statusClassName"></view>
			<view class="seat-number" :class="statusClassName">19</view>
		</view>
	</view>
</template>

<script>
	export default{
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
		computed:{
			statusClassName(){
				if(this.state == 'ownerSelected'){
					return 'ownerSelected'
				}else if(this.state == 'enable'){
					return 'enable'
				}else if(this.state == 'otherSelected' || this.state == 'otherTopSelected' || this.state == 'otherBottomSelected'){
					return 'selected'
				}else{
					return 'normal'
				}
			},
		},
		
		methods:{
			didTapSeat : function(e){
				uni.$emit('seatDidChange', '111111')
			}
		}
	}

</script>

<style lang="scss" scoped>
	.seat-left{
		height: 60px;
		.left{
			margin-right: 4px;
			.line{
				width: 2px;
				height: 16px;
				border-radius: 1px;
				margin-right: 2px;
				&.ownerSelected{
					background-color: #0076C4;
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
		
		.right{
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