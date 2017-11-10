<template>
    <div>
        <v-layout row wrap>
          <v-flex xs12 sm8 md8 lg8>
            <carousal-ii></carousal-ii>
            <movingelements-ii></movingelements-ii>
            <flashitems-ii></flashitems-ii>
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
import Carousal from "./homepage/Carousal.vue";
import Flashitems from "./homepage/Flashitems.vue";
import Sidebar from "./corepage/Sidebar.vue";
import Movingelements from "./corepage/Movingelements.vue";

export default {
  components: {
    "carousal-ii": Carousal,
    "flashitems-ii": Flashitems,
    "sidebar-ii": Sidebar,
    "movingelements-ii" : Movingelements
  }
};
</script>


