<template>
  <div>
    <p class="a">System.out.println("Hello world");</p>
    <p class="b">System.out.println("Hello world");</p>
    <p class="c">System.out.println("Hello world");</p>
    <p class="d">System.out.println("Hello world");</p>
    <p class="e">System.out.println("Hello world");</p>
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
.a {
  font-family: "Switzer-Black";
  font-size: 24px;
}
.b {
  font-family: "SpaceMono-Regular";
  font-size: 24px;
}
.c {
  font-family: "SpaceMono-Bold";
  font-size: 24px;
}
.d {
  font-family: "SpaceMono-Italic";
  font-size: 24px;
}
.e {
  font-family: "SpaceMono-BoldItalic";
  font-size: 24px;
}
</style>
