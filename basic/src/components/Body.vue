<template>
  <div id="body">
      Body
      <router-view></router-view>
      
  </div>
</template>

<script>

export default {
  data(){
      return {

      }
  }
}
</script>
<style>
#body{
    background-color: orange;
    height : 90vh;
}
</style>
