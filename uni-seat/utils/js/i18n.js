// i18n.js
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
	'zn-CN': {
		login: '登录'
	},
	'en-US': {
		login: 'login'
	},
};

const i18n = new VueI18n({
	locale: 'zn-CN', // set default locale
	messages, // set locale messages
});

export default i18n;