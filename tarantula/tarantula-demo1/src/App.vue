<template>
  <div class="div-app">
    <header-t></header-t>
    <!-- <div style="height:10%"></div> -->
    <body-t></body-t>
    <footer-t></footer-t>
  </div>
</template>

<script>
import Header from './assets/header/Header.vue';
import Body from './assets/body/Body.vue';
import Footer from './assets/footer/Footer.vue';
export default {
  components : {
    "header-t" : Header,
    "body-t" : Body,
    "footer-t" :Footer
  },
  data () {
    return {
      
    }
  }
}
</script>
<style>
html,body{
    width: 100%;
    height: 100%;
}
body{
    margin:0;
    padding:0;
}
#app{
    width: 100%;
    height: 100%;
}


.div-app{
  width: 100%;
  height: 100%;
}
</style>
