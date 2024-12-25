<template>
	<view class="pick-view">
		<view class="block-view" @click="closed"></view>
		<view class="col content-view">
			<view class="forhidTopMargin top"></view>
			<view class="col section" v-for="(item,index) in sectionList" :key="index">
				{{item.name}}
				<view class="row cell" @click="didToShowActionSheet(index)" v-if="item.type=='action'">
					<text>{{item.value.length == 0 ? item.placeholder : item.valueName}}</text>
					<image style="width: 16px; height: 16px;" src="../../static/ic_push.png"></image>
				</view>

				<view class="row cell" v-else-if="item.type=='input'">
					<input class="input" :placeholder="item.placeholder" placeholder-class="input"
						v-model="item.value" />
				</view>

				<picker class="uni-picker" mode="date" fields="month" @change="bindDateChange" :data-index="index"
					v-else>
					<view class="row cell">
						<text>{{item.value.length == 0 ? item.placeholder : item.value}}</text>
						<image style="width: 16px; height: 16px;" src="../../static/ic_push.png"></image>
					</view>
				</picker>
			</view>

			<view class="bottom-view">
				<button class="btn certain" @click="certainBtnAction">确定</button>
				<button class="btn rest" @click="resetBtnAction">重置</button>
			</view>
		</view>

		<uni-popup ref="action" type="bottom">
			<uni-action-sheet ref="actionSheet" @callBack="actionRespose"></uni-action-sheet>
		</uni-popup>
		<uni-popup ref="month" type="bottom">
			<uni-datetime-picker></uni-datetime-picker>
		</uni-popup>
	</view>

</template>

<script>
	export default {
		props: {
			searchPage: {
				type: String,
				default: ""
			},
			value: {
				value: Object,
			}
		},

		data() {
			return {
				sectionList: [],
				selectedIndex: 0,
			}
		},

		computed: {
			marketTree() {
				return this.$store.state.marketTree.orgList
			}
		},

		mounted() {
			switch (this.searchPage) {
				case "member":
					this.sectionList = [{
							name: "总部",
							value: "",
							valueName: "",
							placeholder: "请选择总部",
							key: "headId",
							type: "action"
						},
						{
							name: "市场部",
							value: "",
							valueName: "",
							placeholder: "请选择市场部",
							key: "marketId",
							type: "action"
						},
						{
							name: "指标月份",
							value: "",
							placeholder: "请选择指标月份",
							key: "kpiMonth",
							type: "month"
						},
						{
							name: "状态",
							value: "",
							valueName: "",
							placeholder: "请选择状态",
							key: "reviewStatus",
							type: "action"
						}
					]
					break
				case "market":
					this.sectionList = [{
							name: "总部",
							value: "",
							valueName: "",
							placeholder: "请选择总部",
							key: "headId",
							type: "action"
						},
						{
							name: "市场部",
							value: "",
							valueName: "",
							placeholder: "请选择市场部",
							key: "marketId",
							type: "action"
						},
						{
							name: "奖励月份",
							value: "",
							placeholder: "请选择指标月份",
							key: "awardMonth",
							type: "month"
						},
						{
							name: "状态",
							value: "",
							valueName: "",
							placeholder: "请选择状态",
							key: "allocationStatus",
							type: "action"
						}
					]
					break
				case "org":
					this.sectionList = [{
							name: "总部",
							value: "",
							valueName: "",
							placeholder: "请选择总部",
							key: "headId",
							type: "action"
						},
						{
							name: "奖励月份",
							value: "",
							placeholder: "请选择指标月份",
							key: "awardMonth",
							type: "month"
						},
						{
							name: "状态",
							value: "",
							valueName: "",
							placeholder: "请选择状态",
							key: "allocationStatus",
							type: "action"
						}
					]
					break
				case "myaward":
					this.sectionList = [{
							name: "关键词",
							value: "",
							placeholder: "请输入关键词",
							key: "keyword",
							type: "input"
						},
						{
							name: "奖励月份",
							value: "",
							placeholder: "请选择奖励月份",
							key: "awardMonth",
							type: "month"
						},
					]
					break
				case "orgAuditPage":
					this.sectionList = [{
							name: "奖励月份",
							value: "",
							placeholder: "请选择奖励月份",
							key: "awardMonth",
							type: "month"
						},
						{
							name: "审批状态",
							value: "",
							valueName: "",
							placeholder: "请选择审批状态",
							key: "status",
							type: "action"
						},
						{
							name: "总部",
							value: "",
							valueName: "",
							placeholder: "请选择总部",
							key: "headId",
							type: "action"
						},
					]
					break
				case "marketAuditPage":
					this.sectionList = [{
							name: "奖励月份",
							value: "",
							placeholder: "请选择奖励月份",
							key: "awardMonth",
							type: "month"
						},
						{
							name: "审批状态",
							value: "",
							valueName: "",
							placeholder: "请选择审批状态",
							key: "status",
							type: "action"
						},
						{
							name: "总部",
							value: "",
							valueName: "",
							placeholder: "请选择总部",
							key: "headId",
							type: "action"
						},
						{
							name: "市场部",
							value: "",
							valueName: "",
							placeholder: "请选择市场部",
							key: "marketId",
							type: "action"
						},
					]
					break
				case 'marketAuditEndPage':
					this.sectionList = [{
							name: "奖励月份",
							value: "",
							placeholder: "请选择奖励月份",
							key: "awardMonth",
							type: "month"
						},
						{
							name: "总部",
							value: "",
							valueName: "",
							placeholder: "请选择总部",
							key: "headId",
							type: "action"
						},
					]
					break
				case 'shareOrgRecord':
					this.sectionList = [{
							name: "奖励月份",
							value: "",
							placeholder: "请选择奖励月份",
							key: "awardMonth",
							type: "month"
						},
						{
							name: "总部",
							value: "",
							valueName: "",
							placeholder: "请选择总部",
							key: "headId",
							type: "action"
						},
					]
					break
				case 'shareMarketRecord':
					this.sectionList = [{
							name: "奖励月份",
							value: "",
							placeholder: "请选择奖励月份",
							key: "awardMonth",
							type: "month"
						},
						{
							name: "总部",
							value: "",
							valueName: "",
							placeholder: "请选择总部",
							key: "headId",
							type: "action"
						},
						{
							name: "市场部",
							value: "",
							valueName: "",
							placeholder: "请选择市场部",
							key: "marketId",
							type: "action"
						},
					]
					break
				default:
					break
			}
			let that = this
			this.sectionList.forEach(function(val) {
				let key = val.key
				let value = that.value[`${key}`]
				if (value != null && `${value}`.length > 0) {
					val.value = value
					if (val.type == "action") {
						if (val.key == "headId") {
							val.valueName = that.marketTree.find(function(e) {
								return e.id == val.value
							}).name
						} else if (val.key == "marketId") {
							let headModel = that.marketTree.find(function(e) {
								return e.id == that.value['headId']
							})
							val.valueName = headModel.sub.find(function(e) {
								return e.id == val.value
							}).name
						} else if (val.key == "reviewStatus") {
							val.valueName = that.$fields.reviewStatus.find(function(e) {
								return e.id == val.value
							}).name
						} else if (val.key == "allocationStatus") {
							val.valueName = that.$fields.allocationStatus.find(function(e) {
								return e.id == val.value
							}).name
						} else if (val.key == "status") {
							if (that.searchPage == "marketAuditPage") {
								val.valueName = that.$fields.marketStatus.find(function(e) {
									return e.id == val.value
								}).name
							} else {
								val.valueName = that.$fields.headStatus.find(function(e) {
									return e.id == val.value
								}).name
							}

						}
					}
				}
			})

		},

		methods: {
			didToShowActionSheet: function(index) {
				this.selectedIndex = index
				let model = this.sectionList[index]
				let actionSheetSelectedArr = []
				if (model.key == "headId") {
					actionSheetSelectedArr = this.marketTree.map(function(val) {
						return {
							id: val.id,
							name: val.name
						}
					})
				} else if (model.key == "marketId") {
					let marketModel = this.sectionList.find(function(val) {
						return val.key == "headId"
					})
					if (marketModel.value.length == 0) {
						this.$toast("请先选择总部")
						return
					} else {
						let selectedModel = this.marketTree.find(function(val) {
							return val.id == marketModel.value
						})
						actionSheetSelectedArr = selectedModel.sub.map(function(val) {
							return {
								id: val.id,
								name: val.name
							}
						})
					}
				} else if (model.key == "reviewStatus") {
					actionSheetSelectedArr = this.$fields.reviewStatus
				} else if (model.key == "allocationStatus") {
					actionSheetSelectedArr = this.$fields.allocationStatus
				} else if (model.key == "status") {
					if (this.searchPage == "marketAuditPage") {
						actionSheetSelectedArr = this.$fields.marketStatus
					} else {
						actionSheetSelectedArr = this.$fields.headStatus
					}
				}
				this.$refs.action.open()
				this.$nextTick(() => {
					this.$refs.actionSheet.dataArray = actionSheetSelectedArr
				})

			},

			bindDateChange(e) {
				let model = this.sectionList[e.currentTarget.dataset.index]
				model.value = e.detail.value
			},

			actionRespose: function(e) {
				if (e.result == true) {
					let model = this.sectionList[this.selectedIndex]
					if (this.searchPage == 'org' || this.searchPage == 'marketAuditEndPage' || this.searchPage ==
						'orgAuditPage' || this.searchPage == 'shareOrgRecord') {
						//不需要设置市场部
					} else if (model.key == "headId") {
						if (model.value != e.id) {
							let marketModel = this.sectionList.find(function(e) {
								return e.key == "marketId"
							})
							marketModel.value = ""
							marketModel.valueName = ""
						}
					}
					model.value = e.id,
						model.valueName = e.name
				}
				this.$refs.action.close()
			},

			resetBtnAction: function() {
				this.sectionList.forEach(function(e) {
					e.value = '',
						e.valueName = ""
				})
			},

			certainBtnAction: function() {
				var res = {}
				this.sectionList.forEach(function(e) {
					res[`${e.key}`] = e.value
				})

				this.$emit('pickRespose', {
					result: true,
					response: res
				})
			},

			closed: function() {
				this.$emit('pickRespose', {
					result: false,
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pick-view {
		display: flex;
		flex-direction: row;
		width: 100vw;
		height: 100vh;

		.top {
			height: calc(var(--status-bar-height) + 20px);
		}

		.block-view {
			width: 20%;
			height: 100%;
		}

		.content-view {
			position: relative;
			background-color: #FFF;
			width: 80%;
			height: 100%;
			border-top-left-radius: 16px;
			border-bottom-left-radius: 16px;
			padding: 0 16px;
			font-size: 14px;

			.section {
				margin-top: 30px;
				font-weight: bold;

				.cell {
					margin-top: 16px;
					justify-content: space-between;
					background-color: $uni-bg-color;
					height: 40px;
					border-radius: 20px;
					font-weight: normal;
					padding: 0 20px;

					.input {
						flex: 1;
						color: $uni-text-color;
						font-size: 14px;
						line-height: 14px;
					}
				}
			}
		}
	}

	.bottom-view {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 100%;
		display: flex;
		flex-direction: row-reverse;
		height: 56px;
		border-top: 1px solid $uni-line-color;
		align-items: center;
		padding: 0 20px;

		.btn {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 110px;
			height: 40px;
			font-size: 16px;
			margin-left: 10px;
			border-radius: 20px;
		}

		.rest {
			border: 1px solid $uni-border-color;
		}

		.certain {
			background-color: $uni-color-primary !important;
			color: #FFF;
		}
	}
</style>