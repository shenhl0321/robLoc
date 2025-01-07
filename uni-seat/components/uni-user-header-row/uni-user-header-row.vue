<template>
	<view class="row user-header" @click="uploadUserHeaderIcon">
		<text>{{$t('header')}}</text>
		<view class="row">
			<image class="user-icon" src="/static/ic_header.png" mode="aspectFill"></image>
			<image class="push-small" src="/static/ic_push_small.png"></image>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		
		methods :{
			uploadUserHeaderIcon(){
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success: function (res) {
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-header{
		width: 100%;
		justify-content: space-between;
		align-items: center;
		padding: 10px 20px;
		color: $uni-text-color;
		font-weight: 500;
		font-size: 16px;
		.user-icon{
			width: 40px;
			height: 40px;
			border-radius: 20px;
		}
		.push-small{
			width: 16px;
			height: 16px;
			margin-left: 10px;
		}
	}
</style>