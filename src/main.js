import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import { routes } from './routes'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.root = 'https://vuejs-stock-trader-f0d7f.firebaseio.com/'
Vue.filter('currency',(value) => {
  return 'Rs' + value.toLocaleString();
})

const router = new VueRouter({
  mode:'history',
  store,
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
