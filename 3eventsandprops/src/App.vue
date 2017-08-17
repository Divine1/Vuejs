<template>
  <div id="app">
    <div>
      <h3>Container</h3>
      <div>The user name is {{username}}</div>
      <button @click="changeName">Update Name</button>
    </div>
    <my-header :husername="username"
     @toothers="username = $event"
    ></my-header>
    <my-body></my-body>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Body from './components/Body.vue';
export default {
  name : "app",
  components : {
    'my-header' : Header,
    'my-body' : Body
  },
  data : function(){
    return {
      'username' :'Robert'
    };
  },
  methods : {
    changeName(){
      this.username = "bob";
    }
  }
}
</script>

<style>

</style>
