<template>
	<view>
		<view class="uni-selector-view" @click="didClickSelectorView">
			<view class="uni-leftview-class">
				<text class="sign-text" v-if="showSign">*</text>
				<text class="left-text">{{labelName}}</text>
			</view>
			<view class="right-selector-value" :class="{active : selectorCodes != null}" @click="didClickSelectorView">{{selectorNames | stringToSafe('请选择')}}</view>
			<image class="right-image" :src="rightImagePath" @click.stop="clearSelectorAction()"></image>
			<view class="bottom-line" v-if="showBottomLine"></view>
		</view>
		
		<view class="popup-hold-view">
			<uni-popup ref="popup" type="bottom">
				<uni-action-sheet-more
					:dicKey="dicKey"
					:baseValue="selectorCodes"
					@callBack="popupCallBack"></uni-action-sheet-more>
					
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

		},
		data() {
			return {
				selectedItemArray: this.$store.state.dictionary[`${this.dicKey}`],
				selectorCodes : this.value,
			}
		},
		
		mounted() {
			// #ifdef MP-WEIXIN
				this.selectorCodes = this.value
			// #endif
		},
		
		computed:{
			selectorNames(){
				if(this.selectorCodes != null){
					let codeArr = this.selectorCodes.split(',')
					let filterArray = this.selectedItemArray.filter(function(e){
						return codeArr.includes(e.code.toString())
					})
					return filterArray.map(function(e){
						return e.value
					}).join(',')
				}else{
					return null
				}
			},
			
			rightImagePath(){
				return this.selectorCodes == null ? "/static/ic_enter.png" : "/static/ic_delete.png"
			}
		},
		
		methods: {
			didClickSelectorView() {
				this.$refs.popup.open()
			},
			
			clearSelectorAction(){
				this.selectorCodes = null
				this.$emit('input', this.selectorCodes)
			},
			
			popupCallBack(val){
				if(val.result == true){
					this.selectorCodes = val.value
					this.$emit('input', this.selectorCodes)
					this.$emit('updateInput')
				}
				
				this.$refs.popup.close()
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
			font-weight: bold;
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
