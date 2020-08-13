<template>
  <form>
    <label>
      <input type="file" @change="changeHandler" />
      <span>+</span>
    </label>
    <div class="output">
      <div v-if="error != null" class="error">{{error}}</div>
      <div v-if="file != null">{{file.name}}</div>
      <ProgressBar v-if="file != null" :width="progress" @setFile="setFile" />
    </div>
  </form>
</template>

<script>
import { projectStorage, projectFirestore, timestamp } from "@/firebase/config";
import ProgressBar from "./ProgressBar";

export default {
  name: "UploadForm",
  components: {
    ProgressBar,
  },
  data: function () {
    return {
      file: null,
      types: ["image/png", "image/jpeg"],
      error: null,
      progress: 0,
    };
  },
  methods: {
    changeHandler: function (event) {
      let selected = event.target.files[0];

      if (selected && this.types.includes(selected.type)) {
        this.file = selected;
        this.error = null;
        this.useStorage(this.file);
        this.$emit("useFirestore", "images");
      } else {
        this.file = null;
        this.error = "Please select an image file (png or jpeg";
      }
    },
    useStorage: function (file) {
      const storageRef = projectStorage.ref(file.name);
      const collectionRef = projectFirestore.collection("images");

      storageRef.put(file).on(
        "state_changed",
        (snap) => {
          this.progress = (snap.bytesTransferred / snap.totalBytes) * 100;
          console.log(this.progress);
        },
        (err) => {
          this.error = err;
        },
        async () => {
          this.url = await storageRef.getDownloadURL();
          const createdAt = timestamp();
          collectionRef.add({ url: this.url, createdAt });
        }
      );
    },

    setFile: function () {
      this.file = null;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/variables.scss";

form {
  margin: 30px auto 10px;
  text-align: center;
}

label {
  border: 1px solid $primary;
  border-radius: 50%;
  color: $primary;
  cursor: pointer;
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  height: 30px;
  line-height: 30px;
  margin: 10px auto;
  width: 30px;

  input {
    height: 0;
    opacity: 0;
    width: 0;
  }

  &:hover {
    background: $primary;
    color: #fff;
  }
}

.output {
  font-size: 0.8rem;
  height: 60px;
}

.error {
  color: $error;
}
</style>