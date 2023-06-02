import { defineStore } from "pinia";
import { useDataService } from "@/composables/useDataService";
import { useUserStore } from "@/stores/useStore";

export const useRecognitionStore = defineStore("recognition", {
  state: () => {
    return {
      recognitions: {
        given: [
          {
            id: "qaefdaf",
            senderName: "Yelyzaveta Dubohryz",
            recipientName: "Abb Bb",
            amount: 20,
            text: "@bear +20 Thank you so much for working with me to get a customer story on the website! I can always count on you to build great relationships with our customers.",
            date: "May 26th",
          },
        ],
        received: [
          {
            id: "qaefdaf1",
            senderName: "Sample User",
            recipientName: "Yelyzaveta Dubohryz",
            amount: 50,
            text: "@bear +50 Thank you so much for working with me to get a customer story on the website! I can always count on you to build great relationships with our customers.",
            date: "May 25th",
          },
        ],
      },
      bonuses: [
        {
          id: 1,
          name: "Coupon for Ikea",
          description: "Furniture and interior design for your home",
          price: 100,
          mainImage: "https://picsum.photos/600/300/?image=25",
          category: { name: "home" },
        },
      ],
      perPage: 20,
      selectedCategory: "home",
      idCounter: 0,
      idSample: "qaefdaf1",
    };
  },
  getters: {
    filteredBonuses(state) {
      return state.bonuses.filter(
        (b) => b.category.name === state.selectedCategory
      );
    },
    bonusesSize(state) {
      return state.bonuses.length;
    },
    filteredBonusesSize(state) {
      return state.filteredBonuses.length;
    },
    bonusPage(state) {
      return (pageNumber) => {
        const start = (pageNumber - 1) * state.perPage;
        const lastIndex = pageNumber * state.perPage;
        const end =
          lastIndex < state.filteredBonusesSize
            ? lastIndex
            : state.filteredBonusesSize;
        return state.filteredBonuses.slice(start, end);
      };
    },
  },
  actions: {
    addRecognition(recognition) {
      this.idCounter = this.idCounter + 1;

      this.recognitions.given.unshift({
        id: this.idSample + this.idCounter,
        senderName: "Yelyzaveta Dubohryz",
        recipientName: "Sample User",
        amount: recognition.amount,
        text: recognition.text,
        date: "May 29th",
      });

      useUserStore().decreaseGiveable(recognition.amount);
    },
    selectCategory(category) {
      console.log("STORE selectCategory", category);
      this.selectedCategory = category;
      console.log("STORE", this.selectedCategory);
    },

    async loadCategories() {
      console.log("LOAD CATEGORIES", await useDataService().getCategories());
      // this.categories = await useDataService().getCategories();
    },

    addCustomBonus(bonus) {
      this.bonuses.push({
        name: bonus.name,
        description: bonus.description,
      });
    },

    async loadBonuses() {
      console.log("LOAD CATEGORIES", await useDataService().getCategories());
      // this.bonuses = await useDataService().getBonuses();
    },
  },
});
