<template>
	<view class="col seat-group">
		<view class="row section">
			<SeatTop :val="list[0]"></SeatTop>
			<SeatTop :val="list[2]"></SeatTop>
			<SeatTop :val="list[4]"></SeatTop>
			<SeatTop :val="list[6]"></SeatTop>
		</view>
		<view class="row section">
			<SeatBottom :val="list[1]"></SeatBottom>
			<SeatBottom :val="list[3]"></SeatBottom>
			<SeatBottom :val="list[5]"></SeatBottom>
			<SeatBottom :val="list[7]"></SeatBottom>
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
		
		props : {
			list : Array,
			default(){
				return[]
			}
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