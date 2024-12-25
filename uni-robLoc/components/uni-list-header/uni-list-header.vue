<template>
	<view class="header-view">
		<view class="row">
			<view class="sign"></view>
			<text>{{mTitle}}</text>
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default{
		props:{
			mTitle : {
				type : String,
				default : "标题"
			}
		},
		
		data(){
			return{
				
			}
		},
		
		methods : {
			
		}
	}
</script>

<style lang="scss" scoped>
	.header-view{
		display: flex;
		position: relative;
		flex-direction: row;
		font-size: 14px;
		font-weight: bold;
		padding: 12px 0;
		justify-content: space-between;
		.sign{
			background-color: $uni-color-primary;
			width: 2px;
			height: 14px;
			margin-right: 6px;
			
		}
	}
</style>