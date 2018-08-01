import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Landing from './landing.vue';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import bootstrapJS from '../node_modules/bootstrap/dist/js/bootstrap.min'

const routes = [
  { path: '/', component: Landing }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.use(VueRouter)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
