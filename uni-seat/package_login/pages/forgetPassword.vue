<template>
	<view class="main-view">
		<uni-app-nav-bar></uni-app-nav-bar>
		<view class="col content">
			<text class="code-text">{{$t('forgetPassword')}}</text>
			<uni-section-input style="margin-top: 80px;" v-model="mobile" :placeholder="$t('inputMobile')" :maxlength="11" inputType="number"></uni-section-input>
			<uni-section-code-input ref="codeInput" style="margin-top: 20px;" @code="toGetCode" v-model="code"></uni-section-code-input>
			<uni-section-input style="margin-top: 20px;" v-model="password" :placeholder="$t('inputPassword')" :password="true"></uni-section-input>
			<button class="valid-btn" :class="{'active' : passwordSetIsValid}" @click="passwordToFixAction">{{$t('certain')}}</button>
		</view>
		<view class="row bottom-view">
			<text class="text-font" @click="backToLogin">{{$t('loginRightNow')}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				mobile : '',
				code : '',
				password:''
			}
		},
		
		computed : {
			passwordSetIsValid(){
				return this.mobile.length == 11 && this.password.length > 5 && this.code.length > 0
			},
			
		},
		
		methods:{
			async toGetCode(){
				if(this.mobile.length != 11){
					this.$toast(this.$t('inputRightPhone'))
				}else{
					let res = await this.$request('/api/send_sms',{'phone' : this.mobile,'sms_type' : 3})
					if(res.result == true){
						this.$refs.codeInput.timerStart()
					}
				}
			},
			
			async passwordToFixAction(){
				if(this.passwordSetIsValid){
					let res = await this.$request('/api/up_pwd',{
						'phone' : this.mobile,
						'password' : this.password, 
						'code' : this.code,
					 })
					if(res.result == true){
						this.$toast(this.$t('success'))
						uni.navigateBack()
					}
				}
			},
			
			backToLogin(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		flex: 1;
		width: 100%;
		padding: 0 40px;
		.code-text {
			margin-top: 120px;
			font-size: 26px;
			line-height: 26px;
			font-weight: 600;
		}
		.valid-btn{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 50px;
			border-radius: 25px;
			margin-top: 40px;
			color: #FFF;
			font-size: 16px;
			background-color: $uni-btn-enable-bg-color !important;
			
			&.active{
				background-color: $uni-color-primary !important;
			}
		}
	}
	
	
	.bottom-view{
		justify-content: center;
		width: 100%;
		margin-bottom: calc(20px + env(safe-area-inset-bottom));
		.text-font{
			font-size: 14px;
			color: $uni-text-color-grey;
		}
	}
	
	
</style>