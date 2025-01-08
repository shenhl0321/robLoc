<template>
	<view class="main-view">
		<uni-app-nav-bar></uni-app-nav-bar>
		<view class="col content">
			<uni-user-header-row v-model="avatar"></uni-user-header-row>
			<uni-label-input :labelName="$t('nickName')" v-model="nickname"></uni-label-input>
			<uni-label-input :labelName="$t('name')" v-model="realname"></uni-label-input>
			<uni-label-input :labelName="$t('duty')" v-model="position"></uni-label-input>
			<uni-label-input :labelName="$t('companyEmail')" v-model="email"></uni-label-input>
			<uni-label-input :labelName="$t('mobileNum')" :noFix="true" v-model="phone"></uni-label-input>
		</view>
		<view class="col bottom-view">
			<button class="submit-btn" @click="submit">{{$t('submit')}}</button>
			<button class="jump-btn" @click="jump">{{$t('jump')}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar: '',
				nickname: '',
				realname: '',
				position: '',
				email: '',
				phone: ''
			}
		},

		onLoad() {
			const userInfo = uni.getStorageSync('userInfo')
			this.avatar = userInfo.avatar
			this.nickname = userInfo.nickname
			this.realname = userInfo.realname
			this.position = userInfo.position
			this.email = userInfo.email
			this.phone = userInfo.phone
		},

		methods: {
			async submit() {
				let res = await this.$request('/api/up_user', {
					avatar: this.avatar,
					nickname: this.nickname,
					realname: this.realname,
					position: this.position,
					email: this.email,
					phone: this.phone
				})
				if (res.result == true) {
					uni.reLaunch({
						url: '/pages/home/index',
					})
				}
			},

			jump() {
				uni.reLaunch({
					url: '/pages/home/index',
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		flex: 1;
		width: 100%;
	}

	.bottom-view {
		width: 100%;
		margin-bottom: calc(20px + env(safe-area-inset-bottom));
		padding: 0 40px;

		.submit-btn {
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

		.jump-btn {
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