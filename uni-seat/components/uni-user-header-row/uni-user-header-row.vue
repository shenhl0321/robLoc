<template>
	<view class="row user-header" @click="userHeaderIconUpload()">
		<text>{{$t('header')}}</text>
		<view class="row">
			<image class="user-icon" :src="avatarUrl" mode="aspectFill"></image>
			<image class="push-small" src="/static/ic_push_small.png"></image>
		</view>
	</view>
</template>

<script>
	import {uniConfig} from '../../utils/js/request.js'
	export default{
		props : {
			value : {
				type : String,
				default : ''
			}
		},
		
		
		data(){
			return{
				url : this.value
			}
		},
		
		computed : {
			avatarUrl(){
				if(this.url.length == 0){
					return '/static/ic_header.png'
				}else{
					return this.url
				}
			}
		},
		
		mounted() {
			console.log(this.avatarUrl)
		},
		
		methods :{
			userHeaderIconUpload(){
				let that = this
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album','camera'],
					success: function (res) {
						uni.uploadFile({
							url: uniConfig.baseUrl + '/api/upload',
							filePath : res.tempFilePaths[0],
							name : 'file',
							success(res) {
								let result = JSON.parse(decodeURIComponent(res.data))
								if (result.code == 1) {
									that.url = result.data.url
									that.$emit('input',that.url)
								} else {
									uni.showToast({
										icon:'error',
										title: '上传失败',
										duration: 2000,
									})
								}
							},
							fail(res) {
								uni.showToast({
									icon:'error',
									title: '请检查网络设置',
									duration: 2000,
								})
							}
						})
					}
				});
			
			},
			

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