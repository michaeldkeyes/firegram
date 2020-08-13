<template>
  <div class="img-grid" v-if="docs">
    <div v-for="doc in docs" :key="doc.id">
      <div class="img-wrap">
        <img @click="setSrc(doc.url)" :src="doc.url" alt="uploaded pic" />
      </div>
    </div>
  </div>
</template>

<script>
import { state, mutations } from "@/state.js";

export default {
  name: "ImageGrid",
  methods: {
    setSrc(url) {
      mutations.setSrc(url);
    },
  },
  computed: {
    docs() {
      return state.docs;
    },
  },
};
</script>

<style lang="scss" scoped>
.img-grid {
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, 320px);
  justify-content: center;
  margin: 20px auto;
}

.img-wrap {
  height: 0;
  overflow: hidden;
  padding: 50% 0;
  position: relative;
  opacity: 0.8;
  transition: opacity 0.3s linear;

  &:hover {
    opacity: 1;
  }

  img {
    max-width: 150%;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>