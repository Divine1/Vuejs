<template>
  <div id="header" class="header">
      <div class="logo">
          <a>LOGO</a>
      </div>
      <div class="toolbar">
          <ul>
              <li v-for="(header,index) in headerData" :key="index">
                  <a>{{header.topic}}</a>
                  <ul>
                      <li v-for="(child1,index) in header.children" :key="index">
                          <a>{{child1.topic}}</a>
                          <ul>
                              <li v-for="(child2,index) in child1.categories" :key="index">
                                <a>{{child2.topic}}</a>
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
import {headerjson} from './jsonInput/header';
export default {
  data (){
      return {
          headerData: headerjson
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
  justify-content: space-between;
}

.header .logo{
    background-color: aqua;
    /* flex:.1; */
}
.header .logo{
    padding: 10px;
}
.toolbar{
    /* flex:2; */
}

.toolbar ul{
    list-style-type: none;
    margin:0;
    padding: 0;
    
}
/* first level start */
.toolbar > ul {
    display: flex;
    
    background-color: green;
}
.toolbar > ul > li > a{
    width: 80px;
    text-align: center;
    display: block;
    padding: 10px 3px;
}
.toolbar > ul > li:hover{
    background-color: greenyellow;
}

/* first level end */

/* second level start*/
.toolbar > ul > li > ul{
    display: none;
    position: absolute;
    top: 38px;
    width: 180px;
    background-color: blue;
}

.toolbar > ul > li:nth-child(4) > ul{
    width: 110px;
}
.toolbar > ul > li:nth-child(6) > ul{
    width: 110px;
}
.toolbar > ul > li:nth-child(5) > ul{
    width: 160px;
}

.toolbar > ul > li > ul > li > a{
    display: block;
    padding: 10px;
}

.toolbar > ul > li > ul > li:hover {
    background-color: pink;
}
.toolbar > ul > li:hover > ul{
    display: block;
}
/* second level end*/

/* third level start*/
.toolbar > ul > li > ul > li > ul{
    display: none;
    position: absolute;
    left: 180px;
    background-color: orange;
    margin-top: -38.4px;
    
}


.toolbar > ul > li:nth-child(1) > ul > li:nth-child(1) > ul {
    width: 170px;
}

.toolbar > ul > li:nth-child(1) > ul > li:nth-child(2) > ul {
    width: 100px;
}

.toolbar > ul > li:nth-child(1) > ul > li:nth-child(3) > ul {
    width: 230px;
}

.toolbar > ul > li:nth-child(1) > ul > li:nth-child(4) > ul {
    width: 170px;
}

.toolbar > ul > li:nth-child(1) > ul > li:nth-child(5) > ul {
    width: 170px;
}
.toolbar > ul > li:nth-child(1) > ul > li:nth-child(6) > ul {
    width: 100px;
}
.toolbar > ul > li:nth-child(1) > ul > li:nth-child(7) > ul {
    width: 80px;
}

.toolbar > ul > li > ul > li > ul > li > a{
    display: block;
    padding: 10px;
}
.toolbar > ul > li > ul > li > ul > li:hover{
    background-color: grey;
}

.toolbar > ul > li:hover > ul > li:hover > ul{
    display: block;
}
/* third level end*/

.toolbar > ul > li ul{
    z-index: 1;
}
</style>
