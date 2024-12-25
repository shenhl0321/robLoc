<template>
	<view class="popup-content">
		<text class="title-text">{{pop_title}}</text>
		<textarea class="content-input" :placeholder="placeHolder"
			v-model="input_value" placeholder-style="line-height: 16px;" auto-height/>
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
			placeHolder:{
				type : String,
				default: '请输入'
			}
			
		},
		data() {
			return {
				input_value: null,
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
		padding: 20px;
		border-radius: 16px;
		align-items: center;
		background-color: white;
		width: 296px;
		font-size: 16px;
		line-height: 16px;
		.title-text {
			color: $uni-text-color;
			font-weight: bold;
		}
		
		.content-input {
			color: $uni-text-color;
			margin-top: 20px;
			border-radius: 3px;
			min-height: 80px;
			background-color: #F4F4F6;
			padding: 12px;
			width: 100%;
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
				font-size: 16px;
				color: $uni-text-color;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #FFF;
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
