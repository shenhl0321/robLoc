<template>
	<view>
		<view class="uni-selector-view" @click="didClickSelectorView">
			<view class="uni-leftview-class">
				<text class="sign-text" v-if="showSign">*</text>
				<text class="left-text">{{labelName}}</text>
			</view>
			<view class="right-selector-value" :class="{active : selectorName != null}" @click="didClickSelectorView">{{selectorName | stringToSafe('请选择')}}</view>
			<image class="right-image" :src="rightImagePath" @click.stop="clearSelectorAction()"></image>
			<view class="bottom-line" v-if="showBottomLine"></view>
		</view>
		
		<view class="popup-hold-view">
			<uni-popup ref="popup" type="bottom">
				<uni-action-sheet
					:dicKey="dicKey"
					:baseValue="selectorCode"
					@closed="popupClosed"
					@callBack="popupCallBack"></uni-action-sheet>
					
			</uni-popup>
		</view>
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
			showBottomLine: {
				type: Boolean,
				default: true
			},
			dicKey:{
				type : String,
			},
			showDefaultValue : {
				type : String,
			}
		},
		data() {
			return {
				selectedItemArray: [{code : 1, value : "选择一"},{code : 2, value : "选择二"}],
				selectorCode: this.value,
				selectorName: null
			}
		},
		
		mounted() {
			// #ifdef MP-WEIXIN
				this.selectorCode = this.value
			// #endif
			if(this.selectorCode != null){
				let that = this
				this.selectorName = this.selectedItemArray.find(function(e){
						return e.code == that.selectorCode
				}).value
				if(this.selectorName == null && this.showDefaultValue != null){
					this.selectorName = this.showDefaultValue
				}
			}
		},
		
		computed:{
			rightImagePath(){
				return this.selectorName == null ? "/static/ic_push.png" : "/static/ic_closed.png"
			}
		},
		
		methods: {
			didClickSelectorView() {
				this.$refs.popup.open()
			},
			
			popupClosed(val){
				this.$refs.popup.close()
			},
			
			clearSelectorAction(){
				if(this.selectorCode != null){
					this.selectorCode = null
					this.$emit('input', this.selectorCode)
				}
				this.selectorName = null
			},
			
			popupCallBack(val){
				this.selectorCode = val
				this.selectorName = this.selectedItemArray.find(function(e){
					return e.code == val
				}).value
				this.$emit('input', this.selectorCode)
				this.$emit('updateInput')
				
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
				color: $uni-text-color-inverse;
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
