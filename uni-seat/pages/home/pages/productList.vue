<template>
	<view class="main-view">
		<uni-app-nav-bar :mTitle="$t('productList')"></uni-app-nav-bar>
		<scroll-view class="list-view" scroll-y>
			<view class="product" v-for="(item,index) in list" :key="index" @click="pushToProductDetail">
				<image class="product-image" src="https://picx.zhimg.com/v2-f375259bab6293c5da096297302f4a6c_r.jpg?"
					mode="aspectFill"></image>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list : [1,2,3,4]
			}
		},
		
		methods:{
			pushToProductDetail(){
				uni.navigateTo({
					url: '/pages/home/pages/productDetail'
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