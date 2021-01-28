import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'


Vue.config.productionTip = false

new Vue({
  data() {
    return {
      english: false,
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    }
  },
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
