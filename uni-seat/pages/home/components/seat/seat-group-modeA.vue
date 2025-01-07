<template>
	<view class="col seat-group">
		<view class="row section">
			<SeatLeft></SeatLeft>
			<SeatRight></SeatRight>
		</view>
		<view class="row section">
			<SeatLeft></SeatLeft>
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
	export default{
		components:{
			SeatLeft,
			SeatRight
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