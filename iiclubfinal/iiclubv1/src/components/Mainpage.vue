<template>
  <div id="mainpage" class="mainpage">
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
#mainpage{
  background-color: violet;
}
.mainpage{
  /* height: auto;
  width: auto; */
  margin: 0 auto;
  /* width: 1024px; */
  max-width: 1024px;
  width: auto;
  height: auto;
}
</style>