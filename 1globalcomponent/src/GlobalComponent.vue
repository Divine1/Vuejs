
<template>
  <div>
      <button @click="changeStatus">Change Status</button>
      <div>Status {{status}}</div>
  </div>
</template>

<<script>
export default {
  data : function(){
      return {
          status : 'Critical'
      }
  },
  methods : {
      changeStatus (){
          console.log("in changestatus()");
          this.status = 'Normal';
      }
  }
}
</script>

