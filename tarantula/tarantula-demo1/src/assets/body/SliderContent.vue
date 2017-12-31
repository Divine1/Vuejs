<template>
     <transition-group  id="slidercontent" mode="out-in" tag="div" name="fade">
        <div class="imagerender" v-for="(imgContent,index) in  imgContents" :key="index" v-if="index == counter">
            <img :src="imgContent.path" alt="">
        </div>
     </transition-group>
</template>

<script>
export default {
  props:["imgContents","counter"]
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
}

 .fade-enter-active{
    animation-name: fade-enter;
    animation-iteration-count: 1;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
}
.fade-move{
  transition: transform 1s;
}
.fade-leave-active{
    
    animation-name: fade-leave;
    animation-iteration-count: 1;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
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
