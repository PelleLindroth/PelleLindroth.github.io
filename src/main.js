import Vue from 'vue'
import App from './App.vue'
import router from './router'

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
  methods: {
    toggleLanguage() {
      this.english = !this.english
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
