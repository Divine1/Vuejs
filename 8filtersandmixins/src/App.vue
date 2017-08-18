<template>
  <div id="app">
    <div>{{msg}}</div>

  </div>
</template>

<script>
import Continents from './components/Continents.vue';
import Country from './components/Country.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
