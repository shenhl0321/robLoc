<template>
	<view class="col seat-group">
		<view class="row section">
			<SeatLeft></SeatLeft>
			<SeatRight></SeatRight>
		</view>
		<view class="row section">
			<SeatZone style="height: 60px;"></SeatZone>
			<SeatRight></SeatRight>
		</view>
		<view class="row section">
			<SeatLeft></SeatLeft>
			<SeatRight></SeatRight>
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
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.seat-group{
		height: 180px;
		.section{
			flex: 1;
		}
	}
</style>