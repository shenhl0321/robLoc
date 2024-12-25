<template>
	<view class="file-list">
		<text class="title-text">{{mTitle}}</text>
		<view class="file-cell" v-for="(item,index) in dataArray" :key="index" v-if="dataArray.length > 0">
			<text class="cell-text" @click="didClickItemWithIndex(index)">{{item.name}}</text>
		</view>
		<view class="no-file-view" v-if="dataArray.length == 0">未上传</view>
	</view>
</template>

<script>
	export default{
		props:{
			dataArray : {
				type : Array,
				default(){
					return[]
				}
			},
			mTitle : {
				type : String,
				default: '标题'
			}
		},
		
		methods : {
			didClickItemWithIndex(index){
				let item = this.dataArray[index]
				uni.navigateTo({
					url: `/pages/z-common/uni-webview?url=${item.url}&title=${item.name}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.file-list{
		display: flex;
		flex-direction: column;
		font-size: 14px;
		.title-text{
			color: $uni-text-color-inverse;
		}
		.file-cell{
			margin-top: 12px;
			.cell-text{
				border-bottom: 1px solid $uni-color-primary;
				color: $uni-color-primary;
			}
		}
		.no-file-view{
			color: $uni-color-primary;
			margin-top: 10px;
		}
		
	}
</style>