<template>
	<view class="popup-content">
		<text class="content-text">{{dialogText}}</text>
		<button class="center-btn" @click="certainBtnAction">{{centerBtnText}}</button>
	</view>
</template>

<script>
	export default {

		props:{
			dialogText:{
				type : String,
				default : '这是一个标题'
			},
			
			centerBtnText:{
				type : String,
				default:'确定',
			}
		},
		
		methods: {
			certainBtnAction() {
				this.$emit('callBack',{result : true})
			}
		}
	}
</script>

<style lang="scss">

	.popup-content {
		display: flex;
		flex-direction: column;
		padding:40px 20px 20px 20px;
		border-radius: 14px;
		align-items: center;
		background-color: white;
		width: 296px;
		font-size: 16px;
		font-weight: bold;
		.content-text {
			color: $uni-text-color;
			font-weight: bold;
			margin: 0 20px;
			text-align: center;
		}
		
		.center-btn{
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: $uni-color-primary !important;
			height: 42px;
			border-radius: 21px;
			color: #FFF;
			font-size: 18px;
			width: 100%;
			margin-top: 40px;
			font-weight: normal;
		}

	}

	
</style>
