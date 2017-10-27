<template>
  <div>
    <v-toolbar dark color="green" v-resize="onResize">
      <v-toolbar-side-icon :class="{hidetoolbar : !toolbar_isSmallscreen}"
      @click.stop="drawer = !drawer" dark 
      ></v-toolbar-side-icon>

            <v-avatar class="ml-2" size="36px" 
            @mouseover="logomouseover"
            @mouseout="logomouseleave" 
            :class="{'elevation-23' : logomouseactive}">
              <img src="/public/logoii.png" alt="iiclub logo">
            </v-avatar>
      <!-- <v-toolbar-title class="white--text">
        IICLUB
      </v-toolbar-title> -->
 <v-spacer></v-spacer>      
     <!--  <v-menu open-on-hover top offset-y> -->
       <span :class="{hidetoolbar : toolbar_isSmallscreen}">
        <v-menu open-on-hover offset-y>
        <v-btn flat slot="activator">Courses</v-btn>
        <v-list>
          <v-list-tile v-for="(course,i) in courses" :key="course.id" @click="mylist(course.id,$event)">
            <v-list-tile-title>{{ course.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn flat >E-learning</v-btn>
      <v-btn flat >Projects</v-btn>
      
      <v-menu open-on-hover offset-y>
        <v-btn flat slot="activator">Makerspace</v-btn>
        <v-list>
          <v-list-tile v-for="(makerspace_item,i) in makerspace" :key="makerspace_item.id" @click="mylist(makerspace_item.id,$event)"
          :disabled="makerspace_item.id == 'makerspace_0' ">
            <v-list-tile-title >{{ makerspace_item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu open-on-hover offset-y>
        <v-btn flat slot="activator">Workshops</v-btn>
        <v-list>
          <v-list-tile v-for="(workshop,i) in workshops" :key="workshop.id" @click="mylist(workshop.id,$event)"
          :disabled="workshop.id == 'workshop_0' ">
            <v-list-tile-title >{{ workshop.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>

      </v-menu>

<v-menu open-on-hover offset-y>
        <v-btn flat slot="activator">Competitions</v-btn>
        <v-list>
          <v-list-tile v-for="(competition,i) in competitions" :key="competition.id" @click="mylist(competition.id,$event)"
          :disabled="competition.id == 'competition_0' ">
            <v-list-tile-title >{{ competition.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      
        <v-btn flat >CAREERS</v-btn>
      <v-btn flat >ABOUTUS</v-btn>
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
            <v-list-tile slot="item" @click="small_list()">
             
              <v-list-tile-content>
                <v-list-tile-title>COURSES</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-for="course in courses" v-bind:key="course.id" @click="small_list()">
               
              <v-list-tile-content>
                <v-list-tile-title>{{ course.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>


          <v-list-tile @click="small_list()">
          
          <v-list-tile-content>
            <v-list-tile-title>E-LEARNING</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile   @click="small_list()">
       
          <v-list-tile-content>
            <v-list-tile-title>PROJECTS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>  

            <v-list-group>
            <v-list-tile slot="item" @click="small_list()">
           
              <v-list-tile-content>
                <v-list-tile-title>MAKERSPACE</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-for="makerspace_item in makerspace" v-bind:key="makerspace_item.id" @click="small_list()"
            :disabled="makerspace_item.id == 'makerspace_0' ">
              <v-list-tile-content>
                <v-list-tile-title>{{ makerspace_item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>

<v-list-group>
            <v-list-tile slot="item" @click="small_list()">
             
              <v-list-tile-content>
                <v-list-tile-title>COMPETITIONS</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-for="competition in competitions" v-bind:key="competition.id" @click="small_list()"
            :disabled="competition.id == 'competition_0' ">
              <v-list-tile-content>
                <v-list-tile-title>{{ competition.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>


          <v-list-group>
            <v-list-tile slot="item" @click="small_list()">
              <v-list-tile-content>
                <v-list-tile-title>WORKSHOPS</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-for="workshop in workshops" v-bind:key="workshop.id" @click="small_list()"
            :disabled="workshop.id == 'workshop_0' ">
              <v-list-tile-content >
                <v-list-tile-title>{{ workshop.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group> 


<v-list-tile @click="small_list()">
          
          <v-list-tile-content>
            <v-list-tile-title>CAREER</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        
        <v-list-tile   @click="small_list()">
       
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
export default {
  data: () => ({
    courses: [
      { id: "courses_1", title: "Automation" },
      { id: "courses_2", title: "Robotics" },
      { id: "courses_3", title: "Electronics" },
      { id: "courses_4", title: "IOT" },
      { id: "courses_5", title: "IT Courses" },
      { id: "courses_6", title: "AeroModeling" },
      { id: "courses_7", title: "Design and Simulation" }
    ],
    makerspace: [
      { id: "makerspace_0", title: "Select City" },
      { id: "makerspace_1", title: "Chennai" },
      { id: "makerspace_2", title: "Mumbai" },
      { id: "makerspace_3", title: "Hyderabad" },
      { id: "makerspace_4", title: "Bangalore" }
    ],
    competitions: [
      { id: "competition_0", title: "Select City" },
      { id: "competition_1", title: "Chennai" },
      { id: "competition_2", title: "Mumbai" },
      { id: "competition_3", title: "Hyderabad" },
      { id: "competition_4", title: "Bangalore" }
    ],
    workshops: [
      { id: "workshop_0", title: "Select Department" },
      { id: "workshop_1", title: "ECE" },
      { id: "workshop_2", title: "EEE" },
      { id: "workshop_3", title: "CSE & IT" },
      { id: "workshop_4", title: "CIVIL" },
      { id: "workshop_5", title: "MECHANICAL" }
    ],
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
    logomouseactive: false
  }),
  methods: {
    mylist(i, event) {
      console.log(event);
      console.log(this.items);
      console.log("i: " + i);
    }
  },

  mounted() {
    this.onResize();
  },

  methods: {
    mylist(key, event) {},
    onResize() {
      console.log("in resize");

      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      console.log(this.windowSize.x);
      if (this.windowSize.x <= 1093) {
        this.toolbar_isSmallscreen = true;
      } else {
        this.toolbar_isSmallscreen = false;
        this.drawer = false;
      }
      console.log("screen: " + this.toolbar_isSmallscreen);
    },
    small_list() {},
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
