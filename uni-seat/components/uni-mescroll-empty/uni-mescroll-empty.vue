<template>
	<view class="mescroll-empty">
		<view class="col content">
			<view style="display: flex;">
				<image class="empty-icon" src="../../static/ic_no_data.png"
					mode="aspectFit" />
			</view>
			<text style="color: #A8ABB2; font-size: 14px;">{{$t('noData')}}</text>
			<!-- <view class="empty-btn" @click="emptyClick" v-if="showNewAdd"> 添加 </view> -->
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			iconType: {
				type: String,
				default: 'factor'
			},

			showNewAdd: {
				type: Boolean,
				default: false
			},

		},

		computed: {

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
		.content{
			align-items: center;
			margin-bottom: 60px;
			.empty-icon{
				width: 140px; 
				height: 140px;
			}
			.empty-btn {
				display: flex;
				width: 90px;
				height: 34px;
				justify-content: center;
				align-items: center;
				color: $uni-color-primary;
				border: 1px solid $uni-color-primary;
				border-radius: 4px;
			}
		}
		
	}
</style>