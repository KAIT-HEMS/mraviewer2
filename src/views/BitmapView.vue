<!-- views/BitmapView.vue-->
<!-- 2022.07.07 -->

<template>
  <div class="remark">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-auto h5 mt-2">{{ bitmap.title }}</div>
          <div class="col"></div>
        </div>
      </div>
      <div class="card-body">
        <div class="container">
          <pre>{{ bitmap.content }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BitmapView",
  computed: {
    bitmap: {
      get() {
        return this.$store.getters.bitmap;
      },
      set(value) {
        this.$store.dispatch("setBitmap", value);
      },
    },
  },
});
</script>
