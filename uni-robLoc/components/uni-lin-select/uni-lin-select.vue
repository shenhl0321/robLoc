<template>
	<view>
		<!--  兼容vue2-->
		<view class="lin-fixed" v-show="showComboxSelect" @click="gclick"></view>
		<view class="lin-combox">
			<input ref="uni-easyinput" :placeholder="placeholder" type="text" @input="oninput"
				:value="checkValue" />
			<view class="lin-combox-select" v-show="showComboxSelect">
				<view class="lin-popper__arrow"></view>
				<scroll-view scroll-y="true" :style="'max-height:'+ maxHeight+ 'px;'">
					<view v-if="loading" class="fedback-popper_loading">{{loadingText}}</view>
					<template v-else>
						<view v-if="!list.length" class="fedback-popper_nodata">暂无数据</view>
						<view v-else class="items" v-for="item, key in list" :key="key" :id="key"
							@click="comboxCheckHandel(item)">
							{{item[valueKey]}}
						</view>
					</template>
				</scroll-view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		emits: ['update:modelValue', 'input', 'confirm'],
		props: {
			loading: {
				type: Boolean,
				default: false
			},
			maxHeight: {
				type: String || Number,
				default: 125
			},
			valueKey: {
				type: String,
				default: 'value'
			},
			placeholder: {
				type: String,
				default: '请输入'
			},
			loadingText: {
				type: String,
				default: '加载中'
			},
			modelValue: [Number, String],
			value: [Number, String],
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				showComboxSelect: false,
				checkValue: ''
			}
		},

		created() {
			this.checkValue = this.modelValue || this.value
		},

		mounted() {
			if (!this.$refs['uni-easyinput']) {
				console.error('请先导入uni-easyinput插件')
			}
		},

		watch: {

			modelValue(val) {
				console.log('watch----', val)
				this.$nextTick(() => {
					this.$refs['uni-easyinput'].val = val
				})
			},

			checkValue(val) {
				// this.$emit('update:modelValue', val)
			},

			list: {
				handler() {

				}
			}
		},
		methods: {

			gclick(e) {
				this.showComboxSelect = false
			},

			comboxCheckHandel(item) {
				this.checkValue = ''
				this.checkValue = item[this.valueKey]
				this.showComboxSelect = false
				// this.$emit('update:modelValue', item[this.valueKey])
				this.$emit('input', item[this.valueKey])
				this.$refs['uni-easyinput'].val = item[this.valueKey]
				this.$emit('confirm', item[this.valueKey])
			},

			oninput(val) {
				this.$emit('update:modelValue', val);
				this.$emit('input', val)

				if (!val) {
					this.showComboxSelect = false
					return
				}
				this.showComboxSelect = true
			}
		}
	}
</script>
<style lang="less">
	.lin-fixed {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 1;
	}

	.lin-combox {
		position: relative;

		.lin-combox-select {
			position: absolute;
			top: 45px;
			left: 0;
			right: 0;
			background-color: #fff;
			z-index: 2;
			border-radius: 3px;
			padding: 3px 0;
			z-index: 8;
			background-color: #fff;
			border: 1px solid #ebeef5;
			border-radius: 6px;
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);

			.fedback-popper_nodata {
				font-size: 13px;
				padding: 5px;
				color: #5d5959;
				text-align: center;
			}

			.lin-popper__arrow {
				position: absolute;
				top: -13px;
				left: 32px;
				z-index: 3;
				content: '';
				width: 0;
				height: 0;
				display: block;
				border-color: transparent;
				border-style: solid;
				border-width: 6px;
				border-bottom-color: #ebeef5;

				&::before {
					content: '';
					position: absolute;
					display: block;
					width: 0;
					height: 0;
					border-color: transparent;
					border-style: solid;
					border-width: 6px;
					top: 1px;
					margin-left: -6px;
					border-top-width: 0;
					border-bottom-color: #fff;
				}
			}

			.items {
				height: 35px;
				line-height: 35px;
				padding: 0 10px;
				font-size: 15px;
			}

			.fedback-popper_loading {
				text-align: center;
				font-size: 13px;
				padding: 5px;
				color: #5d5959;
			}
		}

	}
</style>