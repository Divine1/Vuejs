<template>
  <div id="loading">
      <div class="text">Loading</div> 
  </div>
</template>

<script>
import {eventBus} from './../eventBus';
export default {
  beforeRouteEnter(to,from,next){
      console.log("loading beforeRouterEnter");
      eventBus.changeEvent("loading triggered");
      next();
    }
}
</script>
<style>
#loading{
    background-color: magenta;
    position: absolute;
    z-index: 1001;
    height: 100%;
    width: 100%;
    opacity: .3;
}
#loading .text{
    background-color: yellowgreen;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1111;
    opacity: 1.3;
}
</style>
