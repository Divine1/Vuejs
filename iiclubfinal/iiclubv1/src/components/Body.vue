<template>
  <div id="mainbody">
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  props : {
    id : {
      type: String,
      default : "vue"
    }
  }
}
</script>

<style>
#mainbody{
  background-color: violet;
}
#mainbody{
  margin: 0 auto;
  max-width: 1024px;
  width: auto;
  height: auto;
}
</style>
