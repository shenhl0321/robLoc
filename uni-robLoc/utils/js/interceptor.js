import store from "../../store/store.js"

uni.addInterceptor("navigateTo",{
	invoke(e) {
		if(store.state.hasLogin == true){
			return true
		}else{
			uni.reLaunch({
				url:"/pages/login"
			})
			return false
		}
	},
	success(e) {
		//console.log(e)
	}
})