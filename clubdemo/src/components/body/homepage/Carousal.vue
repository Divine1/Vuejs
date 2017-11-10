<template>
<!-- grid-list-xl text-xs-center -->
  
      <div id="carousel-view">
      <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      v-bind:key="i"
      v-bind:src="item.src"
      transition="fade"
      reverseTransition="fade"
    ></v-carousel-item>
  </v-carousel>
  </div>
</template>
<script>
export default {
 data () {
      return {
        items: [
          {
            src: '/public/squirrel.jpg'
          },
          {
            src: '/public/sky.jpg'
          },
          {
            src: '/public/bird.jpg'
          },
          {
            src: '/public/planet.jpg'
          }
        ]
      }
    }

};
</script>
<style>
#carousel-view .fade-enter-active,
#carousel-view .fade-leave-active,
#carousel-view .fade-leave-to {
  transition: 0.3s ease-out;
  position: absolute;
  top: 0;
  left: 0;
}
#carousel-view .fade-enter,
#carousel-view .fade-leave,
#carousel-view .fade-leave-to {
  opacity: 0;
}

</style>
