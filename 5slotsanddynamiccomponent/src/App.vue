<template>
  <div id="app">
    <div>
      <h1>Parent</h1>
      
    </div>
    <football>
      <div slot="slot1">
        The various codes of football share certain common elements: Players in American football, Canadian football, rugby union and rugby league take up positions in a limited area of the field at the start of the game
      </div>
      <div slot="slot2">
        There are conflicting explanations of the origin of the word "football". It is widely assumed that the word "football" (or the phrase "foot ball") refers to the action of the foot kicking a ball
      </div>
      <div>
        Most of the very early references to the game speak simply of "ball play" or "playing at ball". This reinforces the idea that the games played at the time did not necessarily involve a ball being kicked.
      </div>
    </football>

    <cricket>
      <div>
        Cricket can definitely be traced back to Tudor times in late 16th-century England though there have been a number of claims, many of them spurious or lacking evidence, supporting earlier dates from 1301
      </div>
      <div>
        Two of the players are batsmen and the rest are all eleven members of the fielding team. 
      </div>
      <div>
        The captain is often the most experienced player in the team, certainly the most tactically astute, and can possess any of the main skillsets as a batsman, a bowler or a wicket-keeper. 
      </div>
    </cricket>
    <hr />
    <hr />
    <football>
    </football>

    <cricket>
    </cricket>
    <hr />
    <hr />
    Which component is active now? {{componentType}}
    <button @click="footballAction">Activate Football</button>
    <button @click="cricketAction">Activate Cricket</button>

    <!-- <keep-alive> -->
      <component :is="componentType"></component>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import Football from "./components/Football.vue";
import Cricket from "./components/Cricket.vue";

export default {
  name: 'app',
  components : {
    "football" : Football,
    "cricket" :Cricket
  },
  data(){
    return {
      componentType : 'cricket'
    }
  },
  methods : {
    footballAction(){
      this.componentType = "football";
    },
    cricketAction(){
      this.componentType = "cricket";
    }
  }
}
</script>

<style>

</style>
