<!-- components/SettingServerAndDevice.vue -->
<!-- Setting page の Server 設定 と Device 設定 component を作成する -->

<template>
  <div class="importMRA">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-auto h5 mt-2">Import MRA</div>
          <div class="col"></div>
          <div class="col-auto mt-2">{{ folderUrl }}</div>
          <div class="col-auto"></div>
        </div>
      </div>
      <div class="card-body pt-2 pb-2">
        <form>
          <div class="input-group">
            <div class="uploader">
              <input
                type="file"
                class="form-control"
                v-on:change="importFiles($event)"
                webkitdirectory
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
console.log("ImportMRA init");

export default defineComponent({
  name: "ImportMRA",
  data() {
    return {
      folderURL: "",
    };
  },
  computed: {
    definitions: {
      get() {
        return this.$store.getters.definitions;
      },
      set(value) {
        this.$store.dispatch("setDefinitions", value);
      },
    },
    metaData: {
      get() {
        return this.$store.getters.metaData;
      },
      set(value) {
        this.$store.dispatch("setMetaData", value);
      },
    },
    nodeProfile: {
      get() {
        return this.$store.getters.nodeProfile;
      },
      set(value) {
        this.$store.dispatch("setNodeProfile", value);
      },
    },
    superClass: {
      get() {
        return this.$store.getters.superClass;
      },
      set(value) {
        this.$store.dispatch("setSuperClass", value);
      },
    },
    devices: {
      get() {
        return this.$store.getters.devices;
      },
      set(value) {
        this.$store.dispatch("setDevices", value);
      },
    },
  },
  methods: {
    // MRA folder 指定時の処理
    importFiles: function (event: any) {
      console.log("importFiles");
      let readerResult: string | ArrayBuffer = "";
      let files = event.target.files;
      for (const file of files) {
        if (!file.name.includes(".json")) {
          console.log("Skip import", file.name);
          continue;
        }
        let reader = new FileReader();
        reader.readAsText(file); // 指定したファイルを読み、内容をテキストとして .result に格納する。
        switch (file.name) {
          case "definitions.json":
            console.log("Found definitions.json");
            // reader.onload = (event) => {
            reader.onload = () => {
              // 読み込み操作が正常に完了するたびにトリガされるイベントハンドラ。
              if (reader.result) {
                readerResult = reader.result;
                if (typeof readerResult == "string") {
                  this.definitions = JSON.parse(readerResult);
                }
              }
            };
            reader.onerror = function () {
              console.log(reader.error);
            };
            break;
          case "metaData.json":
            console.log("Found metaData.json");
            // reader.onload = (event) => {
            reader.onload = () => {
              // 読み込み操作が正常に完了するたびにトリガされるイベントハンドラ。
              if (reader.result) {
                readerResult = reader.result;
                if (typeof readerResult == "string") {
                  this.metaData = JSON.parse(readerResult);
                }
              }
            };
            reader.onerror = function () {
              console.log(reader.error);
            };
            break;
          case "0x0EF0.json":
            console.log("Found 0x0EF0.json");
            // reader.onload = (event) => {
            reader.onload = () => {
              // 読み込み操作が正常に完了するたびにトリガされるイベントハンドラ。
              if (reader.result) {
                readerResult = reader.result;
                if (typeof readerResult == "string") {
                  this.nodeProfile = JSON.parse(readerResult);
                }
              }
            };
            reader.onerror = function () {
              console.log(reader.error);
            };
            break;
          case "0x0000.json":
            console.log("Found 0x0000.json");
            // reader.onload = (event) => {
            reader.onload = () => {
              // 読み込み操作が正常に完了するたびにトリガされるイベントハンドラ。
              if (reader.result) {
                readerResult = reader.result;
                if (typeof readerResult == "string") {
                  this.superClass = JSON.parse(readerResult);
                }
              }
            };
            reader.onerror = function () {
              console.log(reader.error);
            };
            break;
          default: // devices
            // mcrule は処理しない
            if (!file.name.includes("mcrule")) {
              console.log("Found device:", file.name);
              // reader.onload = (event) => {
              reader.onload = () => {
                // 読み込み操作が正常に完了するたびにトリガされるイベントハンドラ。
                if (reader.result) {
                  readerResult = reader.result;
                  if (typeof readerResult == "string") {
                    this.devices.push(JSON.parse(readerResult));
                  }
                }
              };
              reader.onerror = function () {
                console.log(reader.error);
              };
            }
        }
      }
    },
  },

  created: function () {
    console.log("Setting page: Import MRA is created");
  },
});
</script>

<style scoped>
.uploader {
  position: relative;
  border-radius: 4px;
  width: 160px;
  height: 40px;
  background: #cccccc;
  overflow: hidden;
}

.uploader:before {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 12px;
  bottom: 12px;
  left: 12px;
  right: 12px;
  /* border: dashed 2px #fafafa; */
  color: #222222;
  font-size: 16px;
  content: "MRA folder を選択";
  pointer-events: none;
}

.uploader input {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 999px;
  height: 999px;
  font-size: 999px;
  opacity: 0;
}
</style>