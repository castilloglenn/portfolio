<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    class="pt-4"
    color="grey lighten-3"
    mini-variant
  >
    <v-avatar
      v-for="n in 6"
      :key="n"
      :color="`grey ${n === 1 ? 'darken' : 'lighten'}-1`"
      :size="n === 1 ? 36 : 20"
      class="d-block text-center mx-auto mb-9"
    />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavigationDrawer",
  data: () => ({
    drawer: true,
  }),
});
</script>

<style scoped />
