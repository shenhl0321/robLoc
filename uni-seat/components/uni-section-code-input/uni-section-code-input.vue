<template>
	<view class="row section-input" :class="{active: focusSelector}">
		<input class="my-input" placeholder-class="placeholder-class"
			v-model="inputText" :placeholder="$t('inputCode')" @input="textDidChange"
			@focus="inputFocus" @blur="inputBlur" />
		
		<text class="code-text" @click="getCodeAction">{{timeCount == 0 ? $t('sendCode') : timeCount+'(s)'}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			value: {
				type: String,
				default: ''
			},
		},
		data() {
			return {
				inputText: '',
				focusSelector: false,
				timeCount: 0,
				timer: null
			}
		},
		
		onUnload() {
			if (this.timer) {
				clearInterval(this.timer)
				this.timer = null
			}
		},
		
		watch: {
			timeCount(val) {
				if (this.timeCount == 60) {
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
			textDidChange(e) {
				let value = e.target.value
				this.inputText = value
				this.$emit('input', this.inputText)
			},
			
			inputFocus(e) {
				this.focusSelector = true
			},
			
			inputBlur(e) {
				this.focusSelector = false
			},
			
			getCodeAction(e){
				if(this.timer == null){
					this.timeCount = 60
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.section-input {
		width: 100%;
		justify-content: space-between;
		border-bottom: 1px solid $uni-border-color;
		&.active {
			border-bottom: 1px solid $uni-text-color;
		}
	}

	.my-input {
		font-size: 16px;
		height: 50px;
		flex: 1;
		color: $uni-text-color;
	}
	
	.code-text{
		font-size: 16px;
		color: $uni-color-primary;
	}
</style>