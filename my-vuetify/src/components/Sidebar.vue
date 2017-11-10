<template>
  <!-- <div>#1 Migration</div>
    <div>#2 Search</div>
    <div>#2 Thesarus</div> -->
  <div>
    <div class="text-xs-center">
      <v-chip color="purple darken-1" 
      @click="redirect('migrate')" text-color="white">Migration</v-chip>
    </div>
    <div class="text-xs-center">
     <v-chip color="secondary" @click="redirect('search')" text-color="white">Search</v-chip>
     <v-chip color="pink" @click="redirect('')" text-color="white">Thesaurus</v-chip>
    </div>
    <snackbar-p></snackbar-p>
  </div>
</template>

<script>
import {eventBus} from '../Eventbus';
import Snackbar from './Snackbar.vue';
export default {
   components : {
        "snackbar-p" : Snackbar
    },
  methods:{
    redirect(whichRoute){
      console.log("route params");
      console.log(this.$route.fullPath);

      if(this.$route.fullPath.indexOf('mongo') > 0 && whichRoute == "migrate"){
        eventBus.showSnackbar("This feature is not active for mongodb","error");
      }
      else{
        if(this.$route.fullPath.indexOf('mongo') > 0){
          this.$router.push("/mongo/"+whichRoute);
        }
        else{
          this.$router.push("/marklogic/"+whichRoute);
        }
          
      }
    }
  }
}
</script>

<style scoped>

</style>
