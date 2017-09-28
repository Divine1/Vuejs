<template>
  <div>
    <div>
      <h4>https://vuejsexamples.com/powerfull-carousel-component-for-vue-js/</h4>
      <button @click="dynamicComponent='app-slide1'">Slide1</button>
      <button @click="dynamicComponent='app-slide2'">Slide2</button>
      <button @click="dynamicComponent='app-slide3'">Slide3</button>
    </div>
    <div>
      <component :is="dynamicComponent"></component>
    </div>
  </div>
</template>

<script>
import Slide1 from './components/slide1.vue';
import Slide2 from './components/slide2.vue';
import Slide3 from './components/slide3.vue';

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      dynamicComponent : "app-slide1"
    }
  },
  components:{
    "appSlide1" : Slide1,
    "appSlide2" : Slide2,
    "appSlide3" : Slide3,
  }
}
</script>
<style>

</style>
