<template>
	<view class="image-selector-view">
		<text class="grid-title-text">{{mTitle}}</text>
		<view class="grid-view">
			<view class="grid-view-item" v-for="(item,index) in dataArray" :key="index">
				<image class="grid-view-image" :src="item.pics[0].url + '_600x600_.png'" mode="aspectFill" @click="previewImagesFromToIndex(index)"></image>
				<view v-if="index < dataArray.length - 1">
					<view class="bottom-bg-view"></view>
					<view class="des-view">
						<text>{{item.typeName}}</text>
					</view>
				</view>
				<view v-else>
					<view class="load-more-bg"></view>
					<view class="load-more" @click="didTapToSeeImageList()">
						<text>查看全部</text>
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
			didTapToSeeImageList : function(){
				this.$emit('seeImageList',this.list)
			},
			
			previewImagesFromToIndex(index){
				var imageUrls = []
				this.dataArray.forEach(imageArrModel => {
					imageArrModel.pics.forEach(e => {
						imageUrls.push(e.url)
					} )
				})
				let currentUrl = this.dataArray[index].pics[0].url
				let currentIndex = imageUrls.findIndex(e => {
					return e === currentUrl
				})
				uni.previewImage({
					current: currentIndex,
					urls:imageUrls
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
			font-size: 14px; 
			margin-bottom: 10px;
		}
		
		.grid-view{
			display: grid;
			grid-template-columns: repeat(3,1fr);
			grid-column-gap: 10px;
			grid-row-gap: 10px;
		
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
				.des-view{
					display: flex;
					position: absolute;
					width: 100%;
					height: 28px;
					bottom: 0;
					font-size: 12px;
					color: #FFF;
					justify-content: center;
					align-items: center;
				}
				.bottom-bg-view{
					display: flex;
					position: absolute;
					width: 100%;
					height: 28px;
					bottom: 0;
					background-color: #000;
					opacity: 0.5;
					border-bottom-left-radius: 6px;
					border-bottom-right-radius: 6px;
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
					font-size: 14px;
					color: #FFF;
				}
				
				.load-more-bg{
					position: absolute;
					height: 100%;
					width: 100%;
					border-radius: 6px;
					background-color: #000;
					opacity: 0.5;
				}
				
			}
		}
	}
</style>

