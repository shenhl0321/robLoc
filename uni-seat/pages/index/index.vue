<template>
  <view>
	<uni-app-nav-bar mTitle="语言切换"></uni-app-nav-bar>
    <text>{{ $t('login') }}</text>
    <button @click="changeLanguage('en-US')">英文</button>
    <button @click="changeLanguage('zn-CN')">中文</button>
  </view>
</template>
 
<script>
export default {
  methods: {
    changeLanguage(lang) {
      this.$store.dispatch('changeLanguage', lang);
    }
  }
}
</script>