<template>
	<view class="col seat-group">
		<view class="row section">
			<SeatLeft :val="list[0]"></SeatLeft>
			<SeatRight :val="list[3]"></SeatRight>
		</view>
		<view class="row section">
			<SeatLeft :val="list[1]"></SeatLeft>
			<SeatRight :val="list[4]"></SeatRight>
		</view>
		<view class="row section">
			<SeatLeft :val="list[2]"></SeatLeft>
			<SeatRight :val="list[5]"></SeatRight>
		</view>
	</view>
</template>

<script>
	import SeatLeft from "./seat-position-left.vue"
	import SeatRight from "./seat-position-right.vue"
	export default{
		components:{
			SeatLeft,
			SeatRight
		},
		
		props : {
			list : {
				type : Array,
				default(){
					return[]
				}
			}
		},
		
		data(){
			return{
				
			}
		},
		
		methods :{
	
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