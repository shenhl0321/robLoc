<template>
	<view class="main-view">
		<uni-app-nav-bar :mTitle="$t('productList')"></uni-app-nav-bar>
		<scroll-view class="list-view" scroll-y>
			<view class="product" v-for="(item,index) in list" :key="index" @click="pushToProductDetail">
				<image class="product-image" :src="item.logo"
					mode="aspectFill" @click="pushToProductDetail(item.id)"></image>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list : []
			}
		},
		
		onLoad() {
			this.getProudctListPetch()
		},
		
		methods:{
			async getProudctListPetch(){
				let res = await this.$request('/api/pro_ls')
				if(res.result == true){
					this.list = res.data
				}
			},
			
			pushToProductDetail(productId){
				uni.navigateTo({
					url: `/pages/home/pages/productDetail?productId=${productId}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.product{
		width: 100%;
		height: 170px;
		padding: 0 20px;
		box-sizing: border-box;
		margin-top: 20px;
		
		.product-image{
			width: 100%;
			height: 100%;
			border-radius: 16px;
		}
	}
</style>