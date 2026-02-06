import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/print-frontend',
      name: 'print-frontend',
      component: () => import('@/views/FrontendResume.vue')
    },
    {
      path: '/print-backend',
      name: 'print-backend',
      component: () => import('@/views/BackendResume.vue')
    }
  ]
})

export default router
