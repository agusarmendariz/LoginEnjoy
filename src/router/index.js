import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/Login.vue')
  },

  {
    path: '/',
    name: 'dashboard',
    component: () => import('../components/Dashboard.vue')
  },

  ]