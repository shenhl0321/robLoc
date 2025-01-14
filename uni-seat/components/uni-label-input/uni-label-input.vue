<template>
	<view class="row uni-input-view">
		<text class="title">{{labelName}}</text>
		
		<input class="right-input" :disabled="noFix" :maxlength="maxLength" type="digit" v-model="showValue"
			:placeholder="inputPlaceHolder()" placeholder-class="placeholderClass" @input="textDidChange"
			v-if="inputType=='number'" />
		<input class="right-input" :disabled="noFix" :maxlength="maxLength" v-model="showValue"
			:placeholder="inputPlaceHolder()" placeholder-class="placeholderClass" @input="textDidChange" v-else />

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

			maxLength: {
				type: Number,
				default: 2000
			},
			
		},
		data() {
			return {
				showValue: this.value,
				myType: this.inputType
			}
		},
		methods: {
			inputPlaceHolder() {
				return this.placeHolder == null || this.placeHolder.length == 0 ? this.$t('input') : this.placeHolder
			},
			
			textDidChange(e) {
				let value = e.target.value
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
		background-color: #FFF;
		height: 52px;
		padding: 0 20px;
		align-items: center;
		font-size: 16px;
		color: $uni-text-color;

		.title{
			font-weight: 500;
		}

		.right-input {
			color: #5C6473;
			margin-left: 16px;
			height: 100%;
			flex: 1;
			text-align: right;
		}
	}
</style>