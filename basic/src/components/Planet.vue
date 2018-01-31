<template>
  <div id="planet">
      Planet
  </div>
</template>

<script>
import {eventBus} from './../eventBus';

export default {
  beforeRouteEnter(to,from,next){
      console.log("planet beforeRouterEnter");
      eventBus.changeEvent("planet triggered");
      next();
    }
}
</script>
<style>
#planet{
    background-color: red;
    
}
</style>
