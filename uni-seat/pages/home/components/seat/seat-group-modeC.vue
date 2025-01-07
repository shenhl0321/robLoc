<template>
	<view class="row seat-group">
		<view class="row section">
			<SeatZone style="height: 120px;"></SeatZone>
		</view>
		<view class="col section">
			<SeatRight></SeatRight>
			<SeatRight></SeatRight>
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
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.seat-group{
		height: 120px;
		width: 100px;
		.section{
			height: 100%;
		}
	}
</style>