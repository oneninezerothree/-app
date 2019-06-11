import Vue from 'vue';
import Router from 'vue-router';
import login from './views/login.vue';
import register from './components/Register.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'login',
    //   component: login,
    // },
    {
      path: '/Register.vue',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Register.vue'),
    },
    {
      path: '/login.vue',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Login.vue'),
    },

  ],
});
