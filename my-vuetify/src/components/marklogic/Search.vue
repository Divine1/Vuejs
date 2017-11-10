<template>
  <div>
    
      <div>
       <v-flex xs12 >
          <v-card style="">
              <v-card-title primary-title>
                  <div>
                      <div>
                          <form>
                              <div class="searchbox_parent"> 
                              <input  @keyup.enter="search()" autofocus class="searchbox" placeholder="Search Marklogic" type="text" v-model="text" />
                              <div class="div_icon">
                                  <i style="font-size:xx-large;color:#4285f4;" @click.prevent.stop="search()" class="material-icons">search</i>
                              </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </v-card-title>
          </v-card>
        </v-flex>
        
        <v-container fluid style="min-height: 0;" grid-list-lg v-for="(searchResult,index) in searchResults" :key="index">
          <v-layout row wrap>
          <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <!-- <div class="headline">Unlimited music now</div> -->
                <div>{{searchResult.description}}</div>
              </v-card-title>
            </v-card>
          </v-flex>
          </v-layout>
        </v-container>
        
        
        </div>
        <snackbar-p></snackbar-p>
  </div>
</template>

<script>
import Snackbar from './../Snackbar.vue';
import {eventBus} from './../../Eventbus';

import axios from 'axios';
export default {
   components : {
        "snackbar-p" : Snackbar
    },
  data(){
    return{
      text : "",
      searchResults : ""
    };
  },
  methods:{
      search(){
        console.log(this.text);
        console.log("in submit");
        if(this.text == ""){
            eventBus.showSnackbar("Please enter valid search term","error");
        }
        else{
            this.triggerAjax();
        }
      },
      triggerAjax(){

          //http://localhost:8080/marklogic/getall
        //http://localhost:8080/marklogic/migrate/
        //http://localhost:7001/marklogic/getresults?searchterm=product

          var url = "http://infosyspoc.com:7001/marklogic/getresults?searchterm="+this.text;
          axios.get(url, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
          })
          .then((response)  => {
              console.log(response);
              //eventBus.showSnackbar("Migration success","success");
              var responseData = response.data.searchresult;
              this.searchResults = responseData;
              console.log(responseData);
          })
          .catch((error) => {
              eventBus.showSnackbar("some error occured","error");
          });  
      }
  }
}
</script>

<style scoped>

 .searchbox_parent{
  display: inline-flex;
    width: 236%;
    border: 3px solid black;
}
.div_icon{
  border-left: 3px solid black;
  cursor: pointer;
}
.searchbox{
    padding: 6px;
    width: 100%;
    font-size: 19px;
    box-sizing: border-box;
    display: inline-block;
    color: #663399;
} 
</style>
