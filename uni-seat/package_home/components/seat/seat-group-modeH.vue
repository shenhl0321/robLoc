<template>
	<view class="row seat-group">
		<view class="row section">
			<SeatLeft :val="list[0]"></SeatLeft>
			<SeatRight :val="list[1]"></SeatRight>
		</view>
		<view class="row section" style="margin-left: 20px;">
			<SeatLeft :val="list[2]"></SeatLeft>
			<SeatRight :val="list[3]"></SeatRight>
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