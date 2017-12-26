<template>
    <router-view></router-view>
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
