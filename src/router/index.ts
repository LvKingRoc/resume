import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
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
