<<template>
  <div>
      <h3>Header</h3>
      <div>
          {{husername}}
      </div>
      <button @click="updateName">UpdateName</button>
      <button @click="updateNameEveryWhere">UpdateNameEveryWhere</button>
      <div></div>
  </div>
</template>
<script>
export default {
  props: ['husername'],
  methods : {
      updateName(){
          this.husername = "dan";
      },
      updateNameEveryWhere(){
          this.$emit("toothers",this.husername);
      }
  }
  
}
</script>
<style scoped>
    div {
        background-color: blue;
    }
</style>
