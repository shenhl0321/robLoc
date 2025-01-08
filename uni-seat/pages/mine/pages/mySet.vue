<template>
	<view class="main-view" v-if="phone != null">
		<uni-app-nav-bar :mTitle="$t('set')"></uni-app-nav-bar>
		<view class="col content">
			<uni-user-header-row v-model="avatar"></uni-user-header-row>
			<uni-label-input :labelName="$t('nickName')" v-model="nickname"></uni-label-input>
			<uni-label-input :labelName="$t('name')" v-model="realname"></uni-label-input>
			<uni-label-input :labelName="$t('duty')" v-model="position"></uni-label-input>
			<uni-label-input :labelName="$t('companyEmail')" v-model="email"></uni-label-input>
			<uni-label-input :labelName="$t('mobileNum')" :noFix="true" v-model="phone"></uni-label-input>
		</view>
		<view class="col bottom-view">
			<button class="save-btn" @click="saveData">{{$t('save')}}</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				avatar : '',
				nickname : '',
				realname : '',
				position : '',
				email :'',
				phone : null
			}
		},
		
		onLoad() {
			this.getUserInfo()
		},
		
		methods:{
			
			async getUserInfo(){
				let res = await this.$request('/api/user')
				this.avatar = res.data.avatar
				this.nickname = res.data.nickname
				this.realname = res.data.realname
				this.position = res.data.position
				this.email = res.data.email
				this.phone = res.data.phone
			},
						
			async saveData() {
				let res = await this.$request('/api/up_user', {
					avatar: this.avatar,
					nickname: this.nickname,
					realname: this.realname,
					position: this.position,
					email: this.email,
					phone: this.phone
				})
				if (res.result == true) {
					this.$toast(this.$t('success'))
				}
			},
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
		.save-btn{
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
	}
	

	
	
</style>