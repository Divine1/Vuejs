<template>
  <div id="app">
    <div>{{msg}}</div>
    <div>
      <div>
        <!-- <p v-highlight>in india</p> -->
        <p v-highlight:background.delay="'blue'">in india</p>
        <p v-local-highlight:background="'orange'">in england</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
        // el.style.backgroundColor = 'green';
        if (binding.arg == 'background') {
          el.style.backgroundColor = binding.value;
        }
        // if (binding.modifiers['delay']) {
        //   el.style.backgroundColor = "pink";
        // }
      }
    }
  }
};
</script>

<style>

</style>
