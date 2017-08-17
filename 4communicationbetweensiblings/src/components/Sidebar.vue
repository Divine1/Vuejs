<template>
  <div>
      <h3>Sidebar</h3>
      <button @click="schangeAge">Update Age</button>
      <button @click="triggerEvent">Trigger Event</button>
  </div>
</template>

<script>
import {eventBus} from '../main'; 
export default {
  name: 'Sidebar',
  props:{
      schangeAge : Function
  },
  methods:{
    triggerEvent(){
      //eventBus.$emit("fromsidebar","sidebar event"); 
      eventBus.triggerEvent("centralized sidebar event");       
    }
  }
}
</script>
