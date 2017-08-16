<template>
  <div id="app">
    <app-status></app-status> 
    <app-status></app-status>
    <app-status></app-status>
  </div>
</template>

<script>
import ServerStatus from './LocalComponent.vue';

export default {
  name: 'app',
  components : {
    'app-status' : ServerStatus
  }
}
</script>

<style>
</style>
