<template>
  <div id="mainapp">
    <header-ii></header-ii>
    <body-ii></body-ii>
    <footer-ii></footer-ii>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
import Footer from "./components/Footer.vue";

export default {
  components : {
    "header-ii" : Header,
    "body-ii" : Body,
    "footer-ii" : Footer
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
  margin:0;
}
html,body,#app,#mainapp{
    height: 100%;
    width:100%;
}
body{
    background-color: blue;
}
#app{
    background-color: orange;
}
#mainapp{
  background-color: green;
}


</style>

