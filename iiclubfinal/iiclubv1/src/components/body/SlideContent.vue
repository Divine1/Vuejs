<template>
    <transition name="fade" mode="out-in" tag="div" class="slidecontent-parent">
        <div v-for="(sliderImage,index) in sliderImages" :key="index" 
        v-if="index == counter" class="slidecontent">
            <img :src="sliderImage.name" class="responsive-image" 
            @mouseover="mouseoverImage" 
             @mouseleave="mouseleaveImage"/>
        </div>
    </transition>
</template>

<script>
export default {
    props : ["counter","sliderImages"],
    methods : {
        mouseoverImage(){
            console.log("mouseoverImage");
            this.$emit("mouseoverImage",true);
        },
        mouseleaveImage(){
            console.log("mouseleaveImage");
            this.$emit("mouseoverImage",false);
        },
    }
    
}
</script>
<style>

.slidecontent-parent{
    height: inherit;
    width: inherit;
}
.slidecontent{
    display : inline-block;
    height: inherit;
    width: inherit;
}

.fade-enter-active{
    animation-name: fade-enter;
    animation-iteration-count: 1;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
}

.fade-leave-active{
    
    animation-name: fade-leave;
    animation-iteration-count: 1;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    
}
@keyframes fade-enter {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
        background-color: orange;
    }
}   
@keyframes fade-leave {
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
        background-color: red;
    }
}

.responsive-image {
  height: inherit;
  width: 100%;
}


</style>
