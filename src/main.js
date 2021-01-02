import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      english: false,
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
