<template>
	<view class="action-content">
		<view class="row pop-top">
			<image class="closed-image" src="../../static/ic_closed.png" @click="closed()"></image>
			<text>{{mTitle}}</text>
		</view>
		<textarea class="input-textarea" :maxlength="200" v-model="inputText" :placeholder="placeHolder" placeholder-class="placeholderClass" auto-height>
			
		</textarea>
		<button class="bottom-btn" @click="bottomBtnAction">{{bottomName}}</button>
	</view>
</template>

<script>
	export default{
		
		props : {
			mTitle : {
				type : String,
				default : "标题"
			},
			placeHolder : {
				type : String,
				default : "请输入"
			},
			bottomName : {
				type : String,
				default : '确定'
			},
			toastTxt : {
				type : String,
				default : "输入不能为空"
			},
			require : {
				type : Boolean,
				default : true
			}
		},
		
		data(){
			return{
				inputText : ""
			}
		},
		
		methods : {
			closed : function(){
				this.$emit('callBack',{result : false})
			},
			
			bottomBtnAction : function(){
				if(this.require == true && this.inputText.length == 0){
					this.$toast(this.toastTxt)
				}else{
					this.$emit('callBack',{result : true, res : this.inputText})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.action-content{
		display: flex;
		flex-direction: column;
		background-color: #FFF;
		height: 65vh;
		border-top-left-radius: 16px;
		border-top-right-radius: 16px;
		.pop-top{
			position: relative;
			padding: 20px;
			font-weight: bold;
			font-size: 16px;
			justify-content: center;
			.closed-image{
				position: absolute;
				width: 12px; 
				height: 12px;
				left: 20px;
			}
		}
		
		.input-textarea{
			flex: 1;
			color: $uni-text-color;
			padding: 12px;
			width: 100%;
			font-size: 16px;
			line-height: 16px;
		}
		
		.bottom-btn{
			display: flex;
			align-items: center;
			justify-content: center;
			color: #FFF;
			background-color: $uni-color-primary !important; 
			height: 46px;
			border-radius: 23px;
			margin: 20px 20px;
		
		}
	}
</style>