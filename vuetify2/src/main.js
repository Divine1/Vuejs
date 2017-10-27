import "babel-polyfill";
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import './stylus/main.styl';
import {routes} from './routes';
import App from './App.vue';


Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
  routes
});

/* export const eventBus = new Vue({
  
}); */

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});