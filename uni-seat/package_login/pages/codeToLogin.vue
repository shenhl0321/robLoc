<template>
	<view class="main-view">
		<uni-app-nav-bar></uni-app-nav-bar>
		<view class="col content-view">
			<text class="code-text">{{$t('inputCode')}}</text>
			<text class="code-mobile">{{$t('codeSendTo') + mobile}}</text>
			<view style="width: 100%;">
				<xt-verify-code v-model="verifyCode" @confirm="confirm"></xt-verify-code>
			</view>
			<text class="error-text" v-if="codeError">{{$t('codeError')}}</text>
			<view class="row timer" :class="{getCodeRest : timeCount == 0}" @click="resetGetCode">{{timeCount == 0 ? $t('resetGetCode') : timeCount + $t('timeOutResetGetCode')}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				verifyCode: '',
				mobile: '',
				codeError: false,
				timeCount: 0,
				timeNumber : 60,
				timer: null
			}
		},

		onLoad(option) {
			this.mobile = option.mobile
			this.timeCount = this.timeNumber
			this.toGetCode()
			
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
				this.toGetCode()
			},
			
			async toGetCode(){
				let res = await this.$request('/api/send_sms',{'phone' : this.mobile,'sms_type' : 1})
				if(res.result == true){
					console.log(res)
				}
			},
			
			async confirm(verifyCode) {
				console.log(verifyCode)
				let res = await this.$request('/api/sms_login',{
					'phone' : this.mobile,
					'code' : verifyCode,
					})
				if(res.result == true){
					console.log(res.data)
					this.$store.state.userInfo = res.data
					uni.setStorageSync('userInfo', res.data)
					uni.reLaunch({
						url: '/pages/home/index',
					})
				}
				
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content-view {
		width: 100%;
		padding: 0 40px;
		color: $uni-text-color;
		box-sizing: border-box;
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