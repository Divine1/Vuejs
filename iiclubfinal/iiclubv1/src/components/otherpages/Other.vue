<template>
  <div id="otherpages">
      <courses-ii></courses-ii>
      <contactus-ii></contactus-ii>
  </div>
</template>

<script>
import Courses from './Courses.vue';
import Contactus from './Contactus.vue';
export default {
  components : {
    "courses-ii" :  Courses,
    "contactus-ii" : Contactus
  }
}
</script>

<style>
#otherpages{
    display: flex;
}
</style>
