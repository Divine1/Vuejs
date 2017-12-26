<template>
  <div id="entryapp">
    <header-ii></header-ii>
    <sidebar-ii></sidebar-ii>
    <body-ii></body-ii>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Body from './components/Body.vue';

export default {
  components: {
    "header-ii" : Header,
    "sidebar-ii" : Sidebar,
    "body-ii" : Body
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  html,body{
    width: 100%;
    height: 100%;
    background-color: aqua;
    margin: 0 auto;
  }
  #app{
    width: 100%;
    height: 100%;
  }

  #entryapp{
    width: 100%;
    height: 100%;
  }

</style>
