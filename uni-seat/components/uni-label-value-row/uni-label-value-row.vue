<template>
	<view class="uni-row">
		<text class="left-name">{{mTitle}}</text>
		<text class="right-name">{{mValue || "-"}}</text>
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
				type : undefined,
			},
			unit : {
				type : String,
			}
		}
	}
</script>

<style lang="scss">
	.uni-row{
		display: flex;
		flex-direction: row;
		font-size: 14px;
		line-height: 14px;
		justify-content: space-between;	
	}
	
	.left-name{
		color: $uni-text-color;
	}
	.right-name{
		color: $uni-text-color-value;
	}
</style>