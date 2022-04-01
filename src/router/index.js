import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Latest from '../views/Latest.vue'
import Profile from '../views/Profile.vue'
import Friends from '../views/Friends.vue'





const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path: '/latest',
    name: 'latest',
    component: Latest
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/friends',
    name: 'friends',
    component: Friends
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
