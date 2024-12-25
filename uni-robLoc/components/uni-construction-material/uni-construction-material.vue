<template>
	<view class="meterial-info">
		<view class="top-row">
			<view class="sign-view">{{model.servicingTypeName}}</view>
			<text class="time-text">{{model.createDate}}</text>
		</view>
		<view class="bottom-row">
			<text class="material-name">{{model.materialName}}</text>
			<text class="material-num">{{model.numAndUnit}}</text>
		</view>
		<view class="bottom-line"></view>
	</view>
</template>

<script>
	export default{
		props:{
			model : {
				type : Object,
			}
		},
	}
</script>

<style lang="scss">
	.meterial-info{
		display: flex;
		flex-direction: column;
		background-color: #FFF;
		padding-bottom: 20px;
		border-bottom: 1px solid #F3F6F9;
	}

	
	.top-row{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
		.sign-view{
			display: flex;
			background-color: #EFF4FF;
			border-radius: 6px;
			width: 80px;
			height: 26px;
			justify-content: center;
			align-items: center;
			color: $uni-color-primary;
		}
		.time-text{
			color: #7B8290;
		}
	}
	
	.bottom-row{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 16px;
		margin-top: 20px;
		font-weight: bold;
		.material-name{
			color: #111928;
		}
		.material-num{
			color: #1A66FF;
		}
	}
</style>