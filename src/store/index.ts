// store/index.ts
// VueX を利用して global に値の受け渡しを実現する

import { createStore } from "vuex";

export default createStore({
  state: {
    definitions: {},
    metaData: {},
    nodeProfile: {},
    superClass: {},
    devices: [],
    remark: {},
    bitmap: {},
  },
  getters: {
    definitions: (state) => state.definitions,
    metaData: (state) => state.metaData,
    nodeProfile: (state) => state.nodeProfile,
    superClass: (state) => state.superClass,
    devices: (state) => state.devices,
    remark: (state) => state.remark,
    bitmap: (state) => state.bitmap,
  },
  mutations: {
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
