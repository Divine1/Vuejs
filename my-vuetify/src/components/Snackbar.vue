<template>
    <div>
        <v-snackbar
            :timeout="timeout"
            :top="y === 'top'"
            :bottom="y === 'bottom'"
            :right="x === 'right'"
            :left="x === 'left'"
            :multi-line="mode === 'multi-line'"
            :vertical="mode === 'vertical'"
            v-model="snackbar"
            :color=" (text_type) ? 'red accent-4' : 'lime darken-4'"
            style="text-align:center"
        >
        {{ text }}
        <!-- <v-btn flat color="black" @click.native="snackbar = false">Close</v-btn> -->
      </v-snackbar>
    </div>
</template>

<script>
import {eventBus} from '../Eventbus';
export default {
    data () {
        return {
            snackbar: false,
            y: 'top',
            x: null,
            mode: '',
            timeout: 2000,
            text: '',
            text_type : false
        }
    },
    created(){
        console.log("created");
        eventBus.$on("showSnackBar",(obj) =>{
            console.log("caught event");

            if(obj.message_type == "error"){
               this.text_type = true;
            }
            else{
               this.text_type = false;
            }
            this.text = obj.message_text;
            this.snackbar = true;
        });
    }
}
</script>

<style>

</style>
