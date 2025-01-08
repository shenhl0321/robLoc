<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			const userInfo = uni.getStorageSync('userInfo')
			if(userInfo.token != null){
				this.$store.state.userInfo = userInfo
				uni.reLaunch({
					url: '/pages/home/index',
				})
			}
			
						
			uni.setTabBarItem({
			    index: 0,
			    text: this.$t('homePage')
			});
			
			uni.setTabBarItem({
			    index: 1,
			    text: this.$t('mine')
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/*每个页面公共css */
	@import './utils/css/common.css';
</style>
