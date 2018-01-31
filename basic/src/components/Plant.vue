<template>
  <div id="plant">
      Plant
  </div>
</template>

<script>
import {eventBus} from './../eventBus';

export default {
  beforeRouteEnter(to,from,next){
      console.log("plant beforeRouterEnter");
      eventBus.changeEvent("plant triggered");
      next();
    }   
}
</script>
<style>
#plant{
    background-color: blue;
    
}
</style>
