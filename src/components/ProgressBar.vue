<template>
  <div class="progress-bar" :style="getWidth"></div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: ["width"],
  computed: {
    getWidth() {
      return "width: " + this.width + "%";
    },
  },
  watch: {
    width: function () {
      if (this.width === 100) {
        this.$emit("setFile");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.progress-bar {
  background: $primary;
  height: 5px;
  margin-top: 20px;
}
</style>