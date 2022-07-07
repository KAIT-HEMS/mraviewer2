<!-- App.vue -->
<!-- このアプリの Top View -->
<!-- NavHeader component を表示したのち、 -->
<!-- router-view で routing された page を表示する -->
<!-- config.json ファイルに記述された version と release date をブラウザーのコンソールに出力する -->

<template>
  <div class="container-fluid">
    <header>
      <NavHeader />
    </header>
    <main role="main" class="container-fluid px-0">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import NavHeader from "./components/NavHeader.vue";
import { config } from "./config";
console.log("MRA Viewer");
console.log("Version:", config.version);
console.log("Release date:", config.releaseDate);
console.log("App.vue: init");

export default {
  components: {
    NavHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* font-family: Consolas, "Courier New", Courier, Monaco, monospace;
  font-size: 0.9rem; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.card {
  margin-bottom: 0.5rem;
}
.card-header {
  padding: 0.25rem 1rem;
}
</style>
