<template>
	<view class="uni-textarea-view">
		<view class="uni-leftview-class">
			<text class="sign-text" v-if="showSign">*</text>
			<text class="left-text">{{labelName}}</text>
		</view>
		<textarea class="bottom-textarea" :maxlength="maxLength" :placeholder="textareaPlaceHolder()"
			v-model="showValue" @input="textDidChange" placeholder-style="line-height: 16px; height: 120px" placeholder-class="placeholderClass" auto-height/>
		<view class="bottom-line" v-if="showBottomLine"></view>
	</view>
</template>

<script>
	export default {
		props: {
			labelName:{
				type: String,
				default : '这是个标题'
			},
			value: {
				type: String,
			},
			placeHolder: {
				type: String,
			},
			maxLength: {
				type: Number,
				default: -1
			},
			showSign:{
				type: Boolean,
				default: false
			},
			showBottomLine: {
				type: Boolean,
				default: true
			}

		},
		data() {
			return {
				showValue: this.value,
				myType: this.inputType
			}
		},
		
		mounted() {
			this.showValue = this.value
		},
		
		methods: {
			textareaPlaceHolder(){
				return this.placeHolder == null || this.placeHolder.length == 0 ? "请输入" : this.placeHolder
			},
			
			textDidChange(e) {
				this.$emit('input', e.detail.value)
			}
		}
	}
</script>

<style lang="scss">
	.uni-textarea-view {
		position: relative;
		display: flex;
		flex-direction: column;
		background-color: #FFF;
		min-height: 120px;
		padding: 16px;
		justify-content: space-between;
		font-size: 16px;
		color: $uni-text-color;
		
		.uni-leftview-class{
			display: flex;
			.sign-text{
				font-size: 16px;
				color: #FF3C32;
				font-weight: bold;
			}
		}

		.bottom-textarea {
			color: $uni-text-color;
			height: 100%;
			width: 100%;
			flex: 1;
			margin-top: 12px;
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
