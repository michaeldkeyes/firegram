<template>
  <div class="title">
    <h1>FireGram</h1>
    <h2>Your Pictures</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
@import "@/variables.scss";

.title {
  h1 {
    color: $primary;
    font-size: 1.2rem;
    letter-spacing: 2px;
    font-weight: normal;
  }

  h2,
  p {
    text-align: center;
  }

  h2 {
    margin-top: 60px;
    font-size: 2.6rem;
  }
}
</style>
