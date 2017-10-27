<template>
    
        <v-container>
        <carousal-ii></carousal-ii>
        <flashcard-ii></flashcard-ii>
        
    </v-container>
</template>

<script>
import Carousal from './body/Carousal.vue';
import Flashcard from './body/Flashcard.vue';

export default {
  components:{
          "carousal-ii" :Carousal,
          "flashcard-ii" : Flashcard
  }
}
</script>

<style>

</style>
