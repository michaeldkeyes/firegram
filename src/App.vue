<template>
  <div id="app">
    <Title />
    <UploadForm />
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import UploadForm from "./components/UploadForm";

export default {
  name: "App",
  components: {
    Title,
    UploadForm,
  },
};
</script>

<style lang="scss">
@import "variables.scss";

body {
  font-family: "Noto Serif";
  color: $secondary;
}

#app {
  max-width: 960px;
  margin: 0 auto;
}
</style>
