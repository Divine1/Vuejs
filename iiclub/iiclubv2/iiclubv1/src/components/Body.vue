<template>
  <div id="body" class="body">
    <slider-ii></slider-ii>
  </div>
</template>


<script>
import Slider from "./body/Slider.vue";
export default {
  components : {
    "slider-ii" : Slider
  }
}
</script>

<style>
#body{
  background-color: violet;
}
.body{
  /* height: auto;
  width: auto; */
  margin: 0 auto;
  width: 1024px;
  height: auto;
}
</style>
