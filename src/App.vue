<template>
  <div id="app" :class="themeClass">
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { mapGetters } from "vuex";

export default Vue.extend({
  name: "App",
  components: {},
  computed: {
    ...mapGetters("$_common", {
      theme: "theme",
    }),
    themeClass(): string {
      return `theme-${this.theme}`;
    },
  },
});
</script>

<style />
