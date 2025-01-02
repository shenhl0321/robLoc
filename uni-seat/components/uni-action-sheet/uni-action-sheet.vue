<template>
	<view class="action-sheet">
		<view class="content-view">
			<view class="top-view">
				<view class="top-title-cell">{{mTitle}}</view>
				<scroll-view class="list-view" scroll-y @touchmove.stop>
					<view class="pop-cell" v-for="(item,index) in dataArray" :key="index"
						@click="didClickItemWithIndex(index)">
						{{item.name}}
					</view>
				</scroll-view>
			</view>
			<view class="pop-cell bottom-cancel-view" @click="didClickCancelAction()">取消</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			mTitle: {
				type: String,
				default: '请选择'
			},

			baseValue: {
				type: undefined,
			}
		},

		data() {
			return {
				selectorCode: this.baseValue,
				dataArray: [{
					id: 1,
					name: "选项一"
				}, {
					id: 1,
					name: "选项二"
				}],
			}
		},

		methods: {
			didClickItemWithIndex(index) {
				let item = this.dataArray[index]
				this.selectorCode = item.code
				this.$emit('callBack', {
					result: true,
					id : item.id,
					name : item.name
				})
			},

			didClickCancelAction() {
				this.$emit('callBack', {
					result: false
				})
			},
		}
	}
</script>

<style lang="scss">
	/deep/.uni-scroll-view::-webkit-scrollbar {
		display: none
	}

	.action-sheet {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: center;

		.content-view {
			width: calc(100% - 20px);
			color: $uni-text-color;
			font-size: 16px;

			.top-view {
				display: flex;
				flex-direction: column;
				background-color: #FFF;
				border-radius: 16px;
			}

			.list-view {
				max-height: 305px;
				overflow: hidden;
			}

			.top-title-cell {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 60px;
				color: $uni-text-color-inverse;
				font-size: 14px;
			}

			.pop-cell {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 60px;
				border-top: 1px solid $uni-line-color;

				&.active {
					color: $uni-color-primary;
				}

				&.bottom-cancel-view {
					margin: 10px 0;
					border-radius: 16px;
					background-color: #FFF;
				}
			}
		}
	}
</style>