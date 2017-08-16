<<template>
  <div>
      <h1>Local Component</h1>
      <button @click="changeStatus">Change Status</button>
      Status: {{status}}
  </div>
</template>

<<script>
export default {
  name : 'LocalComponent',
  data : function(){
      return {
          status : 'Critical'
      };
  },
  methods : {
      changeStatus (){
          this.status = 'Normal';
      }
  }
}
</script>
