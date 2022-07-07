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

<style scoped>
/* .form-check {
  padding-top: 0.5rem;
  padding-left: 2rem;
}
#request-response-body {
  margin: 0;
  padding: 0;
}
#request-response-wrapper {
  height: 20em;
  overflow-y: scroll;
}
#request-response-list li {
  font-family: Consolas, "Courier New", Courier, Monaco, monospace;
  font-size: 90%;
  padding: 0.2em 1em;
}
#message-monitor-body {
  margin: 0;
  padding: 0;
}
#message-list-wrapper {
  height: 30em;
  overflow-y: scroll;
}
#message-list li {
  font-family: Consolas, "Courier New", Courier, Monaco, monospace;
  font-size: 90%;
  padding: 0.2em 1em;
  cursor: pointer;
}
#message-list li span {
  display: inline-block;
}
#message-list li span.col1 {
  width: 5em;
}
#message-list li span.col2 {
  width: 3em;
} */
</style>
