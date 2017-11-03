<template>
  <div class="hhtt mt-2 ml-3 mr-3">
        <v-layout row>
          <v-flex style="font-size: larger;">Contact Us</v-flex>
        </v-layout>
        <!-- <v-layout row>
          <v-flex>+91 9533827847</v-flex>
        </v-layout> -->
        <v-layout row>
          <v-flex>
            
              <v-btn color="red" class="contactus_block" href="tel:9533827847">
                <v-icon class="custom_anim animated wobble" left>call</v-icon>
                <span class="custom_anim animated swing" >+91 9533827847</span>            
              </v-btn>
            
          </v-flex>
        </v-layout>
        <v-layout row class="mt-5">
          <v-flex  style="font-size: larger;">Need clarification on anything?</v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
              <v-text-field
                name="input-7-1"
                label="Enter your thoughts"
                multi-line
              ></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
              <v-text-field
                 label="Phone Number"
                 value=""
              ></v-text-field>
            </v-flex>
        </v-layout>
      <v-layout row>
          <v-flex>
            <v-btn color="primary">Submit</v-btn>
          </v-flex>
        </v-layout>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.hhtt{
    /* border-radius: 2px; */
    /* box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12); */
        box-shadow: -1px -1px 10px 5px red;


        padding:2%;
}
.contactus_block{
  /* animation: contactus_anim 1s infinite; */
}

@keyframes contactus_anim {
  0%{
    background-color: red;
  }
  25%{
    background-color: yellow;
  }
  50%{
    background-color: blue;
  }
  75%{
    background-color: orange;
  }
  100%{
    background-color: red;
  }
}

.custom_anim  {
  animation-duration: 1s;
  animation-delay: 1s;
  animation-iteration-count: infinite;
}
</style>
