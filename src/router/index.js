import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SocialDistancing from '../views/SocialDistancing.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/social-distancing',
    name: 'SocialDistancing',
    component: SocialDistancing
  },
  {
    path: '/sd-1/:id',
    name: 'SD1Page',
    component: () => import(/* webpackChunkName: "SD1Page" */ "../views/SD1Page.vue"),
  },
  {
    path: '/sd-2/:id',
    name: 'SD2Page',
    component: () => import(/* webpackChunkName: "SD2Page" */ "../views/SD2Page.vue"),
  },
  {
    path: '/sd-3/:id',
    name: 'SD3Page',
    component: () => import(/* webpackChunkName: "SD3Page" */ "../views/SD3Page.vue"),
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
