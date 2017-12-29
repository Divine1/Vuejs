<template>
  <div id="header" class="header">
      <div class="logo">
          <a>LOGO</a>
      </div>
      <div class="toolbar">
          <ul>
              <li v-for="(header,index) in headerData" :key="index">
                  <a v-if="header.subTopic.length == 0" @click="chooseRoute(header.topicId)">{{header.topic}}</a>
                  <a v-else>{{header.topic}}</a>
                  <ul>
                      <li v-for="(child1,index) in header.subTopic" :key="index">
                          <a v-if="child1.subTopic.length == 0" @click="chooseRoute(header.topicId,child1.topicId)">{{child1.topic}}</a>
                          <a v-else>{{child1.topic}}</a>
                          <ul>
                              <li v-for="(child2,index) in child1.subTopic" :key="index">
                                <a @click="chooseRoute(header.topicId,child1.topicId,child2.topicId)">{{child2.topic}}</a>
                             </li>
                          </ul>
                      </li>
                  </ul>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import {navbar} from './jsonInput/navbar';
export default {
  data (){
      return {
          headerData: navbar
        }
  },
  methods:{
      chooseRoute(header_topicId,child1_topicId,child2_topicId){
          console.log("in choose route");
          console.log(header_topicId);
          console.log(child1_topicId);
          console.log(child2_topicId);
          if(header_topicId == "courses"){
              this.$router.push({path : '/other'});
          }
          else{
              this.$router.push({path : ''});
          }
      }
  }
}
</script>

<style>
#header{
  background-color: yellow;
}
.header{
  display: flex;
}

.header .logo{
    background-color: aqua;
    flex:.1;
}
.header .logo{
    padding: 10px;
}
.toolbar{
    flex:2;
}

.toolbar ul{
    list-style-type: none;
    margin:0;
    padding: 0;
    
}
/* first level start */
.toolbar > ul {
    display: flex;
    flex-wrap: wrap;
    background-color: green;
}
.toolbar > ul > li{
    width: 110px;
}
.toolbar > ul > li:hover{
    background-color: greenyellow;
}

.toolbar > ul > li > a{
    display: block;
    padding: 10px;
}
/* first level end */

/* second level start*/
.toolbar > ul > li > ul{
    display: none;
    position: absolute;
    top: 38px;
    width: 110px;
    background-color: blue;
}

.toolbar > ul > li > ul > li:hover {
    background-color: pink;
}
.toolbar > ul > li:hover > ul{
    display: block;
}
.toolbar > ul > li:nth-child(1) > ul{
    width: 170px;
}
.toolbar > ul > li:nth-child(4) > ul{
    width: 150px;
}
/* second level end*/

/* third level start*/

.toolbar > ul > li > ul > li > ul{
    display: none;
    position: absolute;
    left: 170px;
    width: 165px;
    background-color: orange;
    margin-top: -38px;
}


.toolbar > ul > li > ul > li > ul > li:hover{
    background-color: grey;
}

.toolbar > ul > li:hover > ul > li:hover > ul{
    display: block;
}

.toolbar > ul > li:nth-child(1) > ul > li:nth-child(2) > ul{
    width: 85px;
}
.toolbar > ul > li:nth-child(1) > ul > li:nth-child(3) > ul{
    width: 215px;
}
.toolbar > ul > li:nth-child(1) > ul > li:nth-child(4) > ul{
    display: none;
}
.toolbar > ul > li:nth-child(1) > ul > li:nth-child(6) > ul{
    width: 95px;
}
.toolbar > ul > li:nth-child(1) > ul > li:nth-child(7) > ul{
    width: 80px;
}
/* third level end*/

.toolbar > ul > li ul{
    z-index: 1;
}

.toolbar > ul > li ul li a{
    display: block;
    padding: 10px;
}

.toolbar > ul > li ul li a:active{
    background-color: red;
}
</style>
