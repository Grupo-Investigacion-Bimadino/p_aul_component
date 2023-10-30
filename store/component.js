import { defineStore } from "pinia";

export const useComponentStore = defineStore("component", {
  state: () => {
    return {
      components: [],
      component: {},
    };
  },
  getters: {
    getComponent: (state) => state.component,
  },
  actions: {
    addComponent(component) {
      this.components.push(component);
    },
    setComponent(component) {
      this.component = component;
    },
    getComponentById(id) {
      return this.components.find((component) => component._id === id);
    },
  },
});
