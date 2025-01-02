<template>
	<view class="popup-content">
		<text class="title-text">{{pop_title}}</text>
		<text class="center-text">{{centerTxt}}</text>
		<view class="bottom-bar">
			<view class="bottom-bar-btn"
				@click="leftBtnAction">{{leftBtnTitle}}</view>
			<view class="bottom-bar-btn active"
				@click="rightBtnAction">{{rightBtnTitle}}</view>
				
		</view>
	</view>
</template>

<script>
	export default {

		props:{
			pop_title:{
				type : String,
				default : '这是一个标题'
			},
			
			leftBtnTitle : {
				type : String,
				default: '取消'
			},
			rightBtnTitle : {
				type : String,
				default: '确定',
			},
			
			centerTxt:{
				type : String,
				default:""
			}
		},
		
		methods: {
			leftBtnAction() {
				this.$emit('callBack',false)
				
			},

			rightBtnAction() {
				this.$emit('callBack',true)
			}
		}
	}
</script>

<style lang="scss">

	.popup-content {
		display: flex;
		flex-direction: column;
		padding:20px;
		border-radius: 14px;
		align-items: center;
		background-color: white;
		width: 296px;
		font-size: 16px;
		.title-text {
			color: $uni-text-color;
			font-weight: bold;
		}
		
		.center-text{
			margin: 20px 0;
			text-align: center;
		}
		.bottom-bar {
			display: flex;
			flex-direction: row;
			width: 100%;
			.bottom-bar-btn {
				flex: 1;
				height: 42px;
				color: $uni-text-color;
				display: flex;
				align-items: center;
				justify-content: center;
				border: 1px solid $uni-border-color;
				border-radius: 4px;
				&.active {
					color: #FFF;
					background-color: $uni-color-primary;
					margin-left: 12px;
					border: none;
				}
			}
		}
	}

	
</style>
