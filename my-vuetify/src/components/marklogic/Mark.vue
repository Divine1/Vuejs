<template>

    <div>
        <v-card  flat  color="">
            
                <div>
                   <!-- <migrate-p></migrate-p> -->
                    <transition name="slide" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>  
            
        </v-card>
    </div>
</template>


<style>
.slide-enter-active{
    animation-name: slideenter;
    animation-duration: 300ms;
    animation-timing-function: ease-in;
}
.slide-leave-active{
    animation-name: slideleave;
    animation-duration: 300ms;
    animation-timing-function: ease-in;    
}

@keyframes slideenter {
    from{
        /* transform: translate(30%,0px); */
        opacity: 0;
    }
    to{
        /* transform: translate(0px,0px); */
        opacity: 1;
    }
}

@keyframes slideleave {
    from{
        /* transform: translate(0px,0px); */
        opacity: 1;
    }
    to{
        /* transform: translate(30%,0px); */
        opacity: 0;
    }
}
</style>
