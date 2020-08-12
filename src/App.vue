<template>
  <div id="app">
    <Title />
  </div>
</template>

<script>
import Title from "./components/Title.vue";

export default {
  name: "App",
  components: {
    Title,
  },
};
</script>

<style lang="scss">
@import "_config.scss";

body {
  font-family: "Noto Serif";
  color: $secondary;
}

#app {
  max-width: 960px;
  margin: 0 auto;
}
</style>
