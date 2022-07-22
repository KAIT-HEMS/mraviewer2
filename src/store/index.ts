// store/index.ts
// VueX を利用して global に値の受け渡しを実現する

import { createStore } from "vuex";

const definitionsJson = localStorage.getItem("definitions") ?? "{}";
const definitions = JSON.parse(definitionsJson);
const metaDataJson =
  localStorage.getItem("metaData") ??
  '{"metaData":{"dataVersion":"unknown","release":"unknown"}}';
const metaData = JSON.parse(metaDataJson);
const nodeProfileJson = localStorage.getItem("nodeProfile") ?? "{}";
const nodeProfile = JSON.parse(nodeProfileJson);
const superClassJson = localStorage.getItem("superClass") ?? "{}";
const superClass = JSON.parse(superClassJson);
const devicesJson = localStorage.getItem("devices") ?? "{}";
const devicesObject = JSON.parse(devicesJson);
const devices = devicesObject.devices ?? [];

export default createStore({
  state: {
    selectedEoj: "0x0130",
    selectedRelease: "Z",
    isJapanese: true,
    isShortNameVisible: false,
    definitions: definitions,
    metaData: metaData,
    nodeProfile: nodeProfile,
    superClass: superClass,
    devices: devices,
    remark: {},
    bitmap: {},
  },
  getters: {
    selectedEoj: (state) => state.selectedEoj,
    selectedRelease: (state) => state.selectedRelease,
    isJapanese: (state) => state.isJapanese,
    isShortNameVisible: (state) => state.isShortNameVisible,
    definitions: (state) => state.definitions,
    metaData: (state) => state.metaData,
    nodeProfile: (state) => state.nodeProfile,
    superClass: (state) => state.superClass,
    devices: (state) => state.devices,
    remark: (state) => state.remark,
    bitmap: (state) => state.bitmap,
  },
  mutations: {
    setSelectedEoj: function (state, value) {
      state.selectedEoj = value;
    },
    setSelectedRelease: function (state, value) {
      state.selectedRelease = value;
    },
    setIsJapanese: function (state, value) {
      state.isJapanese = value;
    },
    setIsShortNameVisible: function (state, value) {
      state.isShortNameVisible = value;
    },
    setDefinitions: function (state, value) {
      state.definitions = value;
    },
    setMetaData: function (state, value) {
      state.metaData = value;
    },
    setNodeProfile: function (state, value) {
      state.nodeProfile = value;
    },
    setSuperClass: function (state, value) {
      state.superClass = value;
    },
    setDevices: function (state, value) {
      state.devices = value;
    },
    setRemark: function (state, value) {
      state.remark = value;
    },
    setBitmap: function (state, value) {
      state.bitmap = value;
    },
  },
  actions: {
    setSelectedEoj: function ({ commit }, value) {
      commit("setSelectedEoj", value);
    },
    setSelectedRelease: function ({ commit }, value) {
      commit("setSelectedRelease", value);
    },
    setIsJapanese: function ({ commit }, value) {
      commit("setIsJapanese", value);
    },
    setIsShortNameVisible: function ({ commit }, value) {
      commit("setIsShortNameVisible", value);
    },
    setDefinitions: function ({ commit }, value) {
      commit("setDefinitions", value);
    },
    setMetaData: function ({ commit }, value) {
      commit("setMetaData", value);
    },
    setNodeProfile: function ({ commit }, value) {
      commit("setNodeProfile", value);
    },
    setSuperClass: function ({ commit }, value) {
      commit("setSuperClass", value);
    },
    setDevices: function ({ commit }, value) {
      commit("setDevices", value);
    },
    setRemark: function ({ commit }, value) {
      commit("setRemark", value);
    },
    setBitmap: function ({ commit }, value) {
      commit("setBitmap", value);
    },
  },
});
