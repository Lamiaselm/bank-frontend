import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientOnboarding from "@/components/ClientOnboarding.vue";

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
      path: "/onboarding",
      name: "ClientOnboarding",
      component: ClientOnboarding
    }
  ]
})

export default router
