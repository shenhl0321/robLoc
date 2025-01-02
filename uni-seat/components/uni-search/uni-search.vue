<template>
	<view class="search-bg">
		<view class="search-view" v-if="focus == false || ownerfocus == false" @click="clickSearchView()">
			<image class="search-img" src="../../static/ic_search.png"></image>
			<text>搜索</text>
		</view>
		
		<view class="search-view focus" v-else>
			<image class="search-img" src="../../static/ic_search.png"></image>
			<input class="search-input" :focus="focus" @blur="blur" :placeholder="placeholder"  v-model="searchValue"
				@input="textDidChange"/>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			ownerfocus : {
				type : Boolean,
				default : false
			},
			
			placeholder : {
				type : String,
				default : '搜索'
			}
		},
		data(){
			return{
				searchValue : null,
				focus : false
			}
		},
		methods:{
			clickSearchView(){
				if(this.ownerfocus){
					this.focus = true
				}
			},
			blur(e){
				if(this.searchValue == null || this.searchValue.length == 0){
					this.focus = false
				}
			},
			textDidChange(e) {
				this.$emit("input",this.searchValue)
			}
		}
		
	}
</script>

<style lang="scss">
	
	.search-bg{
		display: flex;
		background-color: #FFF;
		padding: 7px 16px;
		color: $uni-text-color-placeholder;
		font-size: 14px;
		
		.search-view{
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			height: 36px;
			background-color: #F4F4F6;
			width: 100%;
			border-radius: 18px;
			color: $uni-text-color-inverse;
			.search-img{
				margin-right: 4px;
				width: 14px;
				height: 14px;
			}
			
			.search-input{
				flex: 1; 
				font-size: 14px; 
				line-height: 14px;
				color: $uni-text-color;
			}
			
			&.focus{
				justify-content: flex-start;
				padding: 0 10px;
			}
		}

	}
</style>