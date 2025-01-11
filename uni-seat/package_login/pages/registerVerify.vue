<template>
	<view class="main-view">
		<uni-app-nav-bar></uni-app-nav-bar>
		<view class="col content">
			<text class="verify-text">{{$t('verify')}}</text>
			<text class="problem">{{topic}}</text>
			<view style="margin-top: 40px;">
				<view class="row answer-selector" v-for="(item,index) in letterList" :key="index"
					@click="selectedAnswer(item.answer)">
					<text class="selector-letter" :class="{active : result == item}">{{item.answer}}</text>
					<view class="answer" :class="{active : result == item.answer}">
						{{item.problem}}
					</view>
				</view>
			</view>
			<button class="submit-btn" @click="submit">{{$t('submit')}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone : '',
				answer: null,
				id: null,
				topic: '',
				letterList: [],

				result: null,
			}
		},

		onLoad(option) {
			this.phone = option.iphone
			this.getProblemListPetch()
		},


		methods: {
			
			selectedAnswer(e) {
				this.result = e
			},

			checkValid() {
				if (this.result == null) {
					this.$toast(this.$t('selectedRightAnswer'))
					return false
				}
				if (this.answer != this.result) {
					this.$toast(this.$t('answerError'))
					return false
				}
				return true
			},

			submit() {
				if(this.checkValid()){
					this.selectedProblemCheckPetch()
				}
			},
			
			async getProblemListPetch() {
				let res = await this.$request('/api/single')
				if (res.result == true) {
					this.topic = res.data.topic
					this.letterList = res.data.option
					this.id = res.data.id
					this.answer = res.data.answer
				}
			},
			
			async selectedProblemCheckPetch() {
				let res = await this.$request('/api/check_single',{
					phone : this.phone,
					id : this.id,
					answer : this.result
				})
				if (res.result == true) {
					console.log(res)
					this.$store.state.userInfo = res.data
					uni.setStorageSync('userInfo', res.data)
					uni.navigateTo({
						url: '/package_login/pages/userInfoEdit'
					})
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
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

		.problem {
			font-size: 16px;
			line-height: 16px;
			font-weight: 500;
			margin-top: 50px;
		}

		.answer-selector {
			align-items: center;
			margin-bottom: 10px;

			.selector-letter {
				font-size: 18px;
				line-height: 18px;

				&.active {
					color: $uni-color-primary;
				}
			}

			.answer {
				flex: 1;
				font-size: 14px;
				line-height: 20px;
				border: 1px solid #E9E9EA;
				background-color: #FFF;
				border-radius: 4px;
				margin-left: 12px;
				padding: 10px;

				&.active {
					border: 1px solid $uni-color-primary;
					background-color: #F3FAFF;
				}
			}
		}

		.submit-btn {
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