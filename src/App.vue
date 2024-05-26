<template>
  <div id="app">
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
  mounted() {
    document.body.classList.add(this.themeClass);
  },
  beforeDestroy() {
    document.body.classList.remove(this.themeClass);
  },
  watch: {
    themeClass(newClass, oldClass) {
      document.body.classList.remove(oldClass);
      document.body.classList.add(newClass);
    },
  },
});
</script>

<style scoped lang="scss">
#app {
  min-height: 100vh;
  min-width: 100vw;
}
</style>
