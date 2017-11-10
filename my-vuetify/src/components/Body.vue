<template>
        <v-container fluid pa-0>
            <v-layout row wrap>
                <v-flex xs3>
                    <v-card tile flat color="">
                    <v-card-text>
                        <sidebar-poc></sidebar-poc>
                    </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs9>
                    <transition name="slide" mode="out-in">
                        <router-view></router-view>  
                    </transition>
                </v-flex>
            </v-layout>
        </v-container>
</template>

<script>
import Sidebar from "./Sidebar.vue";
export default {
    components : {
        "sidebar-poc" : Sidebar
    }
};
</script>

<style>
.slide-enter-active{
    animation-name: slideenter;
    animation-duration: 300ms;
    animation-timing-function: ease-in;
    animation-direction: forwards;
}
.slide-leave-active{
    animation-name: slideleave;
    animation-duration: 300ms;
    animation-timing-function: ease-in;
    animation-direction: forwards;
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
