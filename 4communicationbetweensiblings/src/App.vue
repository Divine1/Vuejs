<template>
  <div id="app">
    <div>
      <div>Your name : {{username}}</div>
      <div>Age : {{userage}}</div>
    </div>
    <sidebar :schangeAge="changeAge"></sidebar>
    <mainbar></mainbar>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Mainbar from './components/Mainbar.vue';

export default {
  name: 'app',
  data(){
    return{
      "username" : "Daniel",
      "userage" : "45"
    };
  },
  components:{
    'sidebar' : Sidebar,
    'mainbar' : Mainbar
  },
  methods : {
    changeAge(){
      console.log("in App.vue changeAge() ");
      
    }
  }
}
</script>

<style>

</style>
