import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueScrollTo from 'vue-scrollto'
import VueMq from 'vue-mq'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    sm: 1000,
    lg: Infinity
  },
  defaultBreakpoint: 'lg' // customize this for SSR
})
Vue.use(VueScrollTo)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 3000,
  easing: 'ease-in-out',
  offset: 200,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Portfolio.vue')
  },
  {
    path: '/wiki',
    name: 'Wiki',
    component: () => import(/* webpackChunkName: "about" */ '../views/Wiki.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import(/* webpackChunkName: "about" */ '../views/Resume.vue')
  },
  {
    path: '/resume2',
    name: 'Resume2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Resume2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
