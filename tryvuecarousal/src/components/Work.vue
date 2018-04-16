<template>
  <div>
    <div class="testimonal-container">
        <carousel autoplay :perPage="1" loop :easing="'appear'">
            <slide>
                    <div class="custom image1">
                    </div>
            </slide>
            <slide>
                    <div class="custom image2">
                    </div>
            </slide>
        </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel,
    Slide
  }
};
</script>

<style>

.testimonal-container{

    width: 100%;
    background-color: turquoise;
}

.testimonal-container .custom{
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: 0px;
    height: 200px;
    width: 100%; 
}
.testimonal-container .custom.image1{
    background-image: url("images/testimonal1.jpg"); 
}
.testimonal-container .custom.image2{
    background-image: url("images/testimonal2.jpg"); 
}
</style>
