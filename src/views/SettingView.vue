<!-- views/SettingView.vue -->
<!-- Setting page を作成する -->
<!-- SettingServerAndDevice component を利用する -->

<template>
  <div class="setting">
    <div>
      <ImportMRA />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImportMRA from "../components/ImportMRA.vue";
console.log("SettingView init");

export default defineComponent({
  name: "SettingView",
  components: {
    ImportMRA,
  },
});
</script>

<style scoped></style>
