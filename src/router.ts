import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/Dashboard/index.vue'),
      children: [{
        path: '',
        name: 'dashboard',
        component: () => import('@/views/Dashboard/Overview.vue')
      }, {
        path: 'new/',
        component: () => import('@/views/Dashboard/Create/index.vue'),
        props: (route) => ({
          beginner: route.params.beginner === 'true'
        }),
        children: [{
          path: '',
          name: 'new',
          component: () => import('@/views/Dashboard/Create/Choose.vue')
        }, {
          path: 'app',
          name: 'new-app',
          component: () => import('@/views/Dashboard/Create/App.vue')
        }]
      }]
    },
    {
      path: '*',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})
