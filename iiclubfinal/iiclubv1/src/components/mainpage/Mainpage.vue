<template>
  <div id="mainpage" class="mainpage">
    <slider-ii></slider-ii>
    <flashnews-ii></flashnews-ii>
    <importantevents-ii></importantevents-ii>
  </div>
</template>

<script>
import Slider from "./slider/Slider.vue";
import FlashNews from "./FlashNews.vue";
import ImportantEvents from "./ImportantEvents.vue";

export default {
  components : {
    "slider-ii" : Slider,
    "flashnews-ii" : FlashNews,
    "importantevents-ii" : ImportantEvents
  }
}
</script>
<style>
/* #mainpage{
  background-color: violet;
}
.mainpage{
  margin: 0 auto;
  max-width: 1024px;
  width: auto;
  height: auto;
} */
</style>