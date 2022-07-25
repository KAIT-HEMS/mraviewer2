# MRA Viewer

2022.07.22

## About MRA Viewer

MRA Viewer は、MRA データを読み込んで表示するプログラム。

## MRA データ

MRA データはエコーネットコンソーシアムの HP からダウンロードし、zip を解凍しておく。

## インストール

```shell
npm i
npm run build
```

## 実行

```shell
npm start
```

1. Chrome などの Web browser を起動し、localhost:3020 をアクセスする。
2. インストール直後の起動時には、Setting 画面が表示される
3. 「MRA folder を選択」ボタンをクリックする。
4. フォルダ選択画面で "mraData" folder を指定して「アップロード」ボタンをクリックする。
5. ポップアップ画面で「アップロード」ボタンをクリックする。
6. 正常に処理が終了すると、Version, Release の情報と、読み込んだ json file 名が表示される。
7. 画面右上の「家のアイコン」をクリックして、Home 画面に移動する。
8. 画面左上のプルダウンメニューから、機器オブジェクトとリリースを選択すると、対応した情報が表示される。

## 開発 memo

### Abstract

- MRA Viewer は、MRA の JSON file を読み込んで表示するプログラム。
- 以前のバージョンは MRA の個別の JSON を一つにまとめ、.js ファイルに記述して読み込んでいた。
- 今回のバージョンは、front end の FileRead を利用して、JSON file を直接読み込む。
- フロントエンドだけで開発する。実行は、web server の serve を利用する。

### フレームワーク、モジュール

以下のフレームワーク、モジュールを利用する。  

- フロントエンド: Vue CLI, Vue router, Bootstrap, TypeScript, Jest, fontawesome, VueX  

### プロジェクトセットアップ

Node.js, npm, Vue CLI, serve はグローバルにインストール済みとして話を進める。以下のコマンドで、インストール済みを確認。

```shell
node -v
npm -v
vue -V
```

`Vue CLI プロジェクトを作成`

```shell
vue ui
```

- 作成: 名前を入力 "mraviewer2" -> 次へ
- プリセット:　手動 -> 次へ
- 機能の有効化: TypeScript, Router, Linter, VueX, Unit Testing -> 次へ
- Pick a linter/formatter: ESLint + Prettier
- Pick a unit testing solution: Jest -> プロジェクトを作成する

`serve をインストール`

```sh
npm i serve
```

`Bootstrap をインストール`

```sh
npm i bootstrap
```

`fontawesome をインストール`

```sh
npm i @fortawesome/fontawesome-svg-core
npm i @fortawesome/free-solid-svg-icons
npm i @fortawesome/free-regular-svg-icons
npm i @fortawesome/vue-fontawesome@prerelease
```

./src/main.ts を修正。

修正前

```ts
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
```

修正後

```ts
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";  // 追加
import { library } from "@fortawesome/fontawesome-svg-core"; // 追加
/* import specific icons */
import { faHome } from "@fortawesome/free-solid-svg-icons";   // 追加
import { faCog } from "@fortawesome/free-solid-svg-icons";    // 追加
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons"; // 追加
/* add icons to the library */
library.add(faHome); // 追加
library.add(faCog); // 追加
library.add(faQuestionCircle); // 追加
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; // 追加

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
```

.src/components/BootstrapTest.vue を作成

```vue
<template>
  <div class="bootstraptest">
    Bootstrap Test
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
  </div>
</template>
```

./src/views/SettingView.vue を作成

```vue
<template>
  <div class="setting">
    <h1>This is a setting page</h1>
    <div>
      <BootstrapTest />
    </div>
  </div>
</template>

<script lang="ts">
import BootstrapTest from "@/components/BootstrapTest.vue";

export default {
  components: {
    BootstrapTest,
  },
};
</script>
```

./src/App.vue を修正

```html
  <nav>
    <div class="d-flex">
      <!-- ホームボタン -->
      <router-link to="/">
        <a class="btn" title="Home">
          <font-awesome-icon icon="home" style="color: #000000" />
        </a>
      </router-link>
      <!-- 設定ボタン -->
      <router-link to="/setting">
        <a class="btn" title="Setting">
          <font-awesome-icon icon="cog" style="color: #000000" />
        </a>
      </router-link>
      <!-- About ボタン -->
      <router-link to="/about">
        <a class="btn" title="About">
          <font-awesome-icon icon="question-circle" style="color: #000000" />
        </a>
      </router-link>
    </div>
  </nav>
```

./src/router/index.ts を修正、以下を追加。

```ts
  {
    path: "/setting",
    name: "setting",
    component: () =>
      import("../views/SettingView.vue"),
  },
```

`動作確認`

次のコマンドを入力すると、内部でWeb サーバーが立ち上がる。localhost:8080 にアクセス。

```shell
npm run serve
```

左上のアイコン(fontawesome)で画面が切り替わること、Setting page で緑、赤、黄色のボタン(bootstrap)を確認。

次のコマンドを入力すると、dist フォルダが作成され、その中にアップロード用 HTML/CSS/JS ファイルが作成される。

```shell
npm run build
```

次のコマンドを入力すると、ローカルにサーバーが起動し、dist 以下を公開する。

```shell
serve -s dist
```

ブラウザーで localhost:3000 をアクセスし、先ほどと同じ内容が表示されることを確認する。

サーバーの起動を容易にするために、package.json を修正する。"scripts" に以下の行を追加する。

```json
    "start": "serve -s dist",
```

VueX を使った global な store のために、./src/vuex.d.ts を新規作成しておく。

```ts
import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // ストアのステートを宣言する
  interface State {
  }

  // `this.$store` の型付けを提供する
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
```

これでプロジェクトの初期設定は完了。これ以降は、ソースを修正した場合、以下のコマンドでビルドし、実行する。

```shell
npm run build
npm start
```

### 設計

- MRA は FileReader を利用して読み込む。
  - 一度 read した JSON は localStorage に保存する
    - localStorage の容量は 5MBまで。MRA は現在 1.3MB なので、全て（definitions, metaData, nodeProfile, superClass, devices）をlocalStorage に保存する。
    - devices 以外は object を JSON に変換して localStorage に set する
    - devices は array なので、"devices" を key とする object を作成、JSON に変換、localStorage に set する
- 起動時の動作
  - VueX の store の初期化(src/store/index.ts)で、localStorage から MRA を get する。
    - metaData が undefined の場合、dataVersion と release の初期値を "unknown" とする。
  - HomeShowData.vue の created で metaData.metaData.dataVersion が "unknown" の場合、MRA data が保存されていないとみなし、SettingView を表示する

### store

store | description
:---|:---|
selectedEoj | Menu で選択された機器(EOJ)
selectedRelease | Menu で選択された Appendix Release version
isJapanese | Menu で選択された言語設定 Japanese / English
isShortNameVisible | Menu で選択された shortName 表示/非表示設定
definitions | MRA data
metaData | MRA data
nodeProfile | MRA data
superClass | MRA data
devices | MRA data
remark | remark を表示するためのデータ
bitmap | bitmap を表示するためのデータ

### Note

- デバッグ時に初期状態を再現するためには、localStorage をクリアする必要がある。
  - Chrome の DevTools の console で、"localStorage.clear();" を入力する
  - その後、プログラムを起動しなおす
