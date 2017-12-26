<template>
  <div id="header">
      <button @click="toggleSlider">Toggle Slider</button>
  </div>
</template>

<script>
import {eventBus} from './../Eventbus';

export default {
  methods:{
      toggleSlider(){
          //console.log(eventBus.test);
          eventBus.toggleSlider();
      }
  }
}
</script>

<style>
#header{
  background-color: blue;
  width: 100%;
  height: 50px;
}
</style>
