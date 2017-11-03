<template>
 <!--  <div class="container">
      <div class="holder">
          <div v-for="(item,i) in items" :key="item.id" class="eachitem">
              {{item.text}}
          </div>
      </div>
  </div> -->
    <div class="container">
        <v-layout row wrap  class="holder">
                <v-flex v-for="(item,i) in items" :key="item.id" class="eachitem mt-3 ml-3" lg3 xl3 md4 sm6 xs12>
                {{item.text}}
                </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: "courses_1_1", text: "IOT course next week" },
        { id: "workshop_1_1", text: "IOT Workshop tomorrow" },
        { id: "workshop_1_2", text: "Car Building weekend" },
        { id: "workshop_1_3", text: "Swimming morning" },
        { id: "workshop_1_4", text: "Food night" }
      ]
    };
  }
};
</script>

<style scoped>
.holder .eachitem {
  /* display:inline-block; */
  /* margin: 0 5px; */
  background-color: #7fffd4;
  border-radius: 25%;
  padding: 4px 4px;
  text-align: center;
  animation-name: move_holder;
  animation-duration: 300ms;
  animation-iteration-count: infinite; 

}
.holder .eachitem:hover{
    animation-play-state: paused; 
    box-shadow: 10px 10px 2px 1px;
}
.holder {
  display: flex;
  justify-content: space-between;
}

@keyframes move_holder {
  0% {
    transform: translateX(0px) rotate(0deg);
  }
  25% {
    transform: translateX(20px) rotate(5deg);
  }
  50% {
    transform: translateX(30px) rotate(0deg);
  }
  75% {
    transform: translateX(20px) rotate(-5deg);
  }
  100% {
    transform: translateX(0px) rotate(0deg);
  }
}
</style>
