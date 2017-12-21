<template>
  <div id="sidebar" :class="{'showsidebar' : toggleSliderStatus, 'hidesidebar' : !toggleSliderStatus}">
      <div>Sidebar</div>
      <button @click="showHistory">ShowHistory</button>
      <div class="sidebarcontent">
        <ul>
            <li v-for="(navbarContent,index) in navbarContents" :key="index" @click.stop.prevent="firstLevelLiClick">
                <a v-if="navbarContent.subTopic.length == 0" @click="triggerContent" >{{navbarContent.topic}}</a>
                <a class="after" v-else>{{navbarContent.topic}}</a>
                <ul class="hideSecondLevelUl">
                    <li v-for="(subTopic,index1) in navbarContent.subTopic" :key="index1" @click.stop.prevent="secondLevelLiClick">
                        <a v-if="subTopic.subTopic.length == 0" @click="triggerContent" >{{subTopic.topic}}</a>
                        <a class="after" v-else>{{subTopic.topic}}</a>
                        <ul class="hideThirdLevelUl">
                          <li v-for="(subTopic1,index2) in subTopic.subTopic" :key="index2">
                            <a @click="triggerContent">{{subTopic1.topic}}</a>
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
import {eventBus} from './../Eventbus';
import {navbar} from './../json/navbar';
export default {
  data(){
    return {
      toggleSliderStatus : false,
      navbarContents : navbar,
      historyFirstLevel : [],
      historySecondLevel : []
    };
  },
  methods:{
    showHistory(){
      console.log("in showhistory");
      console.log(this.historyFirstLevel);
      console.log(this.historySecondLevel);
      for(var i=0;i<this.historyFirstLevel.length;i++){
        this.historyFirstLevel[i].className="";
      }
      for(var i=0;i<this.historySecondLevel.length;i++){
        this.historySecondLevel[i].className="";
      }
    },
    clearFirstLevel(){
      console.log("in clearFirstLevel");
      for(var i=0;i<this.historyFirstLevel.length;i++){
        this.historyFirstLevel[i].className="";
      }
    },
    clearSecondLevel(){
      console.log("in clearSecondLevel");
       for(var i=0;i<this.historySecondLevel.length;i++){
        this.historySecondLevel[i].className="";
      }
    },
    firstLevelLiClick(event){
      console.log("in  firstLevelLiClick: ");
      var lastChild = event.path[1].lastChild;
      var lastChildClassName = lastChild.className;
      this.clearSecondLevel();
      this.clearFirstLevel();
      if(lastChildClassName != "showSecondLevelUl"){
        lastChild.className="showSecondLevelUl";
      }
      this.historyFirstLevel.push(lastChild);
    },
    secondLevelLiClick(event){
      console.log("in  secondLevelLiClick");
      var lastChild = event.path[1].lastChild;
      var lastChildClassName = lastChild.className;
      this.clearSecondLevel();
      if(lastChildClassName != "showThirdLevelUl"){
        lastChild.className="showThirdLevelUl";
      }
      this.historySecondLevel.push(lastChild);
    },
    triggerContent(){

      console.log("triggercontent");
      this.clearSecondLevel();
      this.clearFirstLevel();
      this.toggleSliderStatus = false;
    }
  },
  watch : {
    toggleSliderStatus(val){
      console.log("watch toggleSliderStatus");
      console.log(val);

    }
  },
  created(){
    console.log("Sidebar created");
    eventBus.$on("toggleSliderEvent",(data) => {
      console.log("receiving event toggleSliderEvent");
      console.log(data);
      this.toggleSliderStatus = data;
    });
  }
}
</script>

<style>
#sidebar{
  position: absolute;
  background-color: bisque;
  min-height: 126px;
  min-width: 240px;
}
/* show/hide start*/

.showsidebar{
  display:block;
}
.hidesidebar{
  display:none;
}
.showSecondLevelUl{
  display:block !important;
}
.showThirdLevelUl{
  display:block !important;
}

/* show/hide end*/

.sidebarcontent .after:after{
  content: "\25B0";
  color: blue;
}
/* https://unicode-table.com/en/search/?q=down%20triangle */
.sidebarcontent ul{
  list-style-type: none;
}
.sidebarcontent > ul{
  background-color: blueviolet;
  margin:0;
  padding:0;
}
 .sidebarcontent > ul > li > ul{
  display: none;
} 

.sidebarcontent > ul > li > ul > li > ul{
  display: none;
} 

.sidebarcontent ul li a{
  display: block;
  line-height: 30px;
}
.sidebarcontent > ul ul { 
  padding-left: 20px;
}
</style>
