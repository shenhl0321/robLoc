<template>
	<view class="main-view">
		<!-- #ifndef MP-WEIXIN -->
		<uni-app-nav-bar :mTitle="$t('productList')"></uni-app-nav-bar>
		<!-- #endif -->
		<view class="content">
			<web-view class="web-view" :webview-styles="webviewStyles" src="https://uniapp.dcloud.net.cn/component/web-view.html#web-view"></web-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#0099FF'
					}
				},
				
				id : ''
			}
		},
		
		onLoad(option) {
			this.id = option.productId
			//this.getProductDetailPetch()
		},
		
		methods : {
			async getProductDetailPetch(){
				let res = await this.$request('/api/pro_ls',{id : this.id})
				console
				if(res.result == true){
					console.log(res)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
	  display: flex;
	  flex: 1;
	  width: 100%;
	  
	  .web-view{
		  margin-top: 100px;
		  /* #ifdef MP-WEIXIN */
		  margin-top: calc(64px + var(--status-bar-height));
		  /* #endif */
		  /* #ifndef MP-WEIXIN */
		  margin-top: calc(44px + var(--status-bar-height));
		  /* #endif */
	  }
	}
</style>