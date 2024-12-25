// i18n.js
import Vue from 'vue';
import VueI18n from 'vue-i18n';
 
Vue.use(VueI18n);
 
const messages = {
  'en-US': {
    login: 'login'
  },
  'zn-CN': {
    login: '登录'
  }
};
 
const i18n = new VueI18n({
  locale: 'zn-CN', // set default locale
  messages, // set locale messages
});
 
export default i18n;