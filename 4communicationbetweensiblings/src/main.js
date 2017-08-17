import Vue from 'vue'
import App from './App.vue'

//export const eventBus = new Vue();
export const eventBus = new Vue({
  methods : {
    triggerEvent(data){
      eventBus.$emit("fromsidebar",data); 
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
