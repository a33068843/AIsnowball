import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import('../views/Success.vue'),
  },
  {
    path: '/mission',
    name: 'Mission',
    component: () => import('../views/Mission.vue'),
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('../views/Video.vue'),
  },
  {
    path: '/pass',
    name: 'Pass',
    component: () => import('../views/Pass.vue'),
  },
  {
    path: '/exchange',
    name: 'Exchange',
    component: () => import('../views/Exchange.vue'),
  },
  {
    path: '/mission2',
    name: 'Mission2',
    component: () => import('../views/Mission2.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
