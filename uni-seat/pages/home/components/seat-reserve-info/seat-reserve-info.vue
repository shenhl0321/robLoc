<template>
	<view class="col seat-info">
		<text class="title">工位预定信息</text>
		<image class="header" src="/static/ic_header.png"></image>
		<text class="name">吴彦祖</text>
		<view class="row phone">
			<text>15157157084</text>
			<image class="tel-icon" src="/static/ic_tel.png"></image>
		</view>
		<button class="certain-btn" @click="closed()">确定</button>
	</view>
</template>

<script>
	
	export default{
		data(){
			return{
				
			}
		},
		
		methods:{
			closed(){
				this.$emit('closed')
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.seat-info{
		width: 300px;
		padding: 20px;
		align-items: center;
		box-sizing: border-box;
		border-radius: 20px;
		background-color: #FFF;
		color: #141D28;
		.title{
			font-size: 16px;
			font-weight: 600;
			line-height: 16px;
		}
		.header{
			margin-top: 20px;
			width: 80px;
			height: 80px;
			border-radius: 40px;
			margin-top: 20px;
		}
		.name{
			margin-top: 20px;
			font-size: 14px;
		}
		.phone{
			margin-top: 8px;
			margin-left: 20px;
			font-size: 14px;
			.tel-icon{
				width: 20px;
				height: 20px;
				margin-left: 4px;
			}
		}
		.certain-btn{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 170px;
			height: 40px;
			margin-top: 40px;
			color: #FFF;
			font-size: 16px;
			border-radius: 20px;
			background-color: #0099FF !important;
		}
	}

</style>