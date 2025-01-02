<template>
	<view class="section-input">
		<input class="my-input" :class="{'active': focusSelector}" placeholder-class="placeholder-class" v-model="inputText"
			:focus="focus" :maxlength="maxlength" type="number" :placeholder="placeholder" @input="textDidChange"
			@focus="inputFocus" @blur="inputBlur" v-if="inputType == 'number'" />
		
		<input class="my-input" :class="{active: focusSelector}" placeholder-class="placeholder-class" v-model="inputText"
			:focus="focus" :maxlength="maxlength" type="text" :placeholder="placeholder" @input="textDidChange"
			@focus="inputFocus" @blur="inputBlur" :password="password" v-else/>
	</view>
</template>

<script>
	export default {
		props: {
			focus: {
				type: Boolean,
				default: false
			},
			maxlength: {
				type: Number,
				default: 2000
			},
			value: {
				type: String,
				default: ''
			},
			inputType:{
				type : String,
				default : 'text'
			},
			placeholder: {
				type: String,
				default: '请输入'
			},
			password:{
				type : Boolean,
				default: false
			}
		},

		data() {
			return {
				inputText: this.value,
				focusSelector: false,
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	.section-input{
		width: 100%;
	}
	.my-input {
		font-size: 16px;
		height: 50px;
		width: 100%;
		color: $uni-text-color;
		border-bottom: 1px solid $uni-border-color;

		&.active {
			border-bottom: 1px solid $uni-text-color;
		}
	}

</style>