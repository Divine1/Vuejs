<template>
  <div id="app">
    <div>{{msg}}</div>
    <div>
      <div>{{firstName | localTouppercase}}</div>
      <div>{{lastName | g-tolowercase}}</div>
      <div>{{multiplyit}}</div>
      <Continents></Continents>
    </div>
  </div>
</template>

<script>
import Continents from './components/Continents.vue';
import Country from './components/Country.vue';
import {Appmixin} from './components/Appmixin';

export default {
  name: 'app',
  components : {
    'Continents' : Continents
  },
  mixins : [Appmixin],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App with mixin',
      firstName : 'dave bautista'
    }
  }
}
</script>

<style>

</style>
