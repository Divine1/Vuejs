<template>
  <div id="homepage" class="homepage">
    <slider-ii></slider-ii>
    <!-- <contactus-ii></contactus-ii> -->
  </div>
</template>


<script>
import Slider from "./Slider.vue";
import Contactus from "./Contactus.vue";


export default {
  components : {
    "slider-ii" : Slider,
    "contactus-ii" : Contactus
  }
}
</script>
<style>
#homepage{
    height: auto;
    width: auto;
}
</style>
