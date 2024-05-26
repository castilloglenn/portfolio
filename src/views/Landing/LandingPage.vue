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

<style scoped lang="scss">
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.headline {
  font-family: "Switzer-Black";
  font-size: 96px;
}

.subtitle {
  font-family: "Switzer-Regular";
  font-size: 24px;
  text-align: center;
}
</style>
