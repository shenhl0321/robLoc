

<template>
    <view class="row notice-wrapper">
		<view class="public-view">
			<image class="pub-icon" src="/static/ic_public.png"></image>
		</view>
        <view class="scroll_box"> 
            <swiper class="swiper" circular vertical autoplay 
			display-multiple-items="1" :interval="interval" :duration="duration">
                <swiper-item v-for="(item,index) in noticeList" :key="index">
                    <view class="public-text-view">{{item.notice}}</view>
                </swiper-item>
            </swiper>
        </view>
    </view>
</template>

<script>
    export default{
		props : {
			list : {
				type : Array,
				default(){
					return []
				}
			}
		},
		
        data(){
            return{
                interval:4000,
                duration:2000,
                noticeList:[],
            }
        },
		
		mounted() {
			if(this.list.length > 0){
				this.noticeList = this.list
				if(this.list.length == 1){
					this.noticeList.push(this.list[0])
				}
			}
		}
    }
</script>

<style scoped lang="scss">
	.notice-wrapper {
		width: 100%;
		height: 40px;
		background-color: #FFF;
		align-items: center;
		.public-view{
			display: flex;
			height: 40px;
			align-items: center;
			.pub-icon{
				width: 54px;
				height: 18px;
				margin-left: 10px;
				margin-right: 10px;
			}
		}
	}
	
    .scroll_box{
		flex: 1;
		height: 100%;
		margin-right: 10px;
        .swiper{
            width: 100%;
            height: 100%;
        }
		.public-text-view{
			display: flex;
			height: 100%;
			align-items: center;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			font-size: 14px;
			color: #5C6473;
		}
    }
</style>