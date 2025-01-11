<template>
	<view class="row seat-left">
		<view class="row left">
			
		</view>
		<view class="background-lines">
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},

	}

</script>

<style lang="scss" scoped>
	.seat-left{
		height: 100%;
		.left{
			width: 28px;
		}
		
		.background-lines {
			width: 26px;
			height: 100%;
			border-radius: 3px;
			border: 1px solid #DADEE6;
			background:linear-gradient(45deg, #FFF 25%, #F2F4F7 0,#F2F4F7 50%,#FFF 0%,#FFF 75%,#F2F4F7 0);
			background-size:8px 8px;
		}
		 
		
	}


</style>