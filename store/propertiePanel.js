import { defineStore } from "pinia";
export const usePropertiePanelStore = defineStore("propertiePanel", {
  state: () => {
    return {
      componentTemp: {},
    };
  },
  getters: {
    getComponentTemp: (state) => state.componentTemp,
  },
  actions: {
    setComponentTemp(component) {
      this.componentTemp = component;
    },
  },
});
