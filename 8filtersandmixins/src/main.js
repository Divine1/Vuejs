import Vue from 'vue'
import App from './App.vue'

Vue.filter('g-tolowercase',function(value){
  return value.toLowerCase();
});

Vue.mixin({
  created(){
    console.log("this is a global mixin. This mixin gets attached to all vue instances");
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})
