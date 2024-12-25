<template>
	<view class="uni-date-view">
		<view class="uni-leftview-class">
			<text class="sign-text" v-if="showSign">*</text>
			<text class="left-text">{{labelName}}</text>
			
		</view>
		<picker class="uni-picker" mode="date" :start="startDate" :end="endDate" :value="date" :fields="dateFields"
			@change="bindDateChange">
			<view class="right-date" :class="{active : date.length > 0}">{{date | stringToSafe(placeHolder)}}</view>
		</picker>
		<image class="right-image" src="../../static/ic_push.png" @click.stop="clearSelectorAction()"></image>
		<view class="bottom-line" v-if="showBottomLine"></view>
	</view>
</template>

<script>
	export default {
		props: {
			labelName: {
				type: String,
				default: '这是个日期标题'
			},
			value: {
				type: String, 
				default : ''
			},
			placeHolder:{
				type : String,
				default: "请选择"
			},
			showSign: {
				type: Boolean,
				default: false
			},
			dateFields: {
				type: String,
				default: 'day'
			},
			showBottomLine: {
				type: Boolean,
				default: true
			},
			startDate:{
				type : String,
			},
			endDate : {
				type : String,
			}

		},
		data() {
			return {
				date: this.value,
			}
		},

		mounted() {
			// #ifdef MP-WEIXIN
			this.date = this.value
			// #endif
		},
		

		methods: {
			bindDateChange(e) {
				this.date = e.detail.value
				this.$emit("input", this.date)
			},
			
			clearSelectorAction(){
				this.date = null
				this.$emit("input", this.date)
			}
		}
	}
</script>

<style lang="scss">
	.uni-date-view {
		position: relative;
		display: flex;
		flex-direction: row;
		background-color: #FFF;
		height: 60px;
		padding: 0 16px;
		justify-content: space-between;
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

		.uni-picker {
			display: flex;
			flex-direction: row-reverse;
			flex: 1;
			
			.right-date {
				margin-right: 4px;
				color: $uni-text-color-placeholder;
				&.active {
					color: $uni-text-color;
				}
			}
		}

		.right-image {
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