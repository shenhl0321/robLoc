<template>
	<view class="base-col">
		<text class="top-name">{{mTitle}}</text>
		<text class="bottom-name">{{mValue || '--'}}</text>
	</view>
</template>

<script>
	export default{
		props:{
			mTitle:{
				type : String,
				default : '标题：'
			},
			mValue : {
				type : String,
				default : '这是个值'
			}
		}
	}
</script>

<style lang="scss">
	.base-col{
		display: flex;
		flex-direction: column;
		font-size: 14px;
		line-height: 14px;
		.top-name{
			color: $uni-text-color;
		}
		.bottom-name{
			margin-top: 10px;
			color: $uni-text-color-value;
		}
		
	}
</style>