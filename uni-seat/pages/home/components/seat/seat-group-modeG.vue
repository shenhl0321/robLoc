<template>
	<view class="col seat-group">
		<view class="row section">
			<SeatTop></SeatTop>
			<SeatTop></SeatTop>
			<SeatTop></SeatTop>
			<SeatTop></SeatTop>
		</view>
		<view class="row section">
			<SeatBottom></SeatBottom>
			<SeatBottom></SeatBottom>
			<SeatBottom></SeatBottom>
			<SeatBottom></SeatBottom>
		</view>
	</view>
</template>

<script>
	import SeatTop from './seat-position-top.vue'
	import SeatBottom from './seat-position-bottom.vue'
	export default{
		components:{
			SeatTop,
			SeatBottom
		},
		
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.seat-group{
		.section{
			flex: 1;
		}
	}
</style>