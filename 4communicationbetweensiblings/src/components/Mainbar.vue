<template>
  <div>
      <h3>Mainbar</h3>

  </div>
</template>

<script>
import {eventBus} from '../main'; 
export default {
  name: 'Mainbar',  
  methods: {

  },
  created(){
    eventBus.$on('fromsidebar',(data)=>{
        console.log("received event");
        console.log(data);
    });
  }
}
</script>
