import { defineStore } from "pinia";
import { useConfigDefinition } from "@/composables/useConfigDefinition";

export const useConfigStore = defineStore("config", {
  state: () => {
    return {
      selectedTab: "profile",
      adminConfigDefinition: null,
    };
  },
  getters: {},
  actions: {
    initLoad() {
      this.adminConfigDefinition = useConfigDefinition().configDefinition;
    },
    selectTab(tab) {
      this.selectedTab = tab;
    },
    addRule() {},
  },
});
