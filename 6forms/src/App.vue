<template>
  <div id="app">
    <div>{{msg}} {{first()}}</div>
    <myform>
      
    </myform>
  </div>
</template>

<script>
import MyForm from './components/Form.vue';
import obj11 from './components/Test.vue';
export default {
  name: 'app',
  components: {
    'myform' : MyForm
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods :{
    first(){
      obj11.myfun1();
      //obj2.myfun2();
    }
  }
}
</script>

<style>

</style>
