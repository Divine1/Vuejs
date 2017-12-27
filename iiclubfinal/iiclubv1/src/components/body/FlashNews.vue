<template>
  <div id="flashnews" class="flashnews">
      <div>flash1</div>
      <div>flash2</div>
      <div>flash3</div>
      <div>flash4</div>
      <div>flash5</div>

  </div>
</template>


<script>
export default {
  
}
</script>

<style>
#flashnews{
    height: auto;
    width: auto;
    position: relative;
    height: 100px;
     
}
#flashnews div{
    opacity:0;
    position: absolute;
    animation-duration: 10s;
    animation-direction: normal;
    animation-fill-mode: forwards; 
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
.flashnews:hover div {
    
    animation-play-state: paused;
}
#flashnews div:nth-child(1) {
    animation-name : divs;
    animation-delay: 0s;
}
#flashnews div:nth-child(2) {
    animation-name : divs;
    animation-delay: 1s;
}
#flashnews div:nth-child(3) {
    animation-name : divs;
    animation-delay: 2s;
}
#flashnews div:nth-child(4) {
    animation-name : divs;
    animation-delay: 3s;
}
#flashnews div:nth-child(5) {
    animation-name : divs;
    animation-delay: 4s;
}
@keyframes divs {
    0%{
        opacity:1;
        left: 0%;
    }
    100%{
        opacity:1;
        left: 95%;
    }
}

</style>
