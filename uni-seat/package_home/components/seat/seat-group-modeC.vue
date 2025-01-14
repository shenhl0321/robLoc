<template>
	<view class="row seat-group">
		<view class="row section">
			<SeatZone style="height: 120px;"></SeatZone>
		</view>
		<view class="col section">
			<SeatRight :val="list[0]"></SeatRight>
			<SeatRight :val="list[1]"></SeatRight>
		</view>
	</view>
</template>

<script>
	import SeatRight from "./seat-position-right.vue"
	import SeatZone from "./seat-position-zone.vue"
	export default{
		components:{
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
			height: 100%;
		}
	}
</style>