<template>
  <v-container>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <p>{{ temp }}</p>
    <p>
      <a :href="url" target="_blank">{{ name }}</a>
    </p>
    <p>{{ thankYou }}</p>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "HomePage",
  data() {
    return {
      title: "Welcome!",
      message: "The newly designed portfolio is currently in progress.",
      temp: "For the mean time, you can check out my LinkedIn profile to know more about me.",
      name: "Allen Glenn Castillo",
      url: "https://www.linkedin.com/in/allen-glenn-castillo/",
      thankYou: "Thank you for visiting!",
    };
  },
};
</script>

<style scoped />
