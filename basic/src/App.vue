<template>
  <div id="mainapp">
    <loading-i></loading-i>
    <header-ii></header-ii>
    <body-ii></body-ii>
  </div>
</template>

<script>
import Loading from './components/Loading.vue';
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
    
export default {
  components : {
    "header-ii" : Header,
    "body-ii" : Body,
    'loading-i' : Loading
  },
  data () {
    return {
      
    }
  }
}
</script>
<style>
html,body{
  margin:0;
}
html,body,#app,#mainapp{
    height: 100%;
    width:100%;
    z-index: 100;
    position: relative;
}

</style>

