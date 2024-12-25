<template>
	<view class="uni-selector-view" @click="didClickSelectorView">
		<view class="uni-leftview-class">
			<text class="sign-text" v-if="showSign">*</text>
			<text class="left-text">{{labelName}}</text>
		</view>
		<view class="right-selector-value" :class="{active : (value != null && value.length > 0)}">{{value || placeHolder}}</view>
		<image class="right-image" src="../../static/ic_push_black.png"></image>
		<view class="bottom-line" v-if="showBottomLine"></view>
	</view>

</template>

<script>
	export default {
		props: {
			labelName:{
				type: String,
				default : '这是个选择标题'
			},
			value: {
				type: undefined,
			},
			
			showSign:{
				type: Boolean,
				default: false
			},
			
			placeHolder : {
				type : String,
				default : '请选择'
			},
			
			showBottomLine: {
				type: Boolean,
				default: true
			},

		},
		data() {
			return {
				
			}
		},
		
		methods: {
			didClickSelectorView() {
				this.$emit("didTapToPush")
			},
		},
	}
</script>

<style lang="scss">
	.uni-selector-view {
		display: flex;
		position: relative;
		flex-direction: row;
		background-color: #FFF;
		min-height: 60px;
		padding: 0 16px;
		justify-content: space-between;
		align-items: center;
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
		
		.right-selector-value{
			display: flex;
			flex-direction: row-reverse;
			flex: 1;
			color: $uni-text-color-placeholder;
			margin-right: 4px;
			margin-left: 12px;
			&.active{
				color: $uni-text-color;
			}
		}

		.right-image{
			width: 16px;
			height: 16px;
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
