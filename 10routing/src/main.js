import Vue from 'vue';
import {routes} from './routes';
import VueRouter from 'vue-router';
import App from './App.vue';


Vue.use(VueRouter);
const router = new VueRouter({
  routes : routes,
  mode : 'history'
})

new Vue({
  el: '#app',
  router : router,
  render: h => h(App)
})
