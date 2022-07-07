<!-- components/HomeShowData.vue -->
<!-- Home page の HomeShowData component を作成する -->

<template>
  <div class="homeShowData">
    <div class="card">
      <div class="card-header py-2">
        <div class="row">
          <!-- device selection -->
          <div class="col-auto py-1 pe-1">
            <select
              class="custom-select p-1"
              v-model="selectedEoj"
              v-on:change="onDeviceSelection"
            >
              <option
                v-for="device in deviceNames"
                v-bind:key="device.id"
                v-bind:value="device.eoj"
              >
                {{ device.name }}
              </option>
            </select>
          </div>

          <!-- release version selection -->
          <div class="col-auto py-1 px-0">
            <select
              class="custom-select p-1"
              v-model="selectedRelease"
              v-on:change="onReleaseSelection"
            >
              <option v-for="release in releases" v-bind:key="release.id">
                {{ release }}
              </option>
            </select>
          </div>
          <div class="col px-0"></div>

          <!-- Language selection -->
          <div class="col-auto ps-0">
            <div class="input-group border ml-2">
              <div class="input-group-prepend">
                <span class="input-group-text">Language</span>
              </div>
              <div class="form-check form-check-inline pt-2 ms-2">
                <input
                  type="radio"
                  class="form-check-input"
                  id="japanese"
                  v-model="isJapanese"
                  v-bind:value="true"
                  v-on:change="onLanguageSelection"
                />
                <label for="japanese" class="form-check-label">Japanese</label>
              </div>
              <div class="form-check form-check-inline pt-2 mr-0">
                <input
                  type="radio"
                  class="form-check-input"
                  id="english"
                  v-model="isJapanese"
                  v-bind:value="false"
                  v-on:change="onLanguageSelection"
                />
                <label for="english" class="form-check-label">English</label>
              </div>
            </div>
          </div>

          <!-- shortName display control -->
          <div class="col-auto ps-0">
            <div class="input-group border ml-2">
              <div class="input-group-prepend">
                <span class="input-group-text">shortName</span>
              </div>
              <div class="form-check form-check-inline pt-2 ms-2">
                <input
                  type="radio"
                  class="form-check-input"
                  id="name-on"
                  v-model="isShortNameVisible"
                  v-bind:value="true"
                  v-on:change="onShortNameVisible"
                />
                <label for="japanese" class="form-check-label">On</label>
              </div>
              <div class="form-check form-check-inline pt-2 mr-0">
                <input
                  type="radio"
                  class="form-check-input"
                  id="name-off"
                  v-model="isShortNameVisible"
                  v-bind:value="false"
                  v-on:change="onShortNameVisible"
                />
                <label for="english" class="form-check-label">Off</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card-body">
        <!-- Fixed line for title-->
        <table class="table table-bordered table-sm my-0">
          <thead class="thead-light">
            <tr>
              <template v-if="isJapanese">
                <th scope="col" class="col1">プロパティ</th>
                <th scope="col" class="col2">EPC</th>
                <th scope="col" class="col3">値域</th>
                <th scope="col" class="col4">データ型</th>
                <th scope="col" class="col5">データ サイズ</th>
                <th scope="col" class="col6">単位</th>
                <th scope="col" class="col7" style="word-wrap: break-word">
                  アクセスルール
                </th>
                <th scope="col" class="col8">必須</th>
                <th scope="col" class="col9">状変時アナウンス</th>
                <th scope="col" class="col10">備考</th>
              </template>
              <template v-else>
                <th scope="col" class="col1">Property name</th>
                <th scope="col" class="col2">EPC</th>
                <th scope="col" class="col3">Value range</th>
                <th scope="col" class="col4">Data type</th>
                <th scope="col" class="col5">Data size</th>
                <th scope="col" class="col6">Unit</th>
                <th scope="col" class="col7">Access rule</th>
                <th scope="col" class="col8">Mandatory</th>
                <th scope="col" class="col9">Announcement at status change</th>
                <th scope="col" class="col10">Remark</th>
              </template>
            </tr>
          </thead>
        </table>

        <!-- Scrollable for contents data area -->
        <div id="scrollWindow">
          <table class="table table-sm">
            <tbody>
              <tr
                v-for="rowData in rowDataArray"
                v-bind:key="rowData.id"
                tabindex="0"
              >
                <td class="col1">{{ rowData.name }}</td>
                <td class="col2">{{ rowData.epc }}</td>

                <!-- Column data value range start -->
                <!-- state -->
                <template v-if="rowData.propType === 'state'">
                  <table>
                    <tr
                      v-for="item in rowData.range"
                      v-bind:key="item.id"
                      tabindex="0"
                    >
                      <!-- <template v-if="isJapanese && isShortNameVisible"> -->
                      <td v-if="isJapanese && isShortNameVisible" class="col3">
                        {{ item.edt }}:{{ item.descriptions.ja }}:{{
                          item.name
                        }}
                      </td>
                      <!-- </template> -->
                      <!-- <template v-else-if="isJapanese && !isShortNameVisible"> -->
                      <td
                        v-else-if="isJapanese && !isShortNameVisible"
                        class="col3"
                      >
                        {{ item.edt }}:{{ item.descriptions.ja }}
                      </td>
                      <!-- </template> -->
                      <!-- <template v-else-if="!isJapanese && isShortNameVisible"> -->
                      <td
                        v-else-if="!isJapanese && isShortNameVisible"
                        class="col3"
                      >
                        {{ item.edt }}:{{ item.descriptions.en }}:{{
                          item.name
                        }}
                      </td>
                      <!-- </template> -->
                      <!-- <template v-else> -->
                      <td v-else class="col3">
                        {{ item.edt }}:{{ item.descriptions.en }}
                      </td>
                      <!-- </template> -->

                      <!-- <template v-if="isJapanese && isShortNameVisible">
                        <td class="col3">
                          {{ item.edt }}:{{ item.descriptions.ja }}:{{
                            item.name
                          }}
                        </td>
                      </template>
                      <template v-else-if="isJapanese && !isShortNameVisible">
                        <td class="col3">
                          {{ item.edt }}:{{ item.descriptions.ja }}
                        </td>
                      </template>
                      <template v-else-if="!isJapanese && isShortNameVisible">
                        <td class="col3">
                          {{ item.edt }}:{{ item.descriptions.en }}:{{
                            item.name
                          }}
                        </td>
                      </template>
                      <template v-else>
                        <td class="col3">
                          {{ item.edt }}:{{ item.descriptions.en }}
                        </td>
                      </template> -->
                    </tr>
                  </table>
                </template>

                <!-- numericValue -->
                <template v-else-if="rowData.propType === 'numericValue'">
                  <table>
                    <tr
                      v-for="item in rowData.range"
                      v-bind:key="item.id"
                      tabindex="0"
                    >
                      <td class="col3">
                        {{ item.edt }}:{{ item.numericValue }}
                      </td>
                    </tr>
                  </table>
                </template>

                <!-- bitmap -->
                <template v-else-if="rowData.propType === 'bitmap'">
                  <!-- <td class="col3">{{ rowData.range }}</td> -->
                  <td
                    class="col3 under"
                    v-on:click="showBitmap(rowData.bitmap)"
                  >
                    bitmap
                  </td>
                </template>

                <!-- others -->
                <template v-else>
                  <td class="col3">{{ rowData.range }}</td>
                </template>
                <!-- Column data value range end -->

                <td class="col4">{{ rowData.dataType }}</td>
                <!-- <td class="col5">{{ rowData.dataSize }}</td> -->
                <template v-if="rowData.dataSize === 0">
                  <td class="col5"></td>
                </template>
                <template v-else>
                  <td class="col5">{{ rowData.dataSize }}</td>
                </template>

                <td class="col6">{{ rowData.unit }}</td>
                <td class="col7">{{ rowData.accessRule }}</td>
                <td class="col8">{{ rowData.accessRuleRequired }}</td>
                <td class="col9">{{ rowData.inf }}</td>

                <!-- Column remark -->
                <template v-if="rowData.remark === 'empty'">
                  <td class="col10"></td>
                </template>
                <template v-else>
                  <td class="col10" v-on:click="showRemark(rowData.remark)">
                    *
                  </td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { faL } from "@fortawesome/free-solid-svg-icons";
import { defineComponent } from "vue";
console.log("HomeShowData init");
interface Obj {
  [prop: string]: any;
}
let globalRemarks: Obj = {}; // 備考欄のデータを保持するため
let globalBitmaps: Obj = {}; // value range欄のbitmapデータを保持するため
let globalIsFirstRow = true;

// type RowDataRangeItem ={
//   edt: string;
//   description?: string;
//   name?: string;
//   numericValue?: number;
// }

type RowData = {
  name: string;
  epc: string;
  propType: string;
  range: any;
  bitmap: string;
  dataType: string;
  dataSize: number;
  unit: string;
  accessRule: string;
  accessRuleRequired: string;
  inf: string;
  remark: string;
};
const rowDataArray: RowData[] = [];

// import { Log, NotificationData, IdInfo } from "../global.d";
// let g_statusCode = ""; // fetch API の statusCode を保持するため
// const idInfoList: IdInfo[] = []; // プロパティの初期化用データ
// const resourceTypeList: string[] = []; // プロパティの初期化用データ
// type ThingInfo = {
//   deviceType: string;
//   elPropertyList: string[];
//   elPropertyListWritable: string[];
//   actionList: string[];
// };
// let g_thingInfo: { [key: string]: ThingInfo } = {};
// type Option = {
//   method: string;
//   headers: Headers;
//   body?: string;
// };

export default defineComponent({
  name: "HomeShowData",
  data() {
    return {
      rbView: "specSheet", // selected radio button for sheet selection(pending)
      isJapanese: true, // selected radio button for language selection
      isShortNameVisible: false, // selected radio button for language selection
      rowDataArray: rowDataArray, // array of rowData
      packetDetail: "", // gabage code from SSNG
      selectedEoj: "0x0130", // selected device by pull down menu with default value
      deviceNames: [
        { name: "Super Class", eoj: "0x0000" },
        { name: "Node profile", eoj: "0x0EF0" },
      ], // list of device objects for a pull down menu
      selectedRelease: "M", // selected release by pull down menu
      releases: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
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
    remark: {
      get() {
        return this.$store.getters.remark;
      },
      set(value) {
        this.$store.dispatch("setRemark", value);
      },
    },
    bitmap: {
      get() {
        return this.$store.getters.bitmap;
      },
      set(value) {
        this.$store.dispatch("setBitmap", value);
      },
    },
  },
  methods: {
    // EOJが選択されたときの処理
    onDeviceSelection: function () {
      console.log("selectedEoj: ", this.selectedEoj);
      this.updateReleases();
      this.createRowDataArray();
      // const definitionsData = this.definitions.definitions.number_0.type;
      // console.log({ definitionsData });
      // const metaDataData = this.metaData.metaData.date;
      // console.log({ metaDataData });
      // const nodeProfileData = this.nodeProfile.eoj;
      // console.log({ nodeProfileData });
      // const superClassData = this.superClass.eoj;
      // console.log({ superClassData });
      // const devicesData = this.devices[0].eoj;
      // console.log({ devicesData });

      // this.updateDeviceNames();
    },
    // Release version が選択されたときの処理
    onReleaseSelection: function () {
      console.log("onReleaseSelection: ", this.selectedRelease);
      this.createRowDataArray();
    },
    // Language が選択された時の処理
    onLanguageSelection: function () {
      console.log("onLanguageSelection: isJapanese", this.isJapanese);
      this.updateDeviceNames();
      this.createRowDataArray();
    },
    // Name が選択された時の処理
    onShortNameVisible: function () {
      console.log(
        "onShortNameVisible: isShortNameVisible",
        this.isShortNameVisible
      );
      this.updateDeviceNames();
      this.createRowDataArray();
    },
    init: function () {
      console.log("function init");
      // this.selectedRelease = this.metaData.metaData.release;
    },
    // Appendixのrelease選択の要素を作成
    updateReleases: function () {
      const latestRelease = this.metaData.metaData.release;
      let firstRelease = "A";
      if (this.selectedEoj !== "0x0EF0" && this.selectedEoj !== "0x0000") {
        for (const device of this.devices) {
          if (device.eoj == this.selectedEoj) {
            firstRelease = device.validRelease.from;
          }
        }
      }
      console.log(
        "updateReleases: selectedEoj",
        this.selectedEoj,
        { firstRelease },
        { latestRelease }
      );
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      let releases = [];
      let i = 0;
      while (alphabet[i] != firstRelease) {
        i++;
      }
      while (alphabet[i] != latestRelease) {
        releases.push(alphabet[i]);
        i++;
      }
      releases.push(alphabet[i]);
      this.releases = releases.reverse();

      // selectedReleaseがreleases内にない場合は、latestReleaseにする
      // selectedRelease =
      //   firstRelease <= selectedRelease && selectedRelease <= latestRelease
      //     ? selectedRelease
      //     : latestRelease;
      // this.releaseSelected = selectedRelease;
    },
    updateDeviceNames: function () {
      console.log("function updateDeviceNames");
      const isJapanese = this.isJapanese;
      const isShortNameVisible = this.isShortNameVisible;

      console.log(
        "type of isJapanese",
        typeof isJapanese,
        { isJapanese },
        "type of isShortNameVisible",
        typeof isShortNameVisible,
        { isShortNameVisible }
      );
      // プルダウンメニュー：機器オブジェクトの選択の要素 (deviceNames) を作成
      // Super class and Node profile
      const nameSuperClass = this.isJapanese ? "スーパークラス" : "Super class";
      let nameNodeProfile = this.isJapanese
        ? "0x0EF0 ノードプロファイル"
        : "0x0EF0 Node profile";
      nameNodeProfile = this.isShortNameVisible
        ? nameNodeProfile + ": nodeProfile"
        : nameNodeProfile;
      let deviceNames = [
        { name: nameSuperClass, eoj: "0x0000" },
        { name: nameNodeProfile, eoj: "0x0EF0" },
      ];
      // devices
      for (const device of this.devices) {
        const eoj = device.eoj;
        const eojShortName = isShortNameVisible ? ": " + device.shortName : "";
        const deviceName = isJapanese
          ? {
              name: eoj + " " + device.className.ja + eojShortName,
              eoj: eoj,
            }
          : {
              name: eoj + " " + device.className.en + eojShortName,
              eoj: eoj,
            };
        deviceNames.push(deviceName);
      }
      // Sort deviceNames by EOJ
      deviceNames.sort(function (a, b) {
        return parseInt(a.eoj, 16) - parseInt(b.eoj, 16);
      });
      this.deviceNames = deviceNames;
    },

    // oneOfの処理
    // case 1: property.data.oneOf
    // case 2: data.type == "object" の場合の element.oneOf
    // case 3: data.type == "array" の場合の data.oneOf
    processOneOf: function (
      epc: string,
      property: string,
      id: string,
      indexObject: string,
      indexOneOf: string
    ) {
      // console.log("epc", epc, "property", property, "id", id, "indexObject", indexObject, "indexOneOf", indexOneOf);
      // oneOfの処理
      // if (property.data.oneOf) {
      //   const arrayOneOf = property.data.oneOf;
      //   for (indexOneOf = 0; indexOneOf < arrayOneOf.length; indexOneOf++) {
      //     property.data = arrayOneOf[indexOneOf];
      //     this.createRowData(epc, property, id, indexObject, indexOneOf);
      //     id++;
      //   }
      // } else {
      //   // const index = 0;  // 不要？
      //   this.createRowData(epc, property, id, indexObject, indexOneOf);
      //   id++;
      // }
    },

    // 表示用のデータrowDataArrayを作成する。
    createRowDataArray: function () {
      console.log(
        "createRowDataArray()",
        this.selectedEoj,
        this.selectedRelease
      );
      this.rowDataArray.length = 0; // Initialize rowDataArray
      globalIsFirstRow = true; // 必要?
      const latestRelease = this.metaData.release;

      // UIで選択された EOJ の elProperties を利用する
      let elProperties = this.superClass.elProperties; // 型推測のためデータアサイン
      switch (this.selectedEoj) {
        case "0x0000": // super class
          console.log("super class");
          break;
        case "0x0EF0": // node profile
          console.log("node profile");
          elProperties = this.nodeProfile.elProperties;
          break;
        default:
          // UIで選択されたdeviceのelPropertiesを利用する
          for (const device of this.devices) {
            if (device.eoj == this.selectedEoj) {
              elProperties = device.elProperties;
              console.log("device", device.eoj);
              break;
            }
          }
      }

      // elProperties から elProperty を取り出して処理する
      for (const elProperty of elProperties) {
        // elProperty が UI で選択した Release の対象外の場合は処理をスキップする
        const validReleaseTo =
          elProperty.validRelease.to == "latest"
            ? latestRelease
            : elProperty.validRelease.to;
        if (
          this.selectedRelease < elProperty.validRelease.from ||
          validReleaseTo < this.selectedRelease
        ) {
          console.log(
            "Release of ",
            elProperty.epc,
            " is invalid, from",
            elProperty.validRelease.from,
            "to",
            elProperty.validRelease.to
          );
          continue; // 以下の処理をスキップし、次の elProperty の処理へ移る
        }

        // elProperty の処理
        console.log(
          "EPC",
          elProperty.epc,
          "FROM",
          elProperty.validRelease.from,
          "TO",
          elProperty.validRelease.to
        );
        const rowDataName = this.isJapanese
          ? elProperty.propertyName.ja
          : elProperty.propertyName.en;
        const rowShortName = this.isShortNameVisible
          ? ": " + elProperty.shortName
          : "";
        const rowDataNameAndShortName = rowDataName + rowShortName;
        const rowDataEpc = elProperty.epc;

        // Access Rule
        let rowDataAccessRule = "";
        let rowDataAccessRuleRequired = "";
        switch (elProperty.accessRule.get) {
          case "notApplicable":
            switch (elProperty.accessRule.set) {
              case "notApplicable":
                rowDataAccessRule = "-";
                rowDataAccessRuleRequired = "";
                break;
              case "required":
                rowDataAccessRule = "Set";
                rowDataAccessRuleRequired = "○";
                break;
              case "required_c":
                rowDataAccessRule = "Set";
                rowDataAccessRuleRequired = "○*";
                break;
              case "optional":
                rowDataAccessRule = "Set";
                rowDataAccessRuleRequired = "";
                break;
              default:
                console.log("Error: accessRule is ", elProperty.accessRule.set);
            }
            break;
          case "required":
            switch (elProperty.accessRule.set) {
              case "notApplicable":
                rowDataAccessRule = "Get";
                rowDataAccessRuleRequired = "○";
                break;
              case "required":
                rowDataAccessRule = "Set/Get";
                rowDataAccessRuleRequired = "○";
                break;
              case "required_c":
                rowDataAccessRule = "Set/Get";
                rowDataAccessRuleRequired = "○*";
                break;
              case "optional":
                rowDataAccessRule = "Set/Get";
                rowDataAccessRuleRequired = "○Get";
                break;
              default:
                console.log("Error: accessRule is ", elProperty.accessRule.set);
            }
            break;
          case "required_c":
            switch (elProperty.accessRule.set) {
              case "notApplicable":
                rowDataAccessRule = "Get";
                rowDataAccessRuleRequired = "○*";
                break;
              case "required":
                rowDataAccessRule = "Set/Get";
                rowDataAccessRuleRequired = "○*";
                break;
              case "required_c":
                rowDataAccessRule = "Set/Get";
                rowDataAccessRuleRequired = "○*";
                break;
              case "optional":
                rowDataAccessRule = "Set/Get";
                rowDataAccessRuleRequired = "○*Get";
                break;
              default:
                console.log("Error: accessRule is ", elProperty.accessRule.set);
            }
            break;
          case "optional":
            switch (elProperty.accessRule.set) {
              case "notApplicable":
                rowDataAccessRule = "Get";
                rowDataAccessRuleRequired = "";
                break;
              case "required":
                rowDataAccessRule = "Set/Get";
                rowDataAccessRuleRequired = "○Set";
                break;
              case "required_c":
                rowDataAccessRule = "Set/Get";
                rowDataAccessRuleRequired = "○*Set";
                break;
              case "optional":
                rowDataAccessRule = "Set/Get";
                rowDataAccessRuleRequired = "";
                break;
              default:
                console.log("Error: accessRule is ", elProperty.accessRule.set);
            }
            break;
          default:
            console.log("Error: accessRule is ", elProperty.accessRule.get);
        }

        // access rule Anno (rowData.inf)
        const rowDataInf = elProperty.accessRule.inf == "required" ? "○" : "";

        // remark (rowData.remark)
        let rowDataRemark = "empty";
        if (elProperty.remark) {
          console.log("remark");
          rowDataRemark = elProperty.epc;
          if (this.isJapanese) {
            globalRemarks[rowDataRemark] = elProperty.remark.ja;
          } else {
            globalRemarks[rowDataRemark] = elProperty.remark.en;
          }
        }

        // console.log("call createRowData, schema", schema);
        globalIsFirstRow = true;
        this.createRowData(
          elProperty.data,
          true,
          false,
          rowDataNameAndShortName,
          rowDataEpc,
          rowDataAccessRule,
          rowDataAccessRuleRequired,
          rowDataInf,
          rowDataRemark
        );
      }
    },

    // １つの elProperty から表示行分のデータ(rowData)を作成し、rowDataArray に PUSH する。
    createRowData: function (
      schema: any,
      isFirstRow: boolean,
      is2ndOrLaterItemOfOneOf: boolean,
      name: string,
      epc: string,
      accessRule: string,
      accessRuleRequired: string,
      inf: string,
      remark: string
    ) {
      console.log(
        "function createRowData:",
        { isFirstRow },
        { is2ndOrLaterItemOfOneOf },
        { name },
        { epc },
        { accessRule },
        { accessRuleRequired },
        { inf }
      );
      // isFirstRow が true の場合のみ、name, epc, accessRule, accessRuleRequired, inf, remark を表示する
      let rowData: RowData = {
        name: name,
        epc: epc,
        propType: "",
        range: "",
        bitmap: "",
        dataType: "",
        dataSize: 0,
        unit: "",
        accessRule: accessRule,
        accessRuleRequired: accessRuleRequired,
        inf: inf,
        remark: remark,
      };

      // schema が definitions を参照している場合は、値を definitions から取得
      if (schema.$ref) {
        const ref = schema.$ref.split("/").pop(); // path の最後の要素
        schema = this.definitions.definitions[ref];
      }

      // schema に oneOf がある場合の処理
      // oneOf の中身を一つずつ取り出してcreateRowDataをリカーシブに呼ぶ
      if (schema.oneOf) {
        console.log("start for 文", typeof schema.oneOf);
        schema.oneOf.forEach((item: any, index: number) => {
          console.log(
            "oneOf: isFirstRow",
            isFirstRow,
            "index",
            index,
            "item",
            item
          );
          const is2ndOrLaterItemOfOneOf = index == 0 ? false : true;
          this.createRowData(
            item,
            isFirstRow,
            is2ndOrLaterItemOfOneOf,
            name,
            epc,
            accessRule,
            accessRuleRequired,
            inf,
            remark
          );
          isFirstRow = false;
        });
        // for (const [index, value] of schema.oneOf.entries()) {
        //   console.log(
        //     "oneOf: isFirstRow",
        //     isFirstRow,
        //     "index",
        //     index,
        //     "item",
        //     value
        //   );
        //   const is2ndOrLaterItemOfOneOf = index == 0 ? false : true;
        //   this.createRowData(
        //     value,
        //     isFirstRow,
        //     is2ndOrLaterItemOfOneOf,
        //     name,
        //     epc,
        //     accessRule,
        //     accessRuleRequired,
        //     inf,
        //     remark
        //   );
        //   isFirstRow = false;
        // }
        return;
      }

      // value range
      switch (schema.type) {
        case "state":
          rowData.propType = "state";
          rowData.range = schema.enum;
          rowData.dataType = "unsigned char";
          rowData.dataSize = schema.size;
          break;
        case "number":
          rowData.propType = "number";
          if (schema.enum) {
            rowData.range = schema.enum;
            console.log(rowData.range);
          } else {
            const multiple = schema.multiple ? schema.multiple : 1;
            // 10進数表示の３けた区切りのコンマを追加 (Intl.NumberFormat)
            const digit =
              new Intl.NumberFormat().format(schema.minimum * multiple) +
              " ~ " +
              new Intl.NumberFormat().format(schema.maximum * multiple);
            // 16進数表示の文字列作成
            // TODO:0x0の桁数分の0を追加
            // TODO:.minimumがマイナスの時のHEXの値の処理を追加
            const hex =
              "0x" +
              toStringHex(schema.minimum, 0) +
              " ~ 0x" +
              toStringHex(schema.maximum, 0);
            rowData.range = digit + " " + hex;
          }
          rowData.dataType = schema.format;
          rowData.unit = schema.unit;
          switch (schema.format) {
            case "int8":
              rowData.dataSize = 1;
              rowData.dataType = "signed char";
              break;
            case "uint8":
              rowData.dataSize = 1;
              rowData.dataType = "unsigned char";
              break;
            case "int16":
              rowData.dataSize = 2;
              rowData.dataType = "signed short";
              console.log("int16", rowData.dataSize, rowData.dataType);
              break;
            case "uint16":
              rowData.dataSize = 2;
              rowData.dataType = "unsigned short";
              break;
            case "int32":
              rowData.dataSize = 4;
              rowData.dataType = "signed long";
              break;
            case "uint32":
              rowData.dataSize = 4;
              rowData.dataType = "unsigned long";
              break;
            default:
          }
          break;
        case "numericValue":
          rowData.propType = "numericValue";
          rowData.range = schema.enum;
          rowData.dataType = "unsigned char";
          rowData.dataSize = schema.size;
          break;
        case "level": {
          rowData.propType = "level";
          let maxValue = parseInt(schema.base) + schema.maximum - 1;
          rowData.range =
            schema.base + " ... 0x" + toStringHex(maxValue, 1) + ": Level";
          rowData.dataType = "unsigned char";
          rowData.dataSize = 1;
          break;
        }
        case "bitmap":
          console.log("bitmap start");
          rowData.propType = "bitmap";
          rowData.range = "bitmap";
          rowData.bitmap = epc;
          rowData.dataType = "unsigned char";
          rowData.dataSize = schema.size;
          console.log(
            "bitmap",
            rowData.propType,
            rowData.range,
            rowData.bitmap,
            rowData.dataType,
            rowData.dataSize
          );
          globalBitmaps[epc] = JSON.stringify(schema.bitmaps, null, 4);
          console.log("bitmap end");
          break;
        case "date-time":
          rowData.propType = "date-time";
          rowData.dataType = "unsigned char";
          rowData.dataSize = schema.size ? schema.size : 7;
          switch (rowData.dataSize) {
            case 2:
              rowData.range = "YYYY YYYY:0~9999 0x0000~0x270F";
              break;
            case 3:
              rowData.range =
                "YYYY:MM YYYY:0~9999 0x0000~0x270F, MM:0~12 0x00~0x0C";
              break;
            case 4:
              rowData.range =
                "YYYY:MM:DD YYYY:0~9999 0x0000~0x270F, MM:0~12 0x00~0x0C, DD:0~31 0x00~0x1F";
              break;
            case 5:
              rowData.range =
                "YYYY:MM:DD:hh YYYY:0~9999 0x0000~0x270F, MM:0~12 0x00~0x0C, DD:0~31 0x00~0x1F, hh:0~23 0x00~0x17";
              break;
            case 6:
              rowData.range =
                "YYYY:MM:DD:hh:mm YYYY:0~9999 0x0000~0x270F, MM:0~12 0x00~0x0C, DD:0~31 0x00~0x1F, hh:0~23 0x00~0x17, mm:0~59 0x00~0x3B";
              break;
            case 7:
              rowData.range =
                "YYYY:MM:DD:hh:mm:ss YYYY:0~9999 0x0000~0x270F, MM:0~12 0x00~0x0C, DD:0~31 0x00~0x1F, hh:0~23 0x00~0x17, mm:0~59 0x00~0x3B, ss:0~59 0x00~0x3B";
              break;
            default:
              rowData.range = "date-time(default)";
          }
          break;
        case "time": {
          rowData.propType = "time";
          rowData.dataSize = schema.size ? schema.size : 3;
          const hourMax = schema.maximumOfHour ? schema.maximumOfHour : 23;
          switch (rowData.dataSize) {
            case 1:
              rowData.dataType = "unsigned char x 1";
              rowData.range =
                "HH HH:0~" +
                hourMax +
                " 0x00~0x" +
                hourMax.toString(16).toUpperCase();
              break;
            case 2:
              rowData.dataType = "unsigned char x 2";
              rowData.range =
                "HH:MM HH:0~" +
                hourMax +
                " 0x00~0x" +
                hourMax.toString(16).toUpperCase() +
                ", MM:0~59 0x00~0x3B";
              break;
            case 3:
              rowData.dataType = "unsigned char x 3";
              rowData.range =
                "HH:MM:SS HH:0~" +
                hourMax +
                " 0x00~0x" +
                hourMax.toString(16).toUpperCase() +
                ", MM:0~59 0x00~0x3B, SS:0~59 0x00~0x3B";
              break;
            default:
              rowData.range = "time";
          }
          break;
        }
        case "raw":
          rowData.propType = "raw";
          rowData.range = "-";
          rowData.dataType = "unsigned char";
          rowData.dataSize =
            schema.minSize == schema.maxSize
              ? schema.minSize
              : schema.minSize + "-" + schema.maxSize;
          break;
        case "oneOf":
          rowData.propType = "oneOf";
          console.log("case oneOf");
          break;
        // case "arrayHeader":
        //   rowData.propType = "arrayHeader";
        //   const minItems = schema.minItems ? schema.minItems : 1;
        //   const itemCount =
        //     schema.minItems == schema.maxItems
        //       ? minItems
        //       : minItems + " ~ " + schema.maxItems;
        //   rowData.dataType = "array:" + schema.itemSize + "byte X " + itemCount;
        //   break;

        case "array": {
          // display array header
          rowData.propType = "arrayHeader";
          const minItems = schema.minItems ? schema.minItems : 1;
          const itemCount =
            schema.minItems == schema.maxItems
              ? minItems
              : minItems + " ~ " + schema.maxItems;
          rowData.dataType = "array:" + schema.itemSize + "byte X " + itemCount;
          // const arrayHeaderSchema = {
          // propertyName: elProperty.propertyName,
          // shortName: elProperty.shortName,
          // accessRule: elProperty.accessRule,
          // data: {
          // type: "arrayHeader",
          // itemSize: schema.itemSize,
          // minItems: schema.minItems,
          // maxItems: schema.maxItems,
          // },
          // remark: elProperty.remark, // 2020.12.01
          // };
          // processOneOf(key, arrayHeaderProperty, id, indexObject, indexOneOf);
          // this.createRowData(
          //   arrayHeaderSchema,
          //   isFirstRow,
          //   name,
          //   epc,
          //   accessRule,
          //   accessRuleRequired,
          //   inf,
          //   remark
          // );
          if (isFirstRow) {
            isFirstRow = false;
          } else {
            rowData.name = "";
            rowData.epc = "";
            rowData.accessRule = "";
            rowData.accessRuleRequired = "";
            rowData.inf = "";
            rowData.remark = "empty";
          }

          console.log("PUSH arrayHeader", rowData.name, rowData.dataSize);
          this.rowDataArray.push(rowData);
          isFirstRow = false;

          // display array data
          rowData.propType = "array";
          // schema = schema.items;
          // processOneOf(key, elProperty, id, indexObject + 1, indexOneOf);
          console.log(
            "array: schema.items",
            schema.items,
            "isFirstRow",
            isFirstRow
          );
          this.createRowData(
            schema.items,
            isFirstRow,
            false,
            name,
            epc,
            accessRule,
            accessRuleRequired,
            inf,
            remark
          );
          globalIsFirstRow = false;
          return;
          // break;
        }
        case "objectHeader":
          rowData.propType = "objectHeader";
          rowData.range = schema.name + ": ";
          break;
        case "object": {
          for (const property of schema.properties) {
            let rowData: RowData = {
              name: name,
              epc: epc,
              propType: "",
              range: "",
              bitmap: "",
              dataType: "",
              dataSize: 0,
              unit: "",
              accessRule: accessRule,
              accessRuleRequired: accessRuleRequired,
              inf: inf,
              remark: remark,
            };

            // PUSH header
            rowData.propType = "objectHeader";
            const elementName = this.isJapanese
              ? property.elementName.ja
              : property.elementName.en;
            const shortName = this.isShortNameVisible ? property.shortName : "";
            rowData.dataType = "";
            rowData.range = elementName + shortName;
            console.log("PUSH objectHeader", rowData.range, rowData.dataSize, {
              isFirstRow,
            });
            if (isFirstRow) {
              isFirstRow = false;
            } else {
              rowData.name = "";
              rowData.epc = "";
              rowData.accessRule = "";
              rowData.accessRuleRequired = "";
              rowData.inf = "";
              rowData.remark = "empty";
            }
            this.rowDataArray.push(rowData);

            // Create rowData
            rowData.propType = "object";
            console.log(
              "object: property.element",
              property.element,
              "isFirstRow",
              isFirstRow
            );
            // object property.element をコピー
            const schemaCopy = JSON.parse(JSON.stringify(property.element));
            console.log({ schemaCopy });
            this.createRowData(
              schemaCopy,
              isFirstRow,
              false,
              name,
              epc,
              accessRule,
              accessRuleRequired,
              inf,
              remark
            );
          }
          globalIsFirstRow = false;
          return;
          // const arrayObject = schema.properties;
          // indexObject = indexObject === null ? 0 : indexObject;
          // for (let i = 0; i < arrayObject.length; i++, indexObject++) {
          //   // display object header
          //   let objectTitle = "Missing descriptions";
          //   // if (arrayObject[i].descriptions) {
          //   if (arrayObject[i].elementName) {
          //     objectTitle = this.isJapanese
          //       ? // ? arrayObject[i].descriptions.ja
          //         // : arrayObject[i].descriptions.en;
          //         arrayObject[i].elementName.ja
          //       : arrayObject[i].elementName.en;
          //   }
          //   // objectTitleにnameを追加
          //   if (this.isShortNameVisible) {
          //     // objectTitle += ": " + arrayObject[i].name;
          //     objectTitle += ": " + arrayObject[i].shortName;
          //   }
          //   const objectHeaderProperty = {
          //     propertyName: elProperty.propertyName,
          //     shortName: elProperty.shortName,
          //     accessRule: elProperty.accessRule,
          //     data: {
          //       type: "objectHeader",
          //       name: objectTitle,
          //     },
          //     remark: elProperty.remark,
          //   };
          //   // processOneOf(
          //   //   key,
          //   //   objectHeaderProperty,
          //   //   id,
          //   //   indexObject,
          //   //   indexOneOf
          //   // );

          //   // display object data
          //   schema = arrayObject[i].element;
          //   // processOneOf(key, elProperty, id, indexObject + 1, indexOneOf);
          // }
        }
        default:
          console.log("default", schema.type);
      } // end of switch

      if (schema.multiple) {
        if (schema.unit) {
          rowData.unit = schema.multiple + " " + schema.unit;
        } else {
          rowData.unit = schema.unit;
        }
      }

      // if (indexOneOf > 0) {
      //   rowData.epc = "";
      //   rowData.name = "";
      //   rowData.dataType = "";
      //   rowData.dataSize = "";
      //   rowData.accessRule = "";
      //   rowData.accessRuleRequired = "";
      //   rowData.inf = "";
      //   rowData.remark = "empty";
      // } else if (
      //   indexObject > 0 &&
      //   (indexOneOf === null || indexOneOf === 0)
      // ) {
      //   rowData.epc = "";
      //   rowData.name = "";
      //   rowData.accessRule = "";
      //   rowData.accessRuleRequired = "";
      //   rowData.inf = "";
      //   rowData.remark = "empty";
      // }

      // console.log("schema.size", schema.size);
      // rowData.dataSize = schema.size;

      // isFirstRow が true の場合のみ、name, epc, accessRule, accessRuleRequired, inf, remark を表示する
      if (isFirstRow) {
        isFirstRow = false;
      } else {
        rowData.name = "";
        rowData.epc = "";
        rowData.accessRule = "";
        rowData.accessRuleRequired = "";
        rowData.inf = "";
        rowData.remark = "empty";
      }
      if (is2ndOrLaterItemOfOneOf) {
        rowData.dataType = "";
        rowData.dataSize = 0;
        rowData.unit = "";
      }
      console.log("PUSH rowData", rowData.name, rowData.dataSize);
      this.rowDataArray.push(rowData);
    },
    // 値域欄のbitmapをクリックしたときの動作
    showBitmap: function (epc: string) {
      console.log("showBitmap", epc);
      this.bitmap.title = "Bitmap schema for EPC: " + epc;
      this.bitmap.content = globalBitmaps[epc];
      this.$router.push("bitmap");

      // window.localStorage.setItem("bitmap-title", "EPC = " + bitmapEpc);
      // window.localStorage.setItem("bitmap-content", globalBitmaps[bitmapEpc]);
      // window.open("bitmap.html", "bitmap", "width=600,height=300");
    },
    // 備考欄の * をクリックしたときの動作
    showRemark: function (epc: string) {
      console.log("showRemark", epc);
      this.remark.title = "Remark for EPC: " + epc;
      this.remark.content = globalRemarks[epc];
      this.$router.push("remark");
    },
  },
  created: function () {
    console.log("HomeShowData is created");
    this.selectedRelease = "M";
    this.selectedEoj = "0x0130";
    this.updateDeviceNames();
    this.updateReleases();
    this.createRowDataArray();
  },
});

// function toStringHex(int:number, int:bytes)
// 数値(number)を(bytes)桁数の16進数表記の文字列に変換する
// 数値のbyte数は(bytes)
// bytes = 0 の場合は、numberをもとに桁数を計算する
// example: toStringHex(10, 1) => "0A"
// example: toStringHex(10, 2) => "000A"
// example: toStringHex(-3, 1) => "FD"
function toStringHex(number: number, bytes: number) {
  // bytes = 0 の時、number の byte 数を計算する
  if (bytes == 0) {
    if (Math.abs(number) <= 0xff) {
      bytes = 1;
    } else if (Math.abs(number) <= 0xffff) {
      bytes = 2;
    } else {
      bytes = 4;
    }
  }
  if (number < 0) {
    // number が負の値の処理。２の補数を計算。
    if (Math.abs(number) <= 0xff) {
      number = 0xff + number + 1;
    } else if (Math.abs(number) <= 0xffff) {
      number = 0xffff + number + 1;
    } else {
      number = 0xffffffff + number + 1;
    }
  }
  let str = number.toString(16).toUpperCase();
  // 桁数分、頭に0をpaddingする
  while (str.length < 2 * bytes) {
    str = "0" + str;
  }
  return str;
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}

body {
  padding-top: 1rem;
}

table td,
th {
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  font-family: Consolas, "Courier New", Courier, Monaco, monospace;
  font-size: 0.9rem;
  cursor: pointer;
}
/* プロパティ */
.col1 {
  width: 16rem;
  vertical-align: middle;
}
/* EPC */
.col2 {
  width: 3rem;
  vertical-align: middle;
}
/* 値域 */
.col3 {
  width: 16rem;
  font-size: 0.8rem;
  vertical-align: middle;
  padding-top: 0rem;
  padding-bottom: 0rem;
}
/* データ型 */
.col4 {
  width: 10rem;
  font-size: 0.8rem;
  vertical-align: middle;
}
/* データサイズ */
.col5 {
  width: 4rem;
  vertical-align: middle;
}
/* 単位 */
.col6 {
  width: 8rem;
  vertical-align: middle;
}
/* アクセスルール */
.col7 {
  width: 4rem;
  font-size: 0.8rem;
  vertical-align: middle;
}
/* 必須 */
.col8 {
  width: 2rem;
  vertical-align: middle;
}
/* 状変時 */
.col9 {
  width: 5rem;
  vertical-align: middle;
}
/* 備考 */
.col10 {
  width: 2rem;
  vertical-align: middle;
}
.card-body {
  margin: 0;
  padding: 0;
}
#scrollWindow {
  height: 80vh;
  overflow-y: scroll;
}
.under {
  text-decoration: underline blue;
}
</style>
