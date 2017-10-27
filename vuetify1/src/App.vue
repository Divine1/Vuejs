<template>
<v-app id="inspire">
  <div>
    <header-ii></header-ii>
    <body-ii></body-ii>
    <footer-ii></footer-ii>
  </div>
</v-app>
</template>


<script>
import Header from './components/Header.vue';

import Footer from './components/Footer.vue';
import Body from './components/Body.vue';
export default {
  components : {
    "header-ii" : Header,
    "footer-ii" : Footer,
    "body-ii" : Body
  }

  
};
</script>
