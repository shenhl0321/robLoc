<template>
	<view class="search-bar">
		<view class="search-content">
			<view class="m-content">
				<image class="search-image" src="../../static/ic_search.png"></image>
				<input class="text-search-input" v-model="searchValue" @input="textDidChange" focus placeholder="请输入" placeholder-class="placeholderClass"/> 
			</view>
			<text class="cancel-text" @click="didTapCancelText">取消</text> 
		</view>
	</view>
</template>

<script>
	export default{
		props : {
			value : String,
			default : ''
		},
		
		data(){
			return{
				searchValue : ''
			}
		},
	
		mounted() {
			this.searchValue = this.value
		},
		
		methods : {
			textDidChange : function(e){
				this.$emit('input', this.searchValue)
			},
			
			didTapCancelText : function(e){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.search-bar{
		display: flex;
		height: calc(44px + var(--status-bar-height));
		background-color: #FFF;
		
		.search-content{
			display: flex;
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-top: var(--status-bar-height);
			height: 44px;
			padding: 0 20px;
			
			.m-content{
				display: flex;
				flex: 1;
				flex-direction: row;
				align-items: center;
				background-color: $uni-bg-color;
				height: 30px;
				border-radius: 15px;
				align-items: center;
				padding: 0 20px;
				.search-image{
					width: 14px;
					height: 14px;
				}
				
				.text-search-input{
					flex: 1;
					height: 100%;
					margin-left: 6px;
					font-size: 14px;
					color: $uni-text-color;
					line-height: 14px;
				}
				
			}
			.cancel-text{
				color: $uni-color-primary;
				font-size: 16px;
				margin-left: 20px;
			}
		}
		
		
	}
	
</style>