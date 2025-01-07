<template>
	<view class="main-view">
		<uni-app-nav-bar></uni-app-nav-bar>
		<view class="col content">
			<uni-user-header-row></uni-user-header-row>
			<uni-label-input :labelName="$t('nickName')" v-model="nickName"></uni-label-input>
			<uni-label-input :labelName="$t('name')" v-model="name"></uni-label-input>
			<uni-label-input :labelName="$t('duty')" v-model="duty"></uni-label-input>
			<uni-label-input :labelName="$t('companyEmail')" v-model="email"></uni-label-input>
			<uni-label-input :labelName="$t('mobileNum')" :noFix="true" v-model="mobile"></uni-label-input>
		</view>
		<view class="col bottom-view">
			<button class="submit-btn" @click="submit">{{$t('submit')}}</button>
			<button class="jump-btn" @click="jump">{{$t('jump')}}</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				nickName : '',
				name : '',
				duty : '',
				email :'',
				mobile : '15157157084'
			}
		},
		
		computed : {
			
		},
		
		methods:{
			submit(){
				console.log(this.nickName)
			},
			
			jump(){
				uni.reLaunch({
					url: '/pages/home/index',
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		flex: 1;
		width: 100%;
	}

	.bottom-view{
		width: 100%;
		margin-bottom: calc(20px + env(safe-area-inset-bottom));
		padding: 0 40px;
		.submit-btn{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 50px;
			border-radius: 25px;
			color: #FFF;
			background-color: $uni-color-primary !important;
			font-size: 16px;
		}
		.jump-btn{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 50px;
			color: #5C6473;
			font-size: 16px;
			margin-top: 20px;
		}
	}
	

	
	
</style>