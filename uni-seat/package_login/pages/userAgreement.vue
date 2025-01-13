<template>
	<view class="main-view">
		<uni-app-nav-bar :mTitle="$t('userAgreement')"></uni-app-nav-bar>
		<view class="rich-text-view" v-if="protocol != null">
			<rich-text id="richtext" :nodes="protocol"></rich-text>
		</view> 
	</view>
</template>

<script>
	export default{
		data(){
			return {
				protocol : null
			}
		},
		
		onLoad(){
			this.updateData()
		},
		
		methods:{
			async updateData(){
				let res = await this.$request('/api/protocol')
				if(res.result == true){
					this.protocol = res.data.protocol
				}
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.rich-text-view {
		width: 100%;
		flex: 1;
		padding: 20px;
		background-color: #FFF;
	}
</style>