<template>
  <div>
      <v-layout row wrap>
          <v-flex xs12 sm8 md8 lg8>
            <router-view></router-view>
            <span class="hidden-sm-and-up">
              <sidebar-ii></sidebar-ii>
              </span>
          </v-flex>
          <v-flex sm4 md4 lg4 class="hidden-xs-only"> 
              <sidebar-ii></sidebar-ii>
          </v-flex>
      </v-layout>
  </div>
</template>

<script>
import Sidebar from "./corepage/Sidebar.vue";

export default {
  components: {
    "sidebar-ii": Sidebar
  }
};
</script>
