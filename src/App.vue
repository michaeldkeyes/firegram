<template>
  <div id="app">
    <Title />
    <UploadForm @useFirestore="useFirestore" />
    <ImageGrid />
    <Modal v-if="src != ''" />
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";

import { projectFirestore } from "@/firebase/config";

import { state } from "@/state.js";

export default {
  name: "App",
  components: {
    Title,
    UploadForm,
    ImageGrid,
    Modal,
  },
  methods: {
    useFirestore: function (collection) {
      projectFirestore
        .collection(collection)
        .orderBy("createdAt", "desc")
        .onSnapshot((snap) => {
          let documents = [];
          snap.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id });
          });
          state.docs = documents;
        });
    },
  },
  computed: {
    src() {
      return state.src;
    },
  },
  created: function () {
    this.useFirestore("images");
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
  max-width: 1200px;
  margin: 0 auto;
}
</style>
