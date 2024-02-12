<template>
  <div>
    <h1>Welcome! the newly designed portfolio is currently in progress.</h1>
    <p>
      For the mean time, you can check out my LinkedIn profile to know more
      about me.
    </p>
    <a href="https://www.linkedin.com/in/allen-glenn-castillo/" target="_blank">
      Allen Glenn E. Castillo
    </a>
    <p>Thank you!</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      sample: "Testing!",
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
