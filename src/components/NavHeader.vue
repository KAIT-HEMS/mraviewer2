<!-- components/NavHeader.vue -->
<!-- 全てのページに共通な page navigation を作成する -->
<!-- Home, Setting, About page へのナビゲーションを記述している -->
<!-- Page を追加する場合は、このファイルを修正する -->

<template>
  <nav class="navbar navbar-expand-lg navbar-secondary bg-secondary">
    <div class="container-fluid">
      <div>
        <a class="navbar-brand" href="#" style="color: #ffffff">MRA Viewer</a>
      </div>

      <div class="d-flex">
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
  </nav>
</template>
