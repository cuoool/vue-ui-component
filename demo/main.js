import Vue from 'vue'
import VueUI from '../src'
import App from './App.vue'

Vue.use(VueUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
