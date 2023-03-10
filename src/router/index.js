import { createRouter, createWebHistory } from 'vue-router'
import PartyList from '../views/PartyList'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PartyList
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/party/add',
    name: 'partyAdd',
    component: () => import('../views/PartyAdd.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
