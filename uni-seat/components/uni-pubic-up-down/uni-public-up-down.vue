<template>
    <view>
        <view class="scroll_box"> 
            <swiper class="swiper" circular="true" vertical="true" display-multiple-items="1" :autoplay="autoplay" :interval="interval" :duration="duration">
                <swiper-item v-for="(item,index) in list" :key="index">
                    <view class="swiper-item uni-bg-green">{{item}}</view>
                </swiper-item>
            </swiper>
        </view>
    </view>
</template>

<script>
    export default{
        name:'',
        data(){
            return{
                autoplay:true,
                interval:4000,
                duration:2000,
                list:[
                    '请点击发行菜单进行发布',
					'请点击发行菜单进行发布',
                ],
            }
        },
    }
</script>

<style scoped lang="scss">
    .scroll_box{
        background: #FFFFFF;
        margin: 30rpx;
        border-radius: 10rpx;
        .swiper{
            margin-top: 200px;
            height: 40px;
        }
    }
</style>