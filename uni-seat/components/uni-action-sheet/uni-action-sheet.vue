<template>
	<view class="action-sheet">
		<view class="content-view">
			<view class="top-view">
				<view class="top-title-cell">{{mTitle}}</view>
				<scroll-view class="list-view list" scroll-y @touchmove.stop>
					<view class="pop-cell" v-for="(item,index) in list" :key="index"
						@click="didClickItemWithIndex(item)">
						{{item.name}}
					</view>
				</scroll-view>
			</view>
			<view class="pop-cell bottom-cancel-view" @click="didClickCancelAction()">{{$t('cancel')}}</view>
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

			list: {
				type: Array,
				default: () => {
					return []
				}
			}
		},

		data() {
			return {
				selectorCode: this.baseValue,
			}
		},

		methods: {
			didClickItemWithIndex(e) {
				console.log(e)
				this.$emit('callBack', {
					result: true,
					id : e.id,
					name : e.name
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
			width: 100%;
			color: $uni-text-color;
			font-size: 16px;
			background-color: #F6F6F6;
			border-top-left-radius: 16px;
			border-top-right-radius: 16px;
			.top-view {
				display: flex;
				flex-direction: column;
				background-color: #FFF;
				border-radius: 16px;
			}

			.list-view {
				max-height: 305px;
				overflow: hidden;
				background-color: #FFF;
			}

			.top-title-cell {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 60px;
				color: #959AA0;
				font-size: 14px;
			}
			
			.pop-cell {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 60px;
				border-top: 1px solid #F6F6F6;

				&.active {
					color: $uni-color-primary;
				}

				&.bottom-cancel-view {
					margin-top: 10px;
					background-color: #FFF;
				}
			}
		}
	}
</style>