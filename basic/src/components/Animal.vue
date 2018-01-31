<template>
  <div id="animal">
      Animal
  </div>
</template>

<script>
import {eventBus} from './../eventBus';
export default {
  beforeRouteEnter(to,from,next){
      console.log("animal beforeRouterEnter");
      eventBus.changeEvent("animal triggered");
      next();
    }
}
</script>
<style>
#animal{
    background-color: green;
    
}
</style>
