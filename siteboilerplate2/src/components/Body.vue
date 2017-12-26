<template>
  <div id="body" class="body">
    <homepage-ii></homepage-ii>
  </div>
</template>


<script>
import Homepage from "./body/Homepage.vue";

export default {
  components : {
    "homepage-ii" : Homepage
  }
}
</script>
<style>

#body{
  background-color: violet;
}
.body{
  height: auto;
  width: auto;
}
</style>
