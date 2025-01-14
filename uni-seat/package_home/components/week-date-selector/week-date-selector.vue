<template>
  <scroll-view class="scroll-view" scroll-x="true">
  	<view class="date" v-for="(item,index) in dateList"  
	:class="{'active' : selectorDate == item.date}" :key="index" @click="selectorDateAction(item)">
  		<text class="week">{{index == 0 ? $t('today') : item.wk}}</text>
  		<text class="day">{{item.m + '.' + item.d}}</text>
  	</view>
	<view style="display: inline-block; width: 10px;"></view>
  </scroll-view>
</template>
 
<script>
	export default{
		data(){
			return{
				dateList : [],
				selectorDate : ''
			}
		},
		
		mounted() {
			 this.dateHandle()
		},
		
		watch :{
		   selectorDate(val){
			   this.$emit('selectorDate',val)
		   }	
		},
		
		methods:{
			dateHandle(){
				const weekDays = [this.$t('Sunday'),this.$t('Monday'),this.$t('Tuesday'),this.$t('Wednesday'),
				this.$t('Thursday'),this.$t('Friday'),this.$t('Saturday')]
			
				const todayDt = new Date()
				const today_y = todayDt.getUTCFullYear()
				const today_m = ('0' + (todayDt.getUTCMonth() + 1)).slice(-2)
				const today_d = ('0' + todayDt.getUTCDate()).slice(-2)
				const today_wk = weekDays[todayDt.getDay()]
				this.dateList.push({
					y : today_y,
					m : today_m,
					d : today_d,
					wk : today_wk,
					date : today_y + '-' + today_m + '-' + today_d
				})
				var timesTamp = todayDt.valueOf()
				
				for (var i = 1 ; i < 14 ; i ++) {
					timesTamp = timesTamp + 3600 * 24 * 1000
					const date = new Date(timesTamp)
					const year = date.getUTCFullYear()
					const month = ('0' + (date.getUTCMonth() + 1)).slice(-2)
					const day = ('0' + date.getUTCDate()).slice(-2)
					const wk = weekDays[date.getDay()]
	
					this.dateList.push({
						y : year,
						m : month,
						d : day,
						wk : wk,
						date : year + '-' + month + '-' + day
					})
				}
				
				this.selectorDate = this.dateList[0].date
			},
			
			selectorDateAction(e){
				this.selectorDate = e.date
			}
		}
	}
</script>
 
<style lang="scss" scoped>
.scroll-view {
  white-space: nowrap;
  width: 100vw;
  height: 65px;
  white-space: nowrap;
  padding-top: 10px;
  border-bottom:5px solid #F7F7F7;
  .date{
	display: inline-flex;
	flex-direction: column;
  	width: 48px;
  	height: 45px;
  	border-radius: 4px;
  	align-items: center;
  	justify-content: center;
  	color: #14202D;
  	background-color: #F7F7F7;
	margin-left: 10px;
  	.week{
  		font-size: 10px;
  	}
  	.day{
  		font-size: 14px;
		margin-top: 4px;
  	}
	&.active{
		color: #FFF;
		background-color: #0099FF;
	}
  }
}

</style>