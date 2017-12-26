<template>
  <div id="body-slider" >
    <slideContent-ii :counter="counter" 
        :sliderImages="sliderImages" 
        @mouseoverImage="mouseoverImage = $event"></slideContent-ii>
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
                {name: '/public/images/'+'slider-img3.jpg' , title : 'Automation'},
                {name: '/public/images/'+'slider-img4.jpg' , title : 'Foresting'},
                {name: '/public/images/'+'slider-img5.jpg' , title : 'Nuclear'},
                {name: '/public/images/'+'slider-img6.jpg' , title : 'Sunlight'}
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
        /* setInterval(()=>{
            if(!self.mouseoverImage){
                if(self.counter == self.sliderImages.length-1)
                {
                    self.counter = 0;
                }
                else{
                    self.counter++;
                }
            }
        },3000); */
    } 
}
</script>

<style>
#body-slider{
    margin: 0 auto;
    max-width: 1024px;
}
</style>

