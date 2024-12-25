<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			
			uni.reLaunch({
				url: '/pages/home/index',
				success: () => {
					//plus.navigator.closeSplashscreen()
				}
			})
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
	@import url("utils/css/common.css");
</style>
