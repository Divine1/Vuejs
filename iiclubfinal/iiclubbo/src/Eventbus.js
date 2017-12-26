import Vue from 'vue';

export const eventBus = new Vue({
    data(){
        return {
            test : "test",
            toggleSliderStatus : false
        }
    },
    methods :{
        toggleSlider(){
            this.toggleSliderStatus = !this.toggleSliderStatus;
            console.log("toggleSliderStatus: "+this.toggleSliderStatus);
            console.log("emitting event toggleSliderEvent");
            this.$emit("toggleSliderEvent",this.toggleSliderStatus);
        }
    }
});