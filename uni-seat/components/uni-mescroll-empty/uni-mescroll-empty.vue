
<template>
	<view class="mescroll-empty">
		<view style="display: flex;"> <image class="empty-icon" style="width: 120px; height: 104px;" src="../../static/ic_no_data.png" mode="aspectFit" /> </view>
		<text style="color: #A0A4AB; font-size: 16px; margin-top: 20px;">{{infoText}}</text>
		<view class="empty-btn" @click="emptyClick" v-if="showNewAdd"> 添加 </view>
	</view>
</template>

<script>

export default {
	props: {
		iconType : {
			type : String,
			default : 'factor'
		},
		
		showNewAdd: {
			type: Boolean,
			default: false
		},
		
		infoText : {
			type : String,
			default : '暂无数据'
		}
	},
    
	computed:{

	},

	methods: {
		emptyClick() {
			this.$emit('emptyclick');
		}
	}
};
</script>

<style lang="scss">
/* 无任何数据的空布局 */
.mescroll-empty {
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	align-self: center;
	height: 100%;
	width: 100%;

	.empty-btn{
		display: flex;
		margin-top: 20px;
		width: 90px;
		height: 34px;
		justify-content: center;
		align-items: center;
		color: $uni-color-primary;
		border: 1px solid $uni-color-primary;
		border-radius: 4px;
	}
}


</style>
