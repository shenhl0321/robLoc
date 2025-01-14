<template>
	<view class="main-view">
		<uni-app-nav-bar :mTitle="$t('productList')"></uni-app-nav-bar>
		<scroll-view class="list-view" scroll-y :refresher-enabled="true" refresher-background="transparent"
		:refresher-triggered="isRefresher" @refresherrefresh="onRefresh" @refresherrestore="onRestore"
		@scrolltolower="scrolltolower">
			<view class="product" v-for="(item,index) in list" :key="index" @click="pushToProductDetail(item)">
				<image class="product-image" :src="item.logo"
					mode="aspectFill"></image>
			</view>
			
			<uni-load-more :status="loadStatus" v-if="loadStatus != null && list.length > 0"></uni-load-more>
			<uni-mescroll-empty v-if="list.length == 0"></uni-mescroll-empty>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				isRefresher: true,
				loadStatus: null,
				pageNumber: 1,
				list : [],
			}
		},
		
		onLoad() {
			this.onRefresh()
		},
		
		methods:{
			
			onRefresh() {
				this.getProudctListPetch()
			},
			
			//上拉加载
			scrolltolower() {
				if (this.loadStatus != 'no-more') {
					this.getReseverListPetch(false)
				}
			},
			
			onRestore() {
				this.isRefresher = 'restore';
			},
			
			async getProudctListPetch(reload = true){
				if (reload) {
					this.pageNumber = 1
					this.list = []
				} else {
					this.pageNumber++
					this.loadStatus = 'loading'
				}
				
				let res = await this.$request('/api/pro_ls',{page : this.pageNumber , limit : 10})
				console.log(res)
				this.isRefresher = false
				if(res.result == true){
					this.list = this.list.concat(res.data.list)
					let count = res.data.count
					this.loadStatus = this.list.length < count ? 'more' : 'no-more'
				}
			},
			
			pushToProductDetail(e){
				uni.navigateTo({
					url: `/package_home/pages/productDetail?id=${e.id}`
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