<template>
	<view class="main-view">
		<uni-app-nav-bar></uni-app-nav-bar>
		<view class="col content">
			<text class="verify-text">{{$t('verify')}}</text>
			<text class="problem">问题：公司slogan是什么？</text>
			<view style="margin-top: 40px;">
				<view class="row answer-selector" v-for="(item,index) in letterList" :key="index"
					@click="selectedAnswer(item)">
					<text class="selector-letter" :class="{active : result == item}">{{item}}</text>
					<view class="answer" :class="{active : result == item}">
						想不等于做，做不等于做到，做到不等于得到，更不等于成功
					</view>
				</view>
			</view>
			<button class="submit-btn" @click="submit">{{$t('submit')}}</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				letterList : ['A', 'B', 'C', 'D'],
				result : ''
			}
		},
		
		methods:{
			selectedAnswer(e){
				this.result = e
			},
			
			submit(){
				uni.navigateTo({
					url: '/pages/login/pages/userInfoEdit'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		flex: 1;
		width: 100%;
		padding: 0 40px;
		color: #141D28;
		.verify-text {
			margin-top: 40px;
			font-size: 26px;
			line-height: 26px;
			font-weight: 600;
		}
		.problem{
			font-size: 16px;
			line-height: 16px;
			font-weight: 500;
			margin-top: 50px;
		}
		
		.answer-selector{
			align-items: center;
			margin-bottom: 10px;
			.selector-letter{
				font-size: 18px;
				line-height: 18px;
				&.active{
					color: $uni-color-primary;
				}
			}
			.answer{
				flex: 1;
				font-size: 14px;
				line-height: 20px;
				border: 1px solid #E9E9EA;
				background-color: #FFF;
				border-radius: 4px;
				margin-left: 12px;
				padding: 10px;
				&.active{
					border: 1px solid $uni-color-primary;
					background-color: #F3FAFF;
				}
			}
		}
		
		.submit-btn{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 50px;
			border-radius: 25px;
			margin-top: 40px;
			color: #FFF;
			font-size: 16px;
			background-color: $uni-color-primary !important;
		}
	}
	
	
	
	
</style>