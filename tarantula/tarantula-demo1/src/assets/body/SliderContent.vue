<template>
     <transition-group  id="slidercontent" mode="out-in" tag="div" name="fade">        
        <div class="imagerender" :key="counter">
            <img :src="changeCarousal()" alt="">
        </div>
     </transition-group>
</template>

<script>
export default {
  props:["imgContents","counter"],
  methods : {
    changeCarousal(){
      return this.imgContents[this.counter].path;
    }
  }
}
</script>

<style>
/* #slidercontent{
  
  height: inherit;
  width: auto;
  display: inline-block;
}
 */
#slidercontent{
  overflow: hidden;
  display: inline-block;
  
}
#slidercontent .imagerender, #slidercontent .imagerender img{
  height: inherit;
    width: auto;
  display: inline-block;
  
  
}
#slidercontent .imagerender img{
  width: 100%;
  height: 100vh;
}

 .fade-enter-active{
    animation-name: fade-enter;
    animation-iteration-count: 1;
    animation-duration: 1s;
    /* animation-fill-mode: forwards; */
    /* animation-timing-function: ease-in-out; */
}
.fade-move{
  transition: transform 1s;
}
.fade-leave-active{
    
    animation-name: fade-leave;
    animation-iteration-count: 1;
    animation-duration: 1s;
    /* animation-fill-mode: forwards; */
    /* animation-timing-function: ease-in-out; */
    position: absolute;
}
@keyframes fade-enter {
    from{
        
        transform: translate(100%,0px); 
        
    }
    to{
         
          transform: translate(0px,0px); 
    }
}   
@keyframes fade-leave {
    from{
       
         transform: translate(0px,0px); 
    }
    to{
       
          transform: translate(-100%,0px); 
    }
}


</style>
