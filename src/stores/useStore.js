import { defineStore } from "pinia";
import { useConfigDefinition } from "@/composables/useConfigDefinition";
import { useUtilities } from "@/composables/useUtilities";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      role: "admin",
      firstName: "Yelyzaveta",
      lastName: "Dubohryz",
      department: "Java Department",
      position: "Software Engineer",
      email: "el.dubogryz@gmail.com",
      wallet: {
        giveable: 60,
        redeemable: 100,
      },
    };
  },
  getters: {
    isAdmin(state) {
      return state.role === "admin";
    },
    initials(state) {
      return useUtilities().getInitials(state.firstName + " " + state.lastName);
    },
    fullName(state) {
      return state.firstName + " " + state.lastName;
    },
  },
  actions: {
    initLoad() {
      this.adminConfigDefinition = useConfigDefinition().configDefinition;
    },
    selectTab(tab) {
      this.selectedTab = tab;
    },
    decreaseGiveable(amount) {
      this.wallet.giveable = this.wallet.giveable - amount;
    },
    decreaseRedeemable(amount) {
      this.wallet.redeemable = this.wallet.redeemable - amount;
    },
  },
});
