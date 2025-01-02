<template>
	<view class="popup-content">
		<text class="title-text">{{pop_title}}</text>
		<input class="content-input" placeholder="请输入"
			v-model="input_value" placeholder-style="line-height: 16px;"/>
		<view class="bottom-bar">
			<view class="bottom-bar-btn"
				@click="leftBtnAction">{{leftBtnTitle}}</view>
			<view class="bottom-bar-btn active"
				@click="rightBtnAction">{{rightBtnTitle}}</view>
				
		</view>
	</view>
</template>

<script>
	import {showToast} from '../../common/js/util.js'
	export default {
		props:{
			pop_title : {
				type : String,
				default: '这是一个输入框标题'
			},
			leftBtnTitle : {
				type : String,
				default: '取消'
			},
			rightBtnTitle : {
				type : String,
				default: '确定'
			},
			baseValue : {
				type : String,
			}
			
		},
		data() {
			return {
				input_value: this.baseValue,
				result : false,
			}
		},

		methods: {
			leftBtnAction() {
				this.$emit('callBack',{
					result : false,
				})
			},

			rightBtnAction() {
				if(this.input_value == null || this.input_value.length == 0){
					showToast('输入不能为空')
				}else{
					this.$emit('callBack',{
						result : true,
						value : this.input_value
					})
				}
			},
		}
	}
</script>

<style lang="scss">
	
	.popup-content {
		display: flex;
		position: relative;
		flex-direction: column;
		padding: 25px 16px;
		border-radius: 16px;
		align-items: center;
		background-color: #FFF;
		width: 296px;
		font-size: 16px;
		line-height: 16px;
		.title-text {
			color: $uni-text-color;
			font-weight: bold;
		}
		
		.content-input {
			color: $uni-text-color;
			margin-top: 30px;
			border-radius: 3px;
			height: 44px;
			padding: 12px;
			width: 100%;
			background-color: red;
		}
		
		.bottom-bar {
			display: flex;
			position: relative;
			flex-direction: row;
			margin-top: 30px;
			width: 100%;
			.bottom-bar-btn {
				flex: 1;
				height: 42px;
				font-size: 18px;
				color: $uni-text-color;
				display: flex;
				align-items: center;
				justify-content: center;
				
				border-radius: 4px;
				border: 1px solid $uni-border-color;
				
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
