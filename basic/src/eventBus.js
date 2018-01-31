import Vue from 'vue';
export const eventBus = new Vue({
    methods :{
        changeEvent(message){
            console.log("in changeEvent: "+message);
        }
    }
});