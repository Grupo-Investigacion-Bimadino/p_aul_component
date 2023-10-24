import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      drawer: false,
      //pasar a propertiePanel
      showProperties: false,
      PanelButtons: false,
    };
  },
  getters: {
    getDrawer: (state) => state.drawer,
    getShowProperties: (state) => state.showProperties,
    getPanelButtons: (state) => state.PanelButtons,
  },
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    hideDrawer() {
      this.drawer = false;
    },
    toggleShowProperties() {
      this.showProperties = !this.showProperties;
    },
    hideShowProperties() {
      this.showProperties = false;
    },
    showPanelButtons() {
      this.PanelButtons = true;
    },
    hidePanelButtons() {
      this.PanelButtons = false;
    },
  },
});
