<template>
  <div class="modal">
    <p class="headline">Hi, I'm Glenn!</p>
    <p class="subtitle">
      Website is currently in progress, please <br />
      visit my <a :href="data">LinkedIn</a> to know more about me
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: "LandingPage",
  data() {
    return {
      data: "https://www.linkedin.com/in/castilloglenn",
    };
  },
};
</script>

<style scoped />
