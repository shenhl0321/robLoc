<template>
	<view class="main-view" style="background-color: #F5F5F5;">
		<view class="col top-view">
			<image class="bg top-bg" src="/static/my_top_bg.png" mode="aspectFill"></image>
			<view class="nav-bar">
				<text class="title">{{$t('mine')}}</text>
			</view>
			<view class="col user">
				<view class="col content">
					<image class="user-header" src="/static/ic_header.png"></image>
					<text class="user-name">吴彦祖</text>
					<text class="mobile">15157157084</text>
					<image class="set" src="/static/my_set.png" @click="pushToSetPage"></image>
				</view>
			</view>
		</view>
		
		<view class="col section-list">
			<view>
				<view class="row my-section" v-for="(item,index) in sectionList" :key="index" @click="didClickSection(item)">
					<view class="row">
						<image class="icon" :src="item.src"></image>
						<text class="name" >{{item.name}}</text>
					</view>
					<image class="small_push" src="/static/ic_push_small.png"></image>
				</view>
			</view>
			
			<button class="exit-btn" @click="exitBtnAction">{{$t('exit')}}</button>
		</view>
	</view>
</template>

<script>
	
	export default {
		components: {

		},
		data() {
			return {
				sectionList : [
					{index : 1, name : this.$t('myReserve'), src : '/static/my_resverse.png'},
					{index : 2, name : this.$t('myMessage'), src : '/static/my_msg.png'},
				]
			}
		},
		
		onShow() {
			uni.setTabBarItem({
			    index: 1,
			    text: this.$t('mine')
			});
		},
		
		onLoad(option) {

		},

		methods: {
			pushToSetPage(){
				uni.navigateTo({
					url: "/pages/mine/pages/mySet"
				})
			},
			
			didClickSection(e){
				if(e.index == 1){
					uni.navigateTo({
						url: '/pages/mine/pages/myResever'
					})
				}else{
					uni.navigateTo({
						url: '/pages/mine/pages/myMessage'
					})
				}
			},
			
			exitBtnAction(){
				uni.reLaunch({
					url: '/pages/login/index'
				})
			}
		}
	}
</script>

<style lang="scss">

	.top-view {
		display: flex;
		position: relative;
		width: 100%;
		/* #ifdef MP-WEIXIN */
		height: calc(192px + 64px + var(--status-bar-height));
		/* #endif */
		/* #ifndef MP-WEIXIN */
		height: calc(192px + 44px + var(--status-bar-height));
		/* #endif */
		.nav-bar{
			display: flex;
			width: 100%;
			z-index: 999;
			justify-content: center;
			/* #ifdef MP-WEIXIN */
			height: calc(64px + var(--status-bar-height));
			/* #endif */
			/* #ifndef MP-WEIXIN */
			height: calc(44px + var(--status-bar-height));
			/* #endif */
			.title{
				margin-top: calc(var(--status-bar-height) + 14px);
			}
		}
		
		.bg{
			position: absolute;
			width: 100%;
			height: 100%;
		}
		
		.user{
			display: flex;
			flex: 1;
			z-index: 999;
			align-items: center;
			justify-content: center;
			padding: 0 14px;
			.content{
				position: relative;
				box-sizing: border-box;
				height: 150px;
				width: 100%;
				background: linear-gradient(to right, #2AACDC, #003E76);
				border-radius: 16px;
				color: #FFF;
				align-items: center;
				.user-header{
					width: 44px;
					height: 44px;
					border-radius: 22px;
					margin-top: 28px;
				}
				.user-name{
					margin-top: 20px;
					font-size: 18px;
					font-weight: 500;
				}
				.mobile{
					margin-top: 6px;
					font-size: 14px;
				}
				
				.set{
					position: absolute;
					width: 18px;
					height: 18px;
					top: 20px;
					right: 20px;
				}
			}
		}
	}
	
	.section-list{
		width: 100%;
		flex: 1;
		justify-content: space-between;
		.my-section{
			width: calc(100% - 40px);
			margin-left: 20px;
			margin-right: 20px;
			margin-bottom: 20px;
			border-radius: 10px;
			background-color: #FFF;
			padding: 20px;
			justify-content: space-between;
			.icon{
				width: 44px;
				height: 44px;
			}
			.name{
				font-size: 16px;
				color: $uni-text-color;
				margin-left: 12px;
			}
			
			.small_push{
				width: 16px;
				height: 16px;
			}
		}
		
		.exit-btn{
			display: flex;
			align-items: center;
			justify-content: center;
			width: calc(100% - 40px);
			margin-left: 20px;
			margin-right: 20px;
			margin-bottom: 20px;
			border-radius: 10px;
			background-color: #FFF !important;
			height: 50px;
			color: #E94F57;
			font-size: 16px;
		}
	}

	


</style>

