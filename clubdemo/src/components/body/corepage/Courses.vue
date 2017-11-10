<template>
  <div>
      <div>
      
      <h6>{{courseTitle}}</h6>
     
      <v-layout row wrap>
        <v-flex class="ml-2 mt-2" xs12 md5 v-for="(category,i) in courseCategories" :key="category.id">
          
        <v-card>
          <v-card-media src="/public/docks.jpg" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{category.topic}}</h3>
              <div>{{category.shortdescription}}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>

        </v-flex>
     </v-layout>

      </div>      
  </div>
</template>


<script>
import {eventBus} from './../../../Eventbus';

export default {
  data() {
    return {
      testCourses: "Courses tab",
      querykey : "jjj",
      courseCategories : [],
      courseTitle : ""
      
    };
  },
  mounted(){
    this.querykey = this.$route.query.key;
    console.log("mounted");
     var course = eventBus.getCourseCategories(this.querykey);
     this.courseCategories = course.categories;
     this.courseTitle = course.title;
      console.log(course.categories);
    
  },
  watch:{
    '$route'(to,from){
      console.log("watching route");
      this.querykey = to.query.key;
      var course = eventBus.getCourseCategories(this.querykey);
      this.courseCategories = course.categories;
      this.courseTitle = course.title;
      console.log(course.categories);
    }
  }
};
</script>

<style>

</style>
