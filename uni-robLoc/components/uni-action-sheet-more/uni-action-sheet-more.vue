<template>
	<view class="action-sheet">
		<view class="content-view">
			<view class="top-view">
				<view class="top-title-cell">{{mTitle}}</view>
				<scroll-view class="list-view" scroll-y @touchmove.stop>
					<view class="pop-cell" v-for="(item,index) in dataArray" 
						:key="index"
						:class="{active: selectorCodes.includes(item.code)}"
						@click="didClickItemWithIndex(index)">
						<text>{{item.value}}</text>
						<image class="selector-image" :src="selectedImagePath" v-if="selectorCodes.includes(item.code)"></image>
					</view>
				</scroll-view>
			</view>
			
			<view class="bottom-view">
				<view class="btn" @click="didClickCancelAction()">取消</view>
				<view class="btn active" @click="didClickCertainAction()">确定</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import {showToast} from '../../common/js/util.js'
	export default{
		props:{
			mTitle : {
				type : String,
				default : '请选择'
			},
			
			dicKey : {
				type : String,
			},
			
			baseValue : {
				type : String,
			}
		},
		
		data(){
			return{
				dataArray : this.$store.state.dictionary[`${this.dicKey}`],
				selectorCodes : []
			}
		},
		
		mounted() {
			if(this.baseValue == null || this.baseValue.length == 0){
				this.selectorCodes = []
			}else{
				this.selectorCodes = this.baseValue.split(',')
				this.selectorCodes = this.selectorCodes.map(function(e){
					return parseInt(e)
				})
			}
		},
		
		computed:{
			selectedImagePath(){
				const currentPages = getCurrentPages()
				const currentPageRoute = currentPages[currentPages.length - 1].route
				if(currentPageRoute.indexOf('pages/pawn') != -1){
					return '/static/ic_pw_choice_gou.png'
				}else{
					return '/static/ic_choice_gou.png'
				}
				
			}
		},
		
		methods:{
			didClickItemWithIndex(index){
				let item = this.dataArray[index]
				if(this.selectorCodes.includes(item.code)){
					this.selectorCodes = this.selectorCodes.filter(function(e){
						return e != item.code
					})
				}else{
					this.selectorCodes.push(item.code)
				}
			},
			
			didClickCertainAction(){
				if(this.selectorCodes.length == 0){
					showToast('请选择后再确定')
				}else{
					this.$emit('callBack', {
						result : true,
						value : this.selectorCodes.join(',')
					})
				}
			},
			
			didClickCancelAction(){
				this.$emit('callBack', {
					result : false,
				})
			},
		}
	}
</script>

<style lang="scss">
	/deep/.uni-scroll-view::-webkit-scrollbar {
		display: none
	}
	
	.action-sheet{
		width: 100%;
		height: auto;
		display: flex;
		justify-content: center;
		.content-view{
			width: calc(100% - 20px);
			color: $uni-text-color;
			font-size: 16px;
			.top-view{
				display: flex;
				flex-direction: column;
				background-color: #FFF;
				border-radius: 12px;
			}
			.list-view{
				max-height: 305px;
				overflow: hidden;
			}
			.top-title-cell{
				display: flex;
				align-items: center;
				justify-content: center;
				height: 60px;
				color: $uni-text-color-inverse;
				font-size: 14px;
			}
			
			.pop-cell{
				display: flex;
				position: relative;
				align-items: center;
				justify-content: center;
				height: 60px;
				border-top: 1px solid $uni-line-color;
				&.active{
					color: $uni-color-primary;
				}
				.selector-image{
					position: absolute;
					width: 18px;
					height: 18px;
					right: 20px;
				}
			}
			
			.bottom-view{
				display: flex;
				flex-direction: row;
				margin: 10px 0;
				.btn{
					display: flex;
					align-items: center;
					justify-content: center;
					height: 60px;
					background-color: #FFF;
					flex: 1;
					border-radius: 12px;
					&.active{
						margin-left: 10px;
						color: $uni-color-primary;
					}
				}
			}
		}
	}
</style>