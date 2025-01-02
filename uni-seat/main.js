import App from './App'
import store from './store/store.js'
import i18n from './utils/js/i18n'
//import {showToast} from "./utils/js/common.js"
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
	store,
	i18n,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		store,
		i18n,
		app
	}
}
// #endif