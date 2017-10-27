<template>
    <div>
        <v-container grid-list-md >
          <carousal-ii></carousal-ii>
          <flashitems-ii></flashitems-ii>
        </v-container>
    </div>
</template>

<script>
import Carousal from './homepage/Carousal.vue';
import Flashitems from './homepage/Flashitems.vue';

export default {
  components : {
    "carousal-ii" :Carousal,
    "flashitems-ii" :Flashitems
  }
};
</script>

<style>

</style>
