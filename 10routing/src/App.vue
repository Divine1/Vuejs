<template>
  <div id="app">
    <div>{{msg}}</div>
    <div>

      <router-link to="/" tag="div"  active-class="active" exact>sports</router-link>
      <router-link to="/cricket" tag="div" active-class="active">cricket</router-link>
      <router-link to="/football" tag="div" active-class="active" >football</router-link>
      <router-link to="/basketball" tag="div" active-class="active" exact>basketball</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Cricket from './components/Cricket.vue';
import Football from './components/Football.vue';
import Basketball from './components/Basketball.vue';
import Sports from './components/Sports.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.active{
  background-color: orange;
}
</style>
