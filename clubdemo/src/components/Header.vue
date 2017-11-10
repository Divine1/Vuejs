<template>
  <div>
   <v-toolbar dark color="pink" v-resize="onResize">
      <v-toolbar-side-icon :class="{hidetoolbar : !toolbar_isSmallscreen}"
      @click.stop="drawer = !drawer" dark 
      ></v-toolbar-side-icon>

            <v-avatar class="ml-2" size="36px" 
            @mouseover="logomouseover"
            @mouseout="logomouseleave" 
            :class="{'elevation-23' : logomouseactive}">
              
                <router-link to="/" tag="div" style="height: 36px; width: 36px;">
                  <img src="/public/logoii.png" alt="iiclub logo">
                </router-link>
            </v-avatar>
      <!-- <v-toolbar-title class="white--text">
        IICLUB
      </v-toolbar-title> -->
  <v-spacer></v-spacer>   
     <!--  <v-menu open-on-hover top offset-y> -->
       <span :class="{hidetoolbar : toolbar_isSmallscreen}" >
        <v-menu open-on-hover offset-y>
        <v-btn flat slot="activator">Courses</v-btn>
        <v-list>
          <v-list-tile v-for="(course,i) in courses" :key="course.id" @click="redirectHeaderInput(course.id,$event)">
            <v-list-tile-title>{{ course.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn flat @click="redirectHeaderInput('elearning',$event)">E-learning</v-btn>
      <v-btn flat @click="redirectHeaderInput('projects',$event)">Projects</v-btn>
      
      <v-menu open-on-hover offset-y>
        <v-btn flat slot="activator">Makerspace</v-btn>
        <v-list>
          <v-list-tile v-for="(makerspace_item,i) in makerspace" :key="makerspace_item.id" @click="redirectHeaderInput(makerspace_item.id,$event)"
          :disabled="makerspace_item.id == 'makerspace_0' ">
            <v-list-tile-title >{{ makerspace_item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu open-on-hover offset-y>
        <v-btn flat slot="activator">Workshops</v-btn>
        <v-list>
          <v-list-tile v-for="(workshop,i) in workshops" :key="workshop.id" @click="redirectHeaderInput(workshop.id,$event)"
          :disabled="workshop.id == 'workshop_0' ">
            <v-list-tile-title >{{ workshop.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

<v-menu open-on-hover offset-y>
        <v-btn flat slot="activator">Competitions</v-btn>
        <v-list>
          <v-list-tile v-for="(competition,i) in competitions" :key="competition.id" @click="redirectHeaderInput(competition.id,$event)"
          :disabled="competition.id == 'competition_0' ">
            <v-list-tile-title >{{ competition.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
       

      <v-btn flat @click="redirectHeaderInput('careers',$event)">CAREERS</v-btn>
      <v-btn flat @click="redirectHeaderInput('aboutus',$event)">ABOUTUS</v-btn>
</span>
    </v-toolbar>

     <v-layout wrap>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      dark
      absolute
      persistent
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <!-- <img src="https://randomuser.me/api/portraits/men/85.jpg" /> -->
            <img src="/public/logoii.png" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>IICLUB</v-list-tile-title>
          </v-list-tile-content>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      
        <v-list class="pt-0" dense>
         <v-list-group >
            <v-list-tile slot="item" @click="">
             
              <v-list-tile-content>
                <v-list-tile-title>COURSES</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-for="course in courses" v-bind:key="course.id" @click="redirectHeaderInput(course.id,$event)">
               
              <v-list-tile-content>
                <v-list-tile-title>{{ course.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>


          <v-list-tile @click="redirectHeaderInput('elearning',$event)">
          
          <v-list-tile-content>
            <v-list-tile-title>E-LEARNING</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile   @click="redirectHeaderInput('projects',$event)">
       
          <v-list-tile-content>
            <v-list-tile-title>PROJECTS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>  

            <v-list-group>
            <v-list-tile slot="item" @click="">
           
              <v-list-tile-content>
                <v-list-tile-title>MAKERSPACE</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-for="makerspace_item in makerspace" v-bind:key="makerspace_item.id" @click="redirectHeaderInput(makerspace_item.id,$event)"
            :disabled="makerspace_item.id == 'makerspace_0' ">
              <v-list-tile-content>
                <v-list-tile-title>{{ makerspace_item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>

<v-list-group>
            <v-list-tile slot="item" @click="">
             
              <v-list-tile-content>
                <v-list-tile-title>COMPETITIONS</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-for="competition in competitions" v-bind:key="competition.id" @click="redirectHeaderInput(competition.id,$event)"
            :disabled="competition.id == 'competition_0' ">
              <v-list-tile-content>
                <v-list-tile-title>{{ competition.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>


          <v-list-group>
            <v-list-tile slot="item" @click="">
              <v-list-tile-content>
                <v-list-tile-title>WORKSHOPS</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-for="workshop in workshops" v-bind:key="workshop.id" @click="redirectHeaderInput(workshop.id,$event)"
            :disabled="workshop.id == 'workshop_0' ">
              <v-list-tile-content >
                <v-list-tile-title>{{ workshop.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group> 

        </v-list>

<v-list class="pt-0" dense>
<v-list-tile   @click="redirectHeaderInput('careers',$event)">
       
          <v-list-tile-content>
            <v-list-tile-title>CAREERS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile   @click="redirectHeaderInput('aboutus',$event)">
       
          <v-list-tile-content>
            <v-list-tile-title>ABOUTUS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
</v-list>

    </v-navigation-drawer>
    </v-layout>
  </div>
</template>

<script>
import {eventBus} from './../Eventbus';
export default {
  data() {
    return {
      courses: [],
      makerspace: [],
      competitions: [],
      workshops: [],
      windowSize: {
        x: 0,
        y: 0
      },
      toolbar_isSmallscreen: false,
      drawer: false,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      logomouseactive: false,
    };
  },
  created(){
    this.courses = eventBus.courses;
    this.makerspace = eventBus.makerspace;
    this.competitions = eventBus.competitions;
    this.workshops = eventBus.workshops;
  },
  methods: {
    redirectHeaderInput(key, event) {
      console.log(key);
      console.log(event.target);
      eventBus.chooseHeaderRedirectionUrl(key,this.$router);
      //this.$router.push({path:"/tab/courses",query:{key : "asd"}});
    },
    onResize() {
      console.log("in resize");

      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      console.log(this.windowSize.x);
      if (this.windowSize.x <= 1094) {
        this.toolbar_isSmallscreen = true;
      } else {
        this.toolbar_isSmallscreen = false;
        this.drawer = false;
      }
      console.log("screen: " + this.toolbar_isSmallscreen);
    },
    small_list() {
      eventBus.testEventBus();
    },
    logomouseover() {
      console.log("over");
      this.logomouseactive = true;
    },
    logomouseleave() {
      console.log("leave");
      this.logomouseactive = false;
    }
  }
};
</script>
<style scoped>
.hidetoolbar {
  display: none;
}
.iiclublogo {
  background: url("/public/logoii.png");
  background-repeat: no-repeat;
  background-size: 30px 30px;
}
</style>
