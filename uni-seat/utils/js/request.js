import Vue from 'vue'

const baseUrl = "http://mrt.lxiwl.vip"
//const baseUrl = "http://sdc.mrt-reinhausen.com"


export const uniConfig = {
	baseUrl: baseUrl,
	setEnv: function(value) {
		this.baseUrl = value + '/api/v1'
	}
}

const header = {
	'Content-Type': 'application/json;charset=UTF-8',
};

const request = (url = '', data = {}, loadingText, type = 'POST') => {
	console.log('接口url:' + url)
	console.log('接口请求参数:' + JSON.stringify(data))
	if(Vue.prototype.$store.state.userInfo != null){
		let token = Vue.prototype.$store.state.userInfo.token
		if(token != null){
			header['token'] = token
		}
	}
	
	if (loadingText != null) {
		uni.showLoading({
			title: loadingText
		})
	}

	return new Promise((resolve, reject) => {
		uni.request({
			method: type,
			url: uniConfig.baseUrl + url,  //'/h5TestApi' + url uniConfig.baseUrl + url
			data: data,
			header: header,
			dataType: "json",
			sslVerify: false,
			success: (res) => {
				if (loadingText != null) {
					uni.hideLoading()
				}
				uni.stopPullDownRefresh()
				if (res.statusCode == 200) {
					let response = res.data
					if (response.code == 1) {
						resolve({
							result: true,
							data: response.data
						})
					} else {
						let subMsg = res.data.msg
						uni.showToast({
							title: subMsg,
							duration: 2000,
							icon: 'none',
						})
						resolve({
							result: false,
							error: subMsg
						})
					}
				} else {
					uni.showToast({
						title: "网络请求错误",
						duration: 2000,
						icon: 'none',
					})
					resolve({
						result: false,
						error: "网络请求错误"
					})
				}
			},
			fail: (error) => {
				uni.showToast({
					title: "网络错误",
					duration: 2000,
					icon: 'none',
				})
				uni.hideLoading()
				uni.stopPullDownRefresh()
				reject(error)
				uni.navigateTo({
					url: '/pages/z-common/uni-networkError'
				})
				resolve({
					result: false,
					error: "网络错误"
				})
			}
		})


	})
}

export default request