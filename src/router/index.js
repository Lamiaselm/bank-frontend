import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import BankView from '../views/BankView.vue'
// import ClientView from '../views/ClientView.vue'
import MainLayout from '../views/MainLayout.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bank',
      name: 'bank',
      component: MainLayout
    },
  ]
})

export default router
