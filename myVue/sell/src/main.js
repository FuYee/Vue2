// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import foods from 'components/foods/foods'
import seller from 'components/seller/seller'
import ratings from 'components/ratings/ratings'
import App from './App'

import 'common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path: '/',
  redirect: '/foods'
}, {
  path: '/foods',
  component: foods
}, {
  path: '/seller',
  component: seller
}, {
  path: '/ratings',
  component: ratings
}]
const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

/* eslint-disabled no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

