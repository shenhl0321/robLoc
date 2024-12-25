<template>
	<view class="uni-row">
		<text class="left-name">{{mTitle}}</text>
		<view class="row" style="flex-direction: row-reverse; flex: 1;">
			<text class="right-name">{{mValue || "-"}}</text>
			<image style="width: 20px; height: 20px; margin-right: 10px;" src="../../static/copy.png" @click="makeCopy"></image>
		</view>
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
		},
		
		data(){
			return{
				
			}
		},
		
		methods : {
			makeCopy : function(){
				this.$postApp({
					action: 'copy',
					name: '复制',
					value: this.mValue
				})
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