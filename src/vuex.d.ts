// vuex.d.ts
// VueX で定義する global な store の TypeScript の type 定義

import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // ストアのステートを宣言する
  interface State {
    isJapanese: boolean;
    isShortNameVisible: boolean;
    selectedEoj: string;
    selectedRelease: string;
    definitions: object;
    metaData: object;
    nodeProfule: object;
    superClass: object;
    devices: object[];
    remark: object;
    bitmap: object;
  }

  // `this.$store` の型付けを提供する
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
