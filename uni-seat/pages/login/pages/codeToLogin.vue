<template>
	<view class="main-view">
		<uni-app-nav-bar></uni-app-nav-bar>
		<view class="col content-view">
			<text class="code-text">输入验证码</text>
			<text class="code-mobile">验证码已发送至{{moble}}</text>
			<xt-verify-code v-model="verifyCode" @confirm="confirm"></xt-verify-code>
			<text class="error-text" v-if="codeError">验证码错误，请重新输入</text>
			<view class="row timer" :class="{getCodeRest : timeCount == 0}" @click="resetGetCode">{{timeCount == 0 ? '重新获取验证码' : timeCount + '秒后重新获取验证码'}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				verifyCode: '',
				moble: '177 5800 5488',
				codeError: false,
				timeCount: 0,
				timeNumber : 60,
				timer: null
			}
		},

		onLoad(option) {
			this.moble = option.moble
			this.timeCount = this.timeNumber
		},

		onUnload() {
			if (this.timer) {
				clearInterval(this.timer)
				this.timer = null
			}
		},

		watch: {
			timeCount(val) {
				if (this.timeCount == this.timeNumber) {
					let that = this
					this.timer = setInterval(function() {
						that.timeCount--
					}, 1000)
				}
				
				if(this.timeCount == 0){
					clearInterval(this.timer)
					this.timer = null
				}
			}
		},

		methods: {
			resetGetCode(){
				if(this.timeCount == 0){
					this.timeCount = this.timeNumber
				}
			},
			
			confirm(verifyCode) {
				console.log(verifyCode)
				uni.reLaunch({
					url: '/pages/home/index',
					success: () => {
						//plus.navigator.closeSplashscreen()
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content-view {
		width: 100%;
		padding: 0 40px;
		color: $uni-text-color;

		.code-text {
			margin-top: 120px;
			font-size: 26px;
			line-height: 26px;
			font-weight: 600;
		}

		.code-mobile {
			margin-top: 10px;
			font-size: 14px;
			margin-bottom: 20px;
		}

		.error-text {
			color: $uni-color-error;
			font-size: 12px;
			margin-top: 10px;
		}

		.timer {
			justify-content: flex-end;
			font-size: 12px;
			color: #959AA0;
			margin-top: 20px;
			&.getCodeRest{
				color: $uni-color-primary;
			}
		}
	}
</style>