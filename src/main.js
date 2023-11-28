import Vue from 'vue'

import App from './App.vue'
import router from './router'
import * as bootstrap from 'bootstrap'
import './assets/main.css'
import './scss/styles.scss'

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
