<!-- views/HomeView.vue -->
<!-- Home page を作成する -->
<!-- HomeShowData component を利用する -->

<template>
  <div class="home">
    <HomeShowData />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeShowData from "@/components/HomeShowData.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HomeShowData,
  },
});
</script>

<style scoped></style>
