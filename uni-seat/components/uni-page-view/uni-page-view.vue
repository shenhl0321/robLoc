<template>
	<view class="tab-content">
		<tabs :list="tabList" :scroll="scroll" @tabItemClick="itemClick" :current="currentIndex" marright="25px" activeWeight='600' v-if="tabList.length > 1"></tabs>
		<swiper class="content-swiper" :duration="500" :current="currentIndex"  @change="toggle" duration="0">
			<slot></slot>
		</swiper>
		
	</view>
</template>

<script>
	import tabs from './uni-tabs.vue'
	
	export default {
		props:{
			tabList : {
				type : Array,
				default: () => {
				  return []
				}
			},
			
			pushToIndex : {
				type : Number
			},
			
			scroll: {
			  type: Boolean,
			  default: true
			},
		},
		
		
		components: {
			tabs
		},
		
		data() {
			return {
				title: 'Hello',
				currentIndex : this.pushToIndex,
			}
		},
		mounted() {
			
		},
		
		methods: {
			itemClick(item, index) {
				this.currentIndex = index
			},
			
			toggle(e){
				this.currentIndex = e.detail.current
			},
		
		}
	}
</script>

<style>
	.tab-content{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	
	.content-swiper {
		flex: 1;
		position: relative;
		
		.list-view{
			height: 100%;
		}
	}
</style>