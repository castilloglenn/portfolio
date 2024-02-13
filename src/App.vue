<template>
  <v-app>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <!-- -->
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    drawer: false,
  }),
});
</script>
