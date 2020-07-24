import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel'
import VueCarousel2 from '@chenfengyuan/vue-carousel'

Vue.use(VueCarousel)
Vue.use(VueCarousel2)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
