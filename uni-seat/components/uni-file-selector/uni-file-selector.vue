<template>
	<view class="file-main-view">
		<view class="header-view">
			<text class="title-text">{{labelName}}</text>
			<view class="push-view" @click="addToFileAction()">
				<text>上传</text>
				<image style="width: 16px; height: 16px;" src="../../static/ic_enter.png"> </image>
			</view>
		</view>
		<view style="display: flex; flex-direction: column; width: 100%; " v-if="dataArray.length > 0">
			<view class="file-cell" v-for="(item,index) in dataArray" :key="index" @click.stop="didClickFileWithIndex(index)">
				<text class="fileName" @click.stop="didClickFileWithIndex(index)">{{item.name}}</text>
				<text class="deleteTxt" @click.stop="deleteFileWithIndex(index)">删除</text>
			</view>
		</view>
		
	</view>
</template>

<script>
import {uniConfig} from '../../common/js/uni-config.js'

	export default {
		props: {
			labelName: {
				type: String
			},
			valueData:{
				type : Array,
				default(){
					return []
				}
			}
		},
		data() {
			return {
				dataArray: this.valueData == null ? [] : this.valueData,
			}
		},
		methods: {
			addToFileAction() {
				let that = this
				uni.chooseImage({
					count: 9,
					sizeType : ['compressed'],  //['original', 'compressed'],
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: (res) => {
						let i =  0
						let handleFiles = res.tempFiles.map(function(val){
							i ++ 
							return {
								name : 'file' + i,
								uri : val.path
							}
						})
						that.filesUploadWithSource(handleFiles,(data)=>{
							that.dataArray = that.dataArray.concat(data)
						})
					}
				})
			},

			
			deleteFileWithIndex(index) {
				this.dataArray.splice(index, 1)
			},
			
			didClickFileWithIndex(index){
				let item = this.dataArray[index]
				uni.navigateTo({
					url: `/pages/z-common/uni-webview?url=${item.url}&title=${item.name}`
				})
			},
			
			filesUploadWithSource(files,complete){
				uni.uploadFile({
					url:  uniConfig.baseUrl + 'common/front/upload/oss/file',
					files : files,
					success(res) {
						let result = JSON.parse(decodeURIComponent(res.data))
						if (result.meta.code == 200) {
							complete(result.data.result)
						} else {
							showToast('上传失败')
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

		},
		
		watch:{
			dataArray(val){
			    let res = this.dataArray.map(function(e){
					return e.id
				})
				this.$emit('input',res.join(','))
				this.$emit('dataChangeCourse', this.dataArray)
			}
		}
	}
</script>

<style lang="scss">
	.file-main-view{
		display: flex;
		flex-direction: column;
		background-color: #FFF;
		padding: 0 16px;
		.header-view{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			height: 60px;
			.title-text{
				color: $uni-text-color;
				font-weight: bold;
				font-size: 16px;
			}
			.push-view{
				display: flex;
				flex-direction: row;
				color: $uni-text-color-inverse;
				align-items: center;
				font-size: 16px;
			}
			
		}
		.file-cell{
			display: flex;
			width: 100%;
			margin-bottom: 10px;
			flex-direction: row;
			justify-content: space-between;
			color: $uni-color-primary;
			font-size: 16px;
			.fileName{
				flex: 1;
				text-decoration: underline;
			}
			.deleteTxt{
				margin-left: 16px;
			}
		}
	}
</style>
