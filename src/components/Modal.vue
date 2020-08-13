<template>
  <div class="backdrop" @click="setSrc">
    <img :src="src" alt="enlarged pic" />
  </div>
</template>

<script>
import { state, mutations } from "@/state.js";

export default {
  name: "Modal",
  methods: {
    setSrc(event) {
      if (event.target.classList.contains("backdrop")) {
        mutations.setSrc("");
      }
    },
  },
  computed: {
    src() {
      return state.src;
    },
  },
};
</script>

<style scoped lang="scss">
.backdrop {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  animation: show 0.2s;

  img {
    border: 3px solid #fff;
    box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
    display: block;
    margin: 60px auto;
    max-height: 80%;
    max-width: 60%;
  }
}

@keyframes show {
  from {
    opacity: 0;
    top: -100vh;
  }
  to {
    opacity: 1;
    top: 0;
  }
}
</style>