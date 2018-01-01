<template>
  <div id="slider">
    <slidercontent-ii :imgContents="imgContents" :counter="counter"></slidercontent-ii>
  </div>
</template>

<script>
import SliderContent from './SliderContent.vue';

export default {
  components : {
      "slidercontent-ii" : SliderContent
  },
  data(){
      return {
        imgContents : [
            {"id": 0,"path": "public/images/slider1.jpg" },
            {"id": 1,"path": "public/images/slider2.jpg" },
            {"id": 2,"path": "public/images/slider3.jpg" }
        ],
        counter: 0

      };
  },
  created(){
      var self = this;
       setInterval(()=>{
          if(self.counter>1){
            self.counter = 0 ;
          }
          else{
              self.counter = self.counter+1;
          }
          
      },3000); 
  }
}
</script>

<style>
#slider{
    height: 90%;
    width: 100%;
    display: inline-block;
    position: relative;
}
/* npm install vue-fontawesome */
</style>
