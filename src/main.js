import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Landing from './landing.vue';
import Self from './self.vue';
import Serve from './serve.vue';
import Looking from './looking.vue';
import Confirm from './confirm';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import bootstrapJS from '../node_modules/bootstrap/dist/js/bootstrap.min'

const routes = [
  { path: '/', name: 'landing', component: Landing },
  { path: '/self', name: 'self', component: Self },
  { path: '/serve',  name: 'serve' , component: Serve },
  { path: '/looking',  name: 'looking' , component: Looking },
  { path: '/confirm',  name: 'confirm' , component: Confirm }
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
