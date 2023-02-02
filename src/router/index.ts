import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
