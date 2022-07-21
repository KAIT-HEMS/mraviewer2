<!-- components/NavHeader.vue -->
<!-- 全てのページに共通な page navigation を作成する -->
<!-- Home, Setting, About page へのナビゲーションを記述している -->
<!-- Page を追加する場合は、このファイルを修正する -->

<template>
  <nav class="navbar navbar-expand-lg navbar-secondary bg-secondary">
    <!-- <div class="container-fluid"> -->
    <div class="row container-fluid">
      <div class="col-auto">
        <a class="navbar-brand" href="#" style="color: #ffffff">MRA Viewer</a>
      </div>
      <!-- <div class="col-auto">
        <p class="nav-p">{{ dataVersion }}</p>
      </div>
      <div class="col-auto">
        <p class="nav-p">{{ release }}</p>
      </div> -->
      <div class="col px-0"></div>

      <!-- <div class="d-flex"> -->
      <div class="col-auto">
        <!-- ホームボタン -->
        <router-link to="/">
          <a class="btn" title="Home">
            <font-awesome-icon icon="home" style="color: #eeeeee" />
          </a>
        </router-link>

        <!-- 設定ボタン -->
        <router-link to="/setting">
          <a class="btn" title="Setting">
            <font-awesome-icon icon="cog" style="color: #eeeeee" />
          </a>
        </router-link>

        <!-- About ボタン -->
        <router-link to="/about">
          <a class="btn" title="About">
            <font-awesome-icon icon="question-circle" style="color: #eeeeee" />
          </a>
        </router-link>
      </div>
    </div>
    <!-- </div> -->
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
console.log("NavHeader init");

export default defineComponent({
  name: "NavHeader",
  // data() {
  //   return {
  //     dataVersion: "unknown",
  //     release: "unknown",
  //   };
  // },
  // computed: {
  //   metaData: {
  //     get() {
  //       return this.$store.getters.metaData;
  //     },
  //     set(value) {
  //       this.$store.dispatch("setMetaData", value);
  //     },
  //   },
  // },
  created: function () {
    console.log("NavHeader is created");
    // this.dataVersion = "0.0.9";
    // this.release = "C";
    // this.dataVersion = this.metaData.metaData.dataVersion;
    // this.release = this.metaData.metaData.release;
  },
});
</script>

<style scoped>
.nav-p {
  margin-top: 0;
  margin-bottom: 0;
  color: #ffffff;
}
</style>
