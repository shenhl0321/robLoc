import Vue from 'vue'
import Vuex from 'vuex'
import i18n from '../utils/js/i18n';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    language: 'es' // 默认语言
  },
  mutations: {
    setLanguage(state, language) {
      state.language = language;
	  i18n.locale = language
    }
  },
  actions: {
    changeLanguage({ commit }, language) {
      commit('setLanguage', language);
    }
  }
});

export default store
