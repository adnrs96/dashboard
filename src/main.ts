import Vue from 'vue'
import Dashboard from './Dashboard.vue'
import router from './router'
import store from './store'
import { createProvider } from '@/plugins'
import './registerServiceWorker'
import '@/assets/styles/tailwind.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider: createProvider({
    connectToDevTools: process.env.NODE_ENV === 'development'
  }),
  render: h => h(Dashboard)
}).$mount('#dashboard')
