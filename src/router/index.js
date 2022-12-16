import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue'),
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
    path: '/mission1',
    name: 'Mission1',
    component: () => import('../views/Mission1.vue'),
  },
  {
    path: '/questions',
    name: 'Questions',
    component: () => import('../views/Questions.vue'),
  },
  {
    path: '/correct',
    name: 'Correct',
    component: () => import('../views/Correct.vue'),
  },
  {
    path: '/wrong',
    name: 'Wrong',
    component: () => import('../views/Wrong.vue'),
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
