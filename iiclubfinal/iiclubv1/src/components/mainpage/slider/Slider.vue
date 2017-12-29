<template>
  <div id="body-slider" >
    <slideContent-ii :counter="counter" 
        :sliderImages="sliderImages" 
        @mouseoverImage="mouseoverImage = $event">
    </slideContent-ii>
  </div>
</template>
<script>
import SlideContent from './SlideContent.vue';
export default {
    data(){
        return {
            counter : 0,
            sliderImages : [
                {name: '/public/images/'+'slider-img1.jpg' , title : 'AI'},
                {name: '/public/images/'+'slider-img2.jpg' , title : 'ML'},
                {name: '/public/images/'+'slider-img3.jpg' , title : 'Automation'}
            ],
            mouseoverImage : false
        }
    },
  components : {
      "slideContent-ii" : SlideContent
  },
  methods :{
      increaseCounter(){
          console.log("increase counter");
          console.log(this.counter);
          this.counter = this.counter+1;
          console.log(this.counter);
      }
  },
  watch : {
      counter(val) {
          console.log("counter incremented");
          console.log(val);
      }
  },
  created(){
    console.log("in created method");
     var self=this;
        setInterval(()=>{
            if(!self.mouseoverImage){
                if(self.counter == self.sliderImages.length-1)
                {
                    self.counter = 0;
                }
                else{
                    self.counter++;
                }
            }
        },3000);  
    } 
}
</script>

<style>
#body-slider{
    max-height: 400px; 
    height: 400px;
    width: inherit;
}
</style>

