import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight',{
  bind(el,binding,vnode){
    //el.style.backgroundColor = 'green';
    if(binding.arg == 'background'){
      el.style.backgroundColor = binding.value;
    }
    if(binding.modifiers['delay']){
      el.style.backgroundColor = "pink";
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
