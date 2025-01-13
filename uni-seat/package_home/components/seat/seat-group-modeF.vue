<template>
	<view class="col seat-group">
		<view class="row section">
			<SeatLeft></SeatLeft>
		</view>
		<view class="row section">
			<SeatLeft></SeatLeft>
		</view>
	</view>
</template>

<script>
	import SeatLeft from "./seat-position-left.vue"
	import SeatRight from "./seat-position-right.vue"
	export default{
		components:{
			SeatLeft,
			SeatRight,
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