<template>
  <div> 
        <v-flex xs12 >
            <v-card style="">
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0"> Migration: Marklogic to MongoDB</h3>
                        <div>
                            <form>
                                <v-text-field
                                    label="Enter xml file name as in marklogic"
                                    v-model="xmlfilename"
                                    required  @keyup.enter="submit" 
                                ></v-text-field>
                                <v-btn color="primary" @click.prevent.stop="submit">{{submit_label}}</v-btn>
                                <v-btn color="warning" @click="clear()">clear</v-btn>
                            </form>
                        </div>
                    </div>
                </v-card-title>
            </v-card>
        </v-flex>
        <snackbar-p></snackbar-p>
  </div>
</template>

<script>
import axios from 'axios';
import Snackbar from './../Snackbar.vue';
import {eventBus} from './../../Eventbus';

export default {
    components : {
        "snackbar-p" : Snackbar
    },
  data(){
      return{
          xmlfilename : "",
          submit_label : "Submit"
      };
  },
  methods:{
      clear(){
          this.xmlfilename = "";
          eventBus.showSnackbar("Cleared","success");
      },
      submit(){  
          this.submit_label = "Loading..."
        console.log("in submit");
       if(this.xmlfilename == ""){
           eventBus.showSnackbar("Please enter valid xml filename","error");
       }
       else{
           this.triggerAjax();
       }
      },
      triggerAjax(){

          //http://localhost:8080/marklogic/getall
        //http://localhost:8080/marklogic/migrate/

          var url = "http://infosyspoc.com:7001/marklogic/migrate/"+this.xmlfilename;
          axios.get(url, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
          })
          .then((response)  => {
              console.log(response);
              eventBus.showSnackbar("Migration success","success");
              this.submit_label = "Submit";
          })
          .catch((error) => {
              eventBus.showSnackbar("Migration not success","error");
              this.submit_label = "Submit";
          });  
      }
  }
}
</script>

<style>

</style>

