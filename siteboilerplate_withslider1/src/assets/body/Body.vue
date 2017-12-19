<template>
  <div class="body">
      <slider-ii></slider-ii>
      <content-ii></content-ii>
  </div>
</template>

<script>
import Slider from './Slider.vue';
import Content from './Content.vue';
export default {
  components : {
      "slider-ii" : Slider,
      "content-ii" : Content,
  }
}
</script>

<style>
.body{
    height:auto;
    width: auto;
}
</style>
