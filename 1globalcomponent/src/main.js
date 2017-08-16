import Vue from 'vue'
import App from './App.vue'
import GlobalComponent from './GlobalComponent.vue'

Vue.component("app-server-status",GlobalComponent);
new Vue({
  el: '#app',
  render: h => h(App)
})
