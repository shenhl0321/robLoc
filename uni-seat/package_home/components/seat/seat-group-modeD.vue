<template>
	<view class="col seat-group">
		<view class="row section">
			<SeatLeft :val="list[0]"></SeatLeft>
			<SeatRight :val="list[1]"></SeatRight>
		</view>
		<view class="row section">
			<SeatZone style="height: 60px;"></SeatZone>
			<SeatRight :val="list[2]"></SeatRight>
		</view>
	</view>
</template>

<script>
	import SeatLeft from "./seat-position-left.vue"
	import SeatRight from "./seat-position-right.vue"
	import SeatZone from "./seat-position-zone.vue"
	export default{
		components:{
			SeatLeft,
			SeatRight,
			SeatZone
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
		height: 120px;
		.section{
			flex: 1;
		}
	}
</style>