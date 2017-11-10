<template>
  <div>
    <v-toolbar dark color="primary">
      <div class="img_marklogic" :class="{active_choice : !choice_active }"></div>
      <v-btn :color="choice_active ? 'brown darken-1' : 'green'" @click="clickme('marklogic')" round dark large >MARKLOGIC</v-btn>
      <v-spacer></v-spacer>
      <v-btn :color="!choice_active ? 'brown darken-1' : 'green'" @click="clickme('mongo')" round dark large >MONGO</v-btn>
      <div class="img_mongo"  :class="{active_choice : choice_active }"></div>
    </v-toolbar> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      choice_active : false
    };
  },
  methods: {
    clickme(choice){
      if(choice == "marklogic"){
        this.$router.push("/"+choice);
        this.choice_active = false;
      }
      else if(choice == "mongo"){
        this.$router.push("/"+choice);
        this.choice_active = true;
      }
      else{
        this.$router.push("/");
        this.choice_active = false;
      }
    }
  }
};
</script>
<style >
.img_marklogic{
    background-image: url(/public/marklogic.png);
    background-repeat: no-repeat;
    width: 170px;
    background-size: 100%;
    height: 37px;
}
.img_mongo{
  background-image: url("/public/mongodb2.png");
  background-repeat: no-repeat;
  width: 170px;
  background-size: 100%;
  height: 37px;
}

.active_choice{
  animation-name: activeChoiceAnimated;
  animation-direction: alternate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

@keyframes activeChoiceAnimated {
  0%{
    transform: translate(0px,0px) rotateZ(0deg);
    background-color: orange;
  }
  20%{
    transform: translate(-10px,0px) rotateZ(30deg);
  }
  100%{
    transform: translate(10px,0px) rotateZ(-30deg);
    background-color: yellow;
  }
}

</style>
