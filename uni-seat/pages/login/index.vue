<template>
	<view class="main-view login">
		<image class="app-logo" style="margin-top: 144px;" src="../../static/app_logo.png"></image>
		
		<view class="content" style="width: 100%;">
			<view class="col password-view" v-if="currentLoginType == 'password'">
				<uni-section-input style="margin-top: 70px;" v-model="mobile" :placeholder="$t('inputMobile')" :maxlength="11" inputType="number"></uni-section-input>
				<uni-section-input style="margin-top: 20px;" v-model="password" :placeholder="$t('inputPassword')" :password="true"></uni-section-input>
				<button class="valid-btn" :class="{'active' : loginIsValid}" @click="passwrodToLogin">{{$t('login')}}</button>
				<view class="row password-section">
					<text class="text-font" @click="forgetPassword">{{$t('forgetPassword') + '?'}}</text>
					<text class="text-font" @click="changeLoginType('code')">{{$t('codeLogin')}}</text>
				</view>
			</view>
			
			<view class="col code-view" v-else>
				<uni-section-input style="margin-top: 70px;" v-model="mobile" :placeholder="$t('inputMobile')" :maxlength="11" inputType="number"></uni-section-input>
				<button class="valid-btn" :class="{'active' : codeIsValid}" @click="codeToLogin">{{$t('getSmsCode')}}</button>
				<view class="row code-section">
					<text class="text-font" @click="changeLoginType('password')">{{$t('passwordLogin')}}</text>
				</view>
			</view>
		</view>
		
		<view class="row bottom-view">
			<view class="row">
				<text class="text-font" @click="languageChange">{{$t('simplifiedChinese')}}</text>
				<image class="small-push-image" src="../../static/ic_push_small.png"></image>
			</view>
			<view class="row">
				<text class="text-font" @click="toRegister">{{$t('registerRightNow')}}</text>
				<image class="small-push-image" src="../../static/ic_push_small.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				mobile : '15157157084',
				password : '123456',
				currentLoginType : "password"
			}
		},
		
		computed : {
			loginIsValid(){
				return this.mobile.length == 11 && this.password.length > 5
			},
			
			codeIsValid(){
				return this.mobile.length == 11
			}
		},
		
		methods:{
			//密码登录
			passwrodToLogin(){
				if(this.loginIsValid){
					console.log(this.mobile)
					uni.reLaunch({
						url: '/pages/home/index'
					})
				}
			},
			//获取验证码
			codeToLogin(){
				if(this.codeIsValid){
					console.log(this.mobile)
					uni.navigateTo({
						url: `/pages/login/pages/codeToLogin?moble=${this.mobile}`
					})
				}
			},
			//点击忘记密码
			forgetPassword(){
				uni.navigateTo({
					url:'/pages/login/pages/forgetPassword'
				})
			},
			//点击切换登录方式
			changeLoginType(type){
				this.currentLoginType = type
			},
			//点击语言切换
			languageChange(type){
				
			},
			//去注册
			toRegister(){
				uni.navigateTo({
					url: "/pages/login/pages/register"
				})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.login{
		padding: 0 40px;
	}
	
	.content{
		flex: 1;
		.password-view{
			width: 100%;
			.password-section{
				width: 100%;
				margin-top: 30px;
				justify-content: space-between;
			}
		}
		
		.code-view{
			width: 100%;
			.code-section{
				width: 100%;
				margin-top: 30px;
				justify-content: flex-end;
			}
		}
	}
	
	
	.text-font{
		font-size: 14px;
		color: $uni-text-color-grey;
	}
	
	.small-push-image{
		width: 14px;
		height: 14px;
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
	
	.bottom-view{
		justify-content: space-between;
		width: 100%;
		margin-bottom: calc(20px + env(safe-area-inset-bottom));
	}

</style>