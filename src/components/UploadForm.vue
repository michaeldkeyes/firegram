<template>
  <form>
    <input type="file" @change="changeHandler" />
    <div class="output">
      <div v-if="error != null" class="error">{{error}}</div>
      <div v-if="file != null">{{file.name}}</div>
    </div>
  </form>
</template>

<script>
export default {
  name: "UploadForm",
  data: function () {
    return {
      file: null,
      types: ["image/png", "image/jpeg"],
      error: null,
    };
  },
  methods: {
    changeHandler: function (event) {
      let selected = event.target.files[0];

      if (selected && this.types.includes(selected.type)) {
        this.file = selected;
        this.error = null;
      } else {
        this.file = null;
        this.error = "Please select an image file (png or jpeg";
      }
    },
  },
};
</script>

<style>
</style>