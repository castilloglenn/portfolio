<template>
  <v-app>
    <navigation-drawer />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

import NavigationDrawer from "@/components/NavigationDrawer.vue";

export default Vue.extend({
  name: "App",
  components: {
    NavigationDrawer,
  },
});
</script>
