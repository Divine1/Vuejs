import Vue from 'vue';
import App from './App.vue';

import * as VueGoogleMaps from 'vue2-google-maps';
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCGB6LDVcvmtmeSTIDxzO-B1jyS1nfI6Io',
    //libraries: 'places', 
  },
});

new Vue({
  el: '#app',
  render: h => h(App)
});
