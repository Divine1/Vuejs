import Vue from 'vue';

export const eventBus = new Vue(
{
    data(){
        return{

        };
    },
    methods: {
        showSnackbar(message_text,message_type){
            var obj = {
                "message_text" : message_text,
                "message_type" : message_type
            };
            console.log("show snack bar");
            this.$emit("showSnackBar",obj);
        }
    }

});

