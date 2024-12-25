<template name='sunui-grand'>
	<view>
		<view v-show="isHide">
			<view class="sunui-grand-hide-bg">
				<view id="showContent" class="sunui-grand-summary" :style="'-webkit-line-clamp:'+clamp+';'">{{ content }}</view>
				<view class="sunui-grand-show-btn" :style="'top:'+(clamp-1)+'rem;height:'+(clamp/2)+'rem;'" v-show="clamp>=4">
					<view @tap="show" :style="{color:color}">
						{{expandText}}
					</view>
				</view>
			</view>
		</view>
		<view v-show="!isHide">
			<view class="sunui-grand-show-bg">
				<view id="showContent">
					{{ content }}
				</view>
				<view class="sunui-grand-hide-btn" v-show="shinkText!=''">
					<view @tap="hide" :style="{color:color}">
						{{shinkText=='true' || shinkText==true?'':shinkText}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _self;
	export default {
		data() {
			return {
				isHide: true
			};
		},
		name: 'sunui-grand',
		props: {
			clamp: {
				type: [Number, String],
				default: `4`
			},
			color: {
				type: String,
				default: `#01C6AC`
			},
			content: {
				type: [String, Object],
				default: ``
			},
			expandText: {
				type: String,
				default: "展开"
			},
			shinkText: {
				type: String,
				default: "收起"
			}
		},
		created() {
			_self = this;
		},
		
		methods: {
			show() {
				let _this = this;
				_this.isHide = false;
			},
			hide() {
				let _this = this;
				_this.isHide = true;
			}
		}
	}
</script>

<style>
	.sunui-grand-hide-bg {
		position: relative;
		line-height: 18px;
	}

	.sunui-grand-show-bg {
		position: relative;
		line-height: 18px;
		
	}

	.sunui-grand-summary {
		overflow: hidden;
		text-overflow: clip;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.sunui-grand-hide-btn,.sunui-grand-show-btn {
		text-align: right;
	}
</style>
