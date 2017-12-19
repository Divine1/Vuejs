<template>
  <div id="body" class="body">
    <slider-ii></slider-ii>
    <flashnews-ii></flashnews-ii>
  </div>
</template>


<script>
import Slider from "./body/Slider.vue";
import FlashNews from "./body/FlashNews.vue";

export default {
  components : {
    "slider-ii" : Slider,
    "flashnews-ii" : FlashNews
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
  /* width: 1024px; */
  max-width: 1024px;
  height: auto;
}
</style>
