<template>
	<view class="uni-input-view">
		<view class="uni-leftview-class">
			<text class="sign-text" v-if="showSign">*</text>
			<text class="left-text">{{labelName}}</text>
		</view>
		<input class="right-input" :disabled="noFix" :maxlength="maxLength" type="digit" v-model="showValue"
			:placeholder="inputPlaceHolder()" placeholder-class="placeholderClass" @input="textDidChange"
			v-if="inputType=='number'" />
		<input class="right-input" :disabled="noFix" :maxlength="maxLength" v-model="showValue"
			:placeholder="inputPlaceHolder()" placeholder-class="placeholderClass" @input="textDidChange" v-else />
		<text class="right-unit-text" v-if="unit!=null">{{unit}}</text>
		<view class="bottom-line" v-if="showBottomLine"></view>
	</view>
</template>

<script>
	export default {
		props: {
			labelName: {
				type: String,
				default: '这是个标题'
			},
			value: {
				type: undefined,
			},
			noFix: {
				type: Boolean,
				default: false
			},
			placeHolder: {
				type: String,
			},
			inputType: {
				type: String,
				default: 'text'
			},
			unit: {
				type: String,
				default: null
			},
			maxLength: {
				type: Number,
				default: -1
			},
			showSign: {
				type: Boolean,
				default: false
			},
			showBottomLine: {
				type: Boolean,
				default: true
			},
			decimalNumber: {
				type: Number,
				default: -1
			}

		},
		data() {
			return {
				showValue: this.value,
				myType: this.inputType
			}
		},
		methods: {
			inputPlaceHolder() {
				return this.placeHolder == null || this.placeHolder.length == 0 ? "请输入" : this.placeHolder
			},
			textDidChange(e) {
				let value = e.target.value
				if (this.decimalNumber != -1) {
					value = value.replace(/([0-9]+.[0-9]{2})[0-9]*/, "$1")
				}
				this.$nextTick(()=>{
					this.showValue = value
					this.$emit('input', this.showValue)
				})
				
			}
		},
		watch: {
			value(val) {
				this.showValue = val


			}
		}
	}
</script>

<style lang="scss">
	.uni-input-view {
		position: relative;
		display: flex;
		flex-direction: row;
		background-color: #FFF;
		height: 60px;
		padding: 0 16px;
		align-items: center;
		font-size: 16px;
		color: $uni-text-color;

		.uni-leftview-class {
			display: flex;

			.sign-text {
				font-size: 16px;
				color: #FF3C32;
				font-weight: bold;
			}
		}

		.right-input {
			color: $uni-text-color;
			margin-left: 16px;
			height: 100%;
			flex: 1;
			text-align: right;

		}

		.right-unit-text {
			margin-left: 4px;
		}

		.bottom-line {
			position: absolute;
			background-color: $uni-line-color;
			bottom: 0;
			right: 0px;
			left: 16px;
			height: 1px;
		}
	}
</style>