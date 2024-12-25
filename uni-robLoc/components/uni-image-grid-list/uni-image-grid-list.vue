<template>
	<view class="image-selector-view">
		<text class="grid-title-text" v-if="mTitle != null">{{mTitle}}</text>
		<view class="grid-view">
			<view class="grid-view-item" v-for="(item,index) in dataArray" :key="index" @click="previewImagesFromToIndex(index)">
				<image class="grid-view-image" :src="(item.url + '_600x600_.png') || item" mode="aspectFill"></image>
					<view v-if="index == dataArray.length - 1 && dataArray.length > 6">
						<view class="load-more-bg"></view>
						<view class="load-more">
							<text>更多</text>
							<image style="width: 14px; height: 14px;" src="../../static/ic_small_push.png"></image>
						</view>
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			mTitle:{
				type:String,
			},
			list : {
				type : Array,
				default() {
					return []
				}
			}
		},
		data(){
			return{
				dataArray: this.list
			}
		},
		
		mounted() {
		
		},
		
		methods:{
			previewImagesFromToIndex(index){
				var imageUrls = []
				this.dataArray.forEach(item => {
					imageUrls.push(item.url)
				})
				uni.previewImage({
					current: index,
					urls:imageUrls,
				})
			}
		},
		
		
	}
</script>

<style lang="scss">
	.image-selector-view{
		display: flex;
		flex-direction: column;
		background-color: #FFF;
		
		.grid-title-text{
			color: $uni-text-color;
			font-size: 16px; 
			margin-bottom: 10px;
		}
		
		.grid-view{
			display: grid;
			grid-template-columns: repeat(3,1fr);
			grid-column-gap: 10px;
			grid-row-gap: 10px;
			margin-top: 10px;
			.grid-view-item{
				display: flex;
				position: relative;
				padding-bottom: 100%;
				overflow: hidden;
				.grid-view-image{
					display: block;
					position: absolute;
					height: 100%;
					width: 100%;
					border-radius: 6px;
				}
				.load-more{
					display: flex;
					flex-direction: row;
					position: absolute;
					height: 100%;
					width: 100%;
					border-radius: 6px;
					justify-content: center;
					align-items: center;
					font-size: 12px;
					color: #FFF;
				}
				
				.load-more-bg{
					position: absolute;
					height: 100%;
					width: 100%;
					border-radius: 6px;
					background-color: #000;
					opacity: 0.25;
				}
			}
		}
	}
</style>

