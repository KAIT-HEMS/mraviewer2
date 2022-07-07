<!-- views/RemarkView.vue-->
<!-- 2022.07.07 -->

<template>
  <div class="remark">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-auto h5 mt-2">{{ remark.title }}</div>
          <div class="col"></div>
        </div>
      </div>
      <div class="card-body" id="about-this-tool">
        <div>
          <p>{{ remark.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RemarkView",
  computed: {
    remark: {
      get() {
        return this.$store.getters.remark;
      },
      set(value) {
        this.$store.dispatch("setRemark", value);
      },
    },
  },
});
</script>
